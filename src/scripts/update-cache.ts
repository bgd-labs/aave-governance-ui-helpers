import {
  IGovernanceCore_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingPortal_ABI,
} from '@bgd-labs/aave-address-book';
import {
  CHAIN_ID_CLIENT_MAP,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { Address, getContract, Hex, zeroAddress, zeroHash } from 'viem';
import { getBlock, getEnsName } from 'viem/actions';
import { mainnet } from 'viem/chains';

import {
  BasicProposal,
  checkHash,
  CombineProposalState,
  CreationFee,
  CreationFeeState,
  FinishedProposalForList,
  getDetailedProposalsData,
  getGovCoreConfigs,
  getProposalState,
  getProposalStepsAndAmounts,
  getVotingMachineProposalState,
  HistoryItemType,
  InitialPayload,
  InitialProposal,
  normalizeBN,
  Payload,
  PayloadState,
  ProposalHistoryItem,
  ProposalMetadata,
  ProposalState,
  ProposalStructOutput,
  VMProposalStructOutput,
  VotersData,
  VotingMachineProposalState,
} from '..';
import { isProposalFinal } from '../utils/viem/events/governance';
import { getPayloadsControllerEvents } from '../utils/viem/events/payloadsController';
import { appConfig, coreName } from './config';
import {
  APIEvent,
  APIPayloadData,
  APIProposalData,
  CachedProposalData,
  FormatProposalParams,
  RequestedProposalData,
} from './types';

const initDirName = `ui/${coreName}`;

async function getNotCachedDataFromAPI({
  govCoreChainId,
  govCoreContractAddress,
}: {
  govCoreChainId: BigInt | number;
  govCoreContractAddress: Address;
}) {
  // initialize contracts
  const govCoreClient = CHAIN_ID_CLIENT_MAP[Number(govCoreChainId)];
  const govCore = getContract({
    address: govCoreContractAddress,
    abi: IGovernanceCore_ABI,
    client: govCoreClient,
  });

  // check proposals count
  const proposalsCount = await govCore.read.getProposalsCount();
  const proposalsIds = [...Array(Number(proposalsCount)).keys()];

  // check and return not finished proposals
  const data = await Promise.all(
    proposalsIds.map(async (id) => {
      const proposalCache = readJSONCache<{
        payloads: Payload[];
        ipfs: ProposalMetadata;
        proposal: BasicProposal;
      }>(`${initDirName}/proposals`, `proposal_${id}`);

      if (
        !proposalCache ||
        !proposalCache?.proposal.isFinished ||
        Number(proposalCache.proposal.cancellationFee) > 0
      ) {
        const proposalDataFromAPIResponse = await fetch(
          `https://api.onaave.com/governance/proposal/?proposalId=${id}&chainId=${govCoreChainId}&governance=${govCoreContractAddress}`,
        );

        if (proposalDataFromAPIResponse.ok) {
          const proposalDataFromAPI =
            (await proposalDataFromAPIResponse.json()) as APIProposalData;

          const portalContract = getContract({
            abi: IVotingPortal_ABI,
            client: CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId],
            address: proposalDataFromAPI.proposal.args.votingPortal,
          });
          const votingChainId =
            await portalContract.read.VOTING_MACHINE_CHAIN_ID();

          const proposal = {
            id: BigInt(id),
            votingChainId: votingChainId,
            proposalData: {
              ...proposalDataFromAPI.proposal.args,
              isFinished: false,
            },
          };

          const proposalPayloadsDataFromAPI = await Promise.all(
            proposal.proposalData.payloads.map(async (payload) => {
              const payloadsDataFromAPIResponse = await fetch(
                `https://api.onaave.com/governance/payload/?payloadId=${payload.payloadId}&chainId=${Number(payload.chain)}&payloadsController=${payload.payloadsController}`,
              );
              return (await payloadsDataFromAPIResponse.json()) as APIPayloadData;
            }),
          );

          // maximum delay from all payloads in proposal for finished timestamp
          const payloadsExecutionDelay = Math.max.apply(
            0,
            proposalPayloadsDataFromAPI.map(
              (payload) => payload?.proposal.args.delay || 0,
            ),
          );

          const isProposalPayloadsFinished = proposalPayloadsDataFromAPI.every(
            (payload) =>
              payload && payload?.proposal.args.state > PayloadState.Queued,
          );

          const proposalPayloadsData = proposalPayloadsDataFromAPI.map(
            (payload) => {
              return {
                id: payload?.proposal.payloadId,
                chainId: payload?.proposal.chainId,
                payloadsController: payload?.proposal.payloadsControllerAddress,
                ...payload?.proposal.args,
              };
            },
          );

          return {
            proposal,
            proposalDataFromAPI,
            proposalPayloadsDataFromAPI,
            payloadsExecutionDelay,
            proposalPayloadsData,
            isProposalPayloadsFinished,
          } as RequestedProposalData;
        }
      }

      return proposalCache as CachedProposalData;
    }),
  );

  return {
    totalProposalCount: proposalsCount,
    data,
  };
}

// get data from voting machine contracts RPC calls
async function getVotingData(initialProposals: InitialProposal[]) {
  const votingMachineDataHelpers = {
    [appConfig.votingMachineChainIds[0]]: getContract({
      address:
        appConfig.votingMachineConfig[appConfig.votingMachineChainIds[0]]
          .dataHelperContractAddress,
      abi: IVotingMachineDataHelper_ABI,
      client: CHAIN_ID_CLIENT_MAP[appConfig.votingMachineChainIds[0]],
    }),
  };
  if (appConfig.votingMachineChainIds.length > 1) {
    appConfig.votingMachineChainIds.forEach((chainId) => {
      const votingMachineConfig = appConfig.votingMachineConfig[chainId];
      votingMachineDataHelpers[chainId] = getContract({
        address: votingMachineConfig.dataHelperContractAddress,
        abi: IVotingMachineDataHelper_ABI,
        client: CHAIN_ID_CLIENT_MAP[chainId],
      });
    });
  }

  const votingMachineChainIds = initialProposals
    .map((data) => data.votingChainId)
    .filter((value, index, self) => self.indexOf(value) === index);

  const votingMachines: Record<number, Hex> = {};
  const data = await Promise.all(
    votingMachineChainIds.map(async (chainId) => {
      const votingMachineDataHelper = votingMachineDataHelpers[chainId];

      const formattedInitialProposals = initialProposals
        .filter((proposal) => proposal.votingChainId === chainId)
        .map((proposal) => {
          return {
            id: proposal.id,
            snapshotBlockHash: proposal.snapshotBlockHash,
          };
        });

      votingMachines[chainId] =
        appConfig.votingMachineConfig[chainId].contractAddress;

      return (
        (await votingMachineDataHelper.read.getProposalsData([
          appConfig.votingMachineConfig[chainId].contractAddress,
          formattedInitialProposals,
          zeroAddress,
        ])) || []
      );
    }),
  );

  return data.flat();
}

// format proposal data for UI compatibility
function formatProposalsData({
  proposal,
  configs,
  constants,
  ipfsTitle,
  proposalPayloadsData,
  executionDelay,
}: FormatProposalParams) {
  const proposalConfig = configs.filter(
    (config) => config.accessLevel === proposal.accessLevel,
  )[0];

  const formattedProposalData = {
    ...proposal,
    payloads: proposalPayloadsData,
    title: ipfsTitle || `Proposal #${proposal.id}`,
    votingMachineState: getVotingMachineProposalState(proposal),
  };

  const proposalState = getProposalState({
    proposalData: formattedProposalData,
    quorum: proposalConfig.quorum,
    differential: proposalConfig.differential,
    precisionDivider: constants.precisionDivider,
    cooldownPeriod: constants.cooldownPeriod,
    executionDelay,
  });

  return {
    executionDelay,
    formattedProposalData,
    proposalState,
    proposalConfig,
    constants,
  };
}

async function parseProposalEvents({
  proposal,
  configs,
  constants,
  ipfsTitle,
  proposalPayloadsData,
  executionDelay,
  events,
}: {
  events: APIEvent[];
} & FormatProposalParams) {
  const proposalHistoryEvents =
    readJSONCache<Record<string, ProposalHistoryItem>>(
      `${initDirName}/events`,
      `proposal_${proposal.id}_events`,
    ) || {};

  if (
    (!!Object.keys(proposalHistoryEvents).length &&
      !Object.keys(proposalHistoryEvents)
        [Object.keys(proposalHistoryEvents).length - 1].split('_')
        .some(
          (event) => event === HistoryItemType.PAYLOADS_EXECUTED.toString(),
        )) ||
    !Object.keys(proposalHistoryEvents).length ||
    !proposal.isFinished
  ) {
    const setEvent = ({
      historyId,
      type,
      id,
      hash,
      chainId,
      timestamp,
      addresses,
    }: {
      historyId: string;
      type: HistoryItemType;
      id: number;
      chainId: number;
      hash?: Hex;
      timestamp?: number;
      addresses?: Hex[];
    }) => {
      proposalHistoryEvents[historyId] = {
        type: type,
        title: '',
        timestamp: timestamp,
        addresses,
        txInfo: {
          id,
          hash: hash || zeroHash,
          chainId,
          hashLoading: false,
        },
      };
    };

    const { formattedProposalData, proposalConfig, proposalState } =
      formatProposalsData({
        proposal,
        configs,
        constants,
        ipfsTitle,
        proposalPayloadsData,
        executionDelay,
      });

    const {
      isVotingFailed,
      isVotingEnded,
      lastPayloadCanceledAt,
      lastPayloadExpiredAt,
    } = getProposalStepsAndAmounts({
      proposalData: formattedProposalData,
      quorum: proposalConfig.quorum,
      differential: proposalConfig.differential,
      precisionDivider: constants.precisionDivider,
      cooldownPeriod: constants.cooldownPeriod,
      executionDelay,
    });

    // PAYLOADS_CREATED
    formattedProposalData.payloads.forEach((payload, index) => {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.PAYLOADS_CREATED}_${payload.id}_${payload.chainId}`;

      setEvent({
        historyId,
        type: HistoryItemType.PAYLOADS_CREATED,
        id: payload.id,
        chainId: payload.chainId,
        timestamp: payload.createdAt,
        addresses: payload.actions.map((action) => action.target),
        hash: events.find(
          (event) =>
            event.eventName === 'PayloadCreated' &&
            event.args.payloadId === payload.id,
        )?.transactionHash,
      });
    });

    // PROPOSAL_CREATED
    const historyIdProposalCreated = `${formattedProposalData.id}_${HistoryItemType.CREATED}`;
    setEvent({
      historyId: historyIdProposalCreated,
      type: HistoryItemType.CREATED,
      id: formattedProposalData.id,
      chainId: appConfig.govCoreChainId,
      timestamp: formattedProposalData.creationTime,
      hash: events.find(
        (event) =>
          event.eventName === 'ProposalCreated' &&
          Number(event.args.proposalId) === formattedProposalData.id,
      )?.transactionHash,
    });

    // PROPOSAL_ACTIVATE
    if (checkHash(formattedProposalData.snapshotBlockHash).notZero) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.PROPOSAL_ACTIVATE}`;
      setEvent({
        historyId,
        type: HistoryItemType.PROPOSAL_ACTIVATE,
        id: formattedProposalData.id,
        chainId: appConfig.govCoreChainId,
        timestamp: formattedProposalData.votingActivationTime,
        hash: events.find(
          (event) =>
            event.eventName === 'VotingActivated' &&
            Number(event.args.proposalId) === formattedProposalData.id,
        )?.transactionHash,
      });
    }

    // OPEN_TO_VOTE
    if (formattedProposalData.votingMachineData.createdBlock > 0) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.OPEN_TO_VOTE}`;
      setEvent({
        historyId,
        type: HistoryItemType.OPEN_TO_VOTE,
        id: formattedProposalData.id,
        chainId: formattedProposalData.votingChainId,
        timestamp: formattedProposalData.votingMachineData.startTime,
      });
    }

    // VOTING_OVER
    if (isVotingEnded) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.VOTING_OVER}`;
      setEvent({
        historyId,
        type: HistoryItemType.VOTING_OVER,
        id: formattedProposalData.id,
        chainId: formattedProposalData.votingChainId,
        timestamp: formattedProposalData.votingMachineData.endTime,
      });
    }

    // VOTING_CLOSED
    if (
      formattedProposalData.votingMachineData.votingClosedAndSentTimestamp >
        0 &&
      !isVotingFailed
    ) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.VOTING_CLOSED}`;
      setEvent({
        historyId,
        type: HistoryItemType.VOTING_CLOSED,
        id: formattedProposalData.id,
        chainId: formattedProposalData.votingChainId,
        timestamp:
          formattedProposalData.votingMachineData.votingClosedAndSentTimestamp,
      });
    }

    // RESULTS_SENT
    if (
      formattedProposalData.votingMachineData.sentToGovernance &&
      !isVotingFailed
    ) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.RESULTS_SENT}`;
      setEvent({
        historyId,
        type: HistoryItemType.RESULTS_SENT,
        id: formattedProposalData.id,
        chainId: appConfig.govCoreChainId,
      });
    }

    // PROPOSAL_QUEUED
    if (formattedProposalData.queuingTime > 0 && !isVotingFailed) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.PROPOSAL_QUEUED}`;
      setEvent({
        historyId,
        type: HistoryItemType.PROPOSAL_QUEUED,
        id: formattedProposalData.id,
        chainId: appConfig.govCoreChainId,
        timestamp: formattedProposalData.queuingTime,
        hash: events.find(
          (event) =>
            event.eventName === 'ProposalQueued' &&
            Number(event.args.proposalId) === formattedProposalData.id,
        )?.transactionHash,
      });
    }

    // PROPOSAL_EXECUTED
    if (formattedProposalData.state === ProposalState.Executed) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.PROPOSAL_EXECUTED}`;
      const executedTimestamp = (
        await getBlock(CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId], {
          blockNumber: BigInt(
            events.find(
              (event) =>
                event.eventName === 'ProposalExecuted' &&
                Number(event.args.proposalId) === formattedProposalData.id,
            )?.blockNumber ?? 0,
          ),
        })
      ).timestamp;

      setEvent({
        historyId,
        type: HistoryItemType.PROPOSAL_EXECUTED,
        id: formattedProposalData.id,
        chainId: appConfig.govCoreChainId,
        timestamp: Number(executedTimestamp),
        hash: events.find(
          (event) =>
            event.eventName === 'ProposalExecuted' &&
            Number(event.args.proposalId) === formattedProposalData.id,
        )?.transactionHash,
      });
    }

    // PAYLOADS_QUEUED
    if (
      formattedProposalData.payloads.some(
        (payload) => payload?.queuedAt > 0 && !isVotingFailed,
      )
    ) {
      formattedProposalData.payloads.forEach((payload) => {
        if (payload?.queuedAt > 0) {
          const historyId = `${formattedProposalData.id}_${HistoryItemType.PAYLOADS_QUEUED}_${payload.id}_${payload.chainId}`;

          const eventsPath = `${payload.chainId}/events`;
          const eventsCache =
            readJSONCache<
              Awaited<ReturnType<typeof getPayloadsControllerEvents>>
            >(eventsPath, payload.payloadsController) || [];

          setEvent({
            historyId,
            type: HistoryItemType.PAYLOADS_QUEUED,
            id: payload.id,
            chainId: payload.chainId,
            timestamp: payload.queuedAt,
            hash: eventsCache.find(
              (event) =>
                event.eventName === 'PayloadQueued' &&
                event.args.payloadId === payload.id,
            )?.transactionHash,
          });
        }
      });
    }

    // PAYLOADS_EXECUTED
    if (
      formattedProposalData.payloads.some(
        (payload) => payload?.executedAt > 0 && !isVotingFailed,
      )
    ) {
      formattedProposalData.payloads.forEach((payload, index) => {
        if (payload?.executedAt > 0) {
          const historyId = `${formattedProposalData.id}_${HistoryItemType.PAYLOADS_EXECUTED}_${payload.id}_${payload.chainId}`;

          const eventsPath = `${payload.chainId}/events`;
          const eventsCache =
            readJSONCache<
              Awaited<ReturnType<typeof getPayloadsControllerEvents>>
            >(eventsPath, payload.payloadsController) || [];

          setEvent({
            historyId,
            type: HistoryItemType.PAYLOADS_EXECUTED,
            id: payload.id,
            chainId: payload.chainId,
            timestamp: payload.executedAt,
            hash: eventsCache.find(
              (event) =>
                event.eventName === 'PayloadExecuted' &&
                event.args.payloadId === payload.id,
            )?.transactionHash,
          });
        }
      });
    }

    // PROPOSAL_CANCELED
    if (proposalState === CombineProposalState.Canceled) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.PROPOSAL_CANCELED}`;
      setEvent({
        historyId,
        type: HistoryItemType.PROPOSAL_CANCELED,
        id: formattedProposalData.id,
        chainId: appConfig.govCoreChainId,
        timestamp:
          lastPayloadCanceledAt > formattedProposalData.canceledAt
            ? lastPayloadCanceledAt
            : formattedProposalData.canceledAt,
        hash: events.find(
          (event) =>
            event.eventName === 'ProposalCanceled' &&
            Number(event.args.proposalId) === formattedProposalData.id,
        )?.transactionHash,
      });
    }

    // PAYLOADS_EXPIRED
    if (
      formattedProposalData.payloads.some(
        (payload) => payload?.state === PayloadState.Expired && !isVotingFailed,
      )
    ) {
      formattedProposalData.payloads.forEach((payload, index) => {
        if (payload.state === PayloadState.Expired) {
          const historyId = `${formattedProposalData.id}_${HistoryItemType.PAYLOADS_EXPIRED}_${payload.id}_${payload.chainId}`;
          setEvent({
            historyId,
            type: HistoryItemType.PAYLOADS_EXPIRED,
            id: payload.id,
            chainId: payload.chainId,
            timestamp:
              payload.queuedAt <= 0
                ? payload.createdAt + payload.expirationTime
                : payload.queuedAt + payload.delay + payload.gracePeriod,
          });
        }
      });
    }

    // PROPOSAL_EXPIRED
    if (proposalState === CombineProposalState.Expired) {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.PROPOSAL_EXPIRED}`;

      setEvent({
        historyId,
        type: HistoryItemType.PROPOSAL_EXPIRED,
        id: formattedProposalData.id,
        chainId: appConfig.govCoreChainId,
        timestamp:
          formattedProposalData.state === ProposalState.Executed
            ? lastPayloadExpiredAt
            : formattedProposalData.creationTime + constants.expirationTime,
      });
    }

    writeJSONCache(
      `${initDirName}/events`,
      `proposal_${proposal.id}_events`,
      proposalHistoryEvents,
    );
    console.log(`Proposal ${proposal.id} events data cached.`);
  }
}

async function updateCache() {
  // get gov core configs
  const { contractsConstants, configs } = await getGovCoreConfigs({
    govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
    govCoreDataHelperContractAddress:
      appConfig.govCoreConfig.dataHelperContractAddress,
    client: CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId],
  });

  // get not cached data from API (https://api.onaave.com/docs#/)
  const notCachedDataFromAPI = await getNotCachedDataFromAPI({
    govCoreChainId: appConfig.govCoreChainId,
    govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
  });

  const ipfsData = notCachedDataFromAPI.data.map((data) => {
    if (typeof data.proposal.id === 'number') {
      const typedData = data as CachedProposalData;
      return typedData.ipfs;
    } else {
      const typedData = data as RequestedProposalData;
      return {
        ...typedData.proposalDataFromAPI.proposal.decodedIpfs,
        originalIpfsHash: typedData.proposal.proposalData.ipfsHash,
      };
    }
  });

  const initialProposalsDataForRequest: ProposalStructOutput[] =
    notCachedDataFromAPI.data
      .map((data) => {
        if (typeof data.proposal.id === 'number') {
          return {} as ProposalStructOutput;
        } else {
          const typedData = data as RequestedProposalData;
          return typedData.proposal;
        }
      })
      .filter((data) => Object.keys(data).length > 0);

  const votingMachineDataHelperData = await getVotingData(
    initialProposalsDataForRequest.map((proposal) => ({
      id: proposal.id,
      votingChainId: Number(proposal.votingChainId),
      snapshotBlockHash: proposal.proposalData.snapshotBlockHash,
    })),
  );
  const proposalsDataFromRequest = getDetailedProposalsData(
    configs,
    initialProposalsDataForRequest,
    votingMachineDataHelperData as VMProposalStructOutput[],
    notCachedDataFromAPI.data.map((proposal) => Number(proposal?.proposal.id)),
    false,
  );

  const cachedProposals: BasicProposal[] = notCachedDataFromAPI.data
    .map((data) => {
      if (typeof data.proposal.id === 'number') {
        const typedData = data as CachedProposalData;
        return typedData.proposal;
      } else {
        return {} as BasicProposal;
      }
    })
    .filter((data) => Object.keys(data).length > 0);

  const proposalsDataInitial = [
    ...proposalsDataFromRequest,
    ...cachedProposals,
  ];

  const dataForUpdate = proposalsDataInitial.map((proposal) => {
    const dataFromAPI = notCachedDataFromAPI.data.filter(
      (data) => Number(data?.proposal.id) === proposal.id,
    )[0];

    if (typeof dataFromAPI.proposal.id === 'number') {
      const data = dataFromAPI as CachedProposalData;

      const payloadsExecutionDelay = Math.max.apply(
        0,
        data.payloads.map((payload) => payload.delay || 0),
      );

      return {
        type: 'cached',
        payloads: data.payloads,
        executionDelay: payloadsExecutionDelay,
        decodedIpfs: data.ipfs,
        proposal: data.proposal,
        events: [],
      };
    } else {
      const data = dataFromAPI as RequestedProposalData;
      return {
        type: 'requested',
        payloads: data.proposalPayloadsData,
        executionDelay: data.payloadsExecutionDelay,
        decodedIpfs: data.proposalDataFromAPI.proposal.decodedIpfs,
        proposal: {
          ...proposal,
          isFinished:
            proposal.state === ProposalState.Executed
              ? !!data?.isProposalPayloadsFinished
              : proposal.state > ProposalState.Executed,
        },
        events: [
          ...data.proposalDataFromAPI.events,
          ...data.proposalPayloadsDataFromAPI
            .map((payload) => payload.events)
            .flat(),
          ...data.proposalDataFromAPI.votes,
        ],
      };
    }
  });

  // start cache update
  await Promise.allSettled(
    dataForUpdate.map(async (data) => {
      const proposalIpfsData = {
        ...data.decodedIpfs,
        originalIpfsHash: data.proposal.ipfsHash,
      };

      // format VoteEmitted events to UI data format
      const proposalVoters: VotersData[] = data.events
        .filter(
          (ev) =>
            ev.eventName === 'VoteEmitted' &&
            Number(ev.args.proposalId) === data.proposal.id,
        )
        .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
        .map((event) => ({
          proposalId: Number(event.args.proposalId),
          address: (
            (event.eventName === 'VoteEmitted' && event.args.voter) ||
            ''
          ).toString() as Hex,
          support:
            (event.eventName === 'VoteEmitted' && event.args.support) || false,
          votingPower: normalizeBN(
            (
              (event.eventName === 'VoteEmitted' && event.args.votingPower) ||
              ''
            ).toString(),
            18,
          ).toNumber(),
          transactionHash: event.transactionHash,
          blockNumber: Number(event.blockNumber),
          chainId: data.proposal.votingChainId,
        }));

      // get ens name for voters
      const proposalVotersWithEnsName = await Promise.all(
        proposalVoters.map(async (vote) => {
          try {
            const name = await getEnsName(CHAIN_ID_CLIENT_MAP[mainnet.id], {
              address: vote.address,
            });

            return {
              ...vote,
              ensName: !!name ? name : undefined,
            };
          } catch {
            return {
              ...vote,
              ensName: undefined,
            };
          }
        }),
      );

      const dataToWrite = {
        payloads: data.payloads,
        ipfs: proposalIpfsData,
        proposal: data.proposal,
      };

      const proposalCache =
        readJSONCache<{
          payloads: Payload[];
          ipfs: ProposalMetadata;
          proposal: BasicProposal;
        }>(`${initDirName}/proposals`, `proposal_${data.proposal.id}`) ||
        undefined;
      if (
        !proposalCache ||
        !proposalCache?.proposal.isFinished ||
        Number(proposalCache.proposal.cancellationFee) > 0
      ) {
        writeJSONCache(
          `${initDirName}/proposals`,
          `proposal_${data.proposal.id}`,
          dataToWrite,
        );
        console.log(`Proposal ${data.proposal.id} data cached.`);
      }

      const proposalVotersCache =
        readJSONCache<{
          votes: VotersData[];
        }>(`${initDirName}/votes`, `vote_for_proposal_${data.proposal.id}`) ||
        undefined;
      if (
        !proposalVotersCache ||
        !isProposalFinal(proposalCache ? proposalCache.proposal.state : 0)
      ) {
        writeJSONCache(
          `${initDirName}/votes`,
          `vote_for_proposal_${data.proposal.id}`,
          {
            votes: proposalVotersWithEnsName,
          },
        );
        console.log(`Proposal ${data.proposal.id} voters data cached.`);
      }

      await parseProposalEvents({
        proposal: data.proposal,
        configs,
        constants: contractsConstants,
        ipfsTitle: data.decodedIpfs.title,
        proposalPayloadsData: data.payloads,
        executionDelay: data.executionDelay,
        events: data.events,
      });
    }),
  );

  const proposalIds = dataForUpdate
    .filter((data) => data.proposal.isFinished)
    .map((data) => data.proposal.id);
  writeJSONCache(`${initDirName}`, 'cached_proposals_ids', {
    cachedProposalsIds: proposalIds,
  });
  console.log('Proposals ids updated.');

  // format data for proposals list cache
  const proposalsListCache =
    readJSONCache<{
      totalProposalCount: number;
      proposals: FinishedProposalForList[];
    }>(`${initDirName}`, `list_view_proposals`) || undefined;
  const formattedProposalsDataForList: FinishedProposalForList[] =
    dataForUpdate.map((data) => {
      if (
        !proposalsListCache ||
        !proposalsListCache.proposals.find(
          (prop) => prop.id === data.proposal.id,
        )
      ) {
        const {
          formattedProposalData,
          proposalState,
          proposalConfig,
          executionDelay,
        } = formatProposalsData({
          proposal: data.proposal,
          configs,
          constants: contractsConstants,
          ipfsTitle: data.decodedIpfs.title,
          proposalPayloadsData: data.payloads,
          executionDelay: data.executionDelay,
        });

        let finishedTimestamp = formattedProposalData.creationTime;

        const {
          isVotingEnded,
          isVotingStarted,
          isExpired,
          lastPayloadExecutedAt,
          lastPayloadCanceledAt,
          lastPayloadExpiredAt,
          allPayloadsExpired,
          isCanceled,
        } = getProposalStepsAndAmounts({
          proposalData: formattedProposalData,
          quorum: proposalConfig.quorum,
          differential: proposalConfig.differential,
          precisionDivider: contractsConstants.precisionDivider,
          cooldownPeriod: contractsConstants.cooldownPeriod,
          executionDelay,
        });

        if (
          proposalState === CombineProposalState.Created &&
          !isExpired &&
          !isCanceled
        ) {
          finishedTimestamp = formattedProposalData.creationTime;
        } else if (
          formattedProposalData.votingMachineState ===
            VotingMachineProposalState.NotCreated &&
          !isExpired &&
          !isCanceled
        ) {
          finishedTimestamp =
            formattedProposalData.creationTime +
            proposalConfig.coolDownBeforeVotingStart;
        } else if (
          checkHash(formattedProposalData.snapshotBlockHash).notZero &&
          !isVotingStarted &&
          !isExpired &&
          !isCanceled
        ) {
          finishedTimestamp = formattedProposalData.votingActivationTime;
        } else if (
          !isVotingEnded &&
          isVotingStarted &&
          !isExpired &&
          !isCanceled
        ) {
          finishedTimestamp = formattedProposalData.votingMachineData.startTime;
        } else if (
          isVotingStarted &&
          isVotingEnded &&
          proposalState !== CombineProposalState.Executed &&
          !isExpired &&
          !isCanceled
        ) {
          finishedTimestamp =
            formattedProposalData.votingMachineData.endTime > 0
              ? formattedProposalData.votingMachineData.endTime
              : formattedProposalData.creationTime +
                proposalConfig.coolDownBeforeVotingStart;
        } else if (proposalState === CombineProposalState.Failed) {
          finishedTimestamp = formattedProposalData.votingMachineData.endTime;
        } else if (proposalState === CombineProposalState.Executed) {
          finishedTimestamp = lastPayloadExecutedAt;
        } else if (proposalState === CombineProposalState.Canceled) {
          finishedTimestamp =
            lastPayloadCanceledAt > formattedProposalData.canceledAt
              ? lastPayloadCanceledAt
              : formattedProposalData.canceledAt;
        } else if (
          formattedProposalData.state === ProposalState.Executed &&
          allPayloadsExpired
        ) {
          finishedTimestamp = lastPayloadExpiredAt;
        } else {
          finishedTimestamp =
            formattedProposalData.creationTime +
            contractsConstants.expirationTime;
        }

        return {
          id: data.proposal.id,
          title: data.decodedIpfs.title || `Proposal #${data.proposal.id}`,
          combineState: proposalState,
          finishedTimestamp: finishedTimestamp,
          ipfsHash: data.proposal.ipfsHash,
        };
      } else {
        return proposalsListCache.proposals.filter(
          (prop) => prop.id === data.proposal.id,
        )[0];
      }
    });
  writeJSONCache(`${initDirName}`, 'list_view_proposals', {
    totalProposalCount: Number(notCachedDataFromAPI.totalProposalCount),
    proposals: formattedProposalsDataForList,
  });
  console.log('Proposals list cache updated.');

  const proposalPayloadsData: Record<number, InitialPayload[]> = {};
  const formattedProposalsDataForProposalPayloads = dataForUpdate.map(
    (data) => {
      if (!data.payloads.length) {
        return {
          id: data.proposal.id,
          payloads: data.proposal.initialPayloads,
        };
      } else {
        return {
          id: data.proposal.id,
          payloads: data.payloads,
        };
      }
    },
  );
  formattedProposalsDataForProposalPayloads.forEach((proposal) => {
    proposalPayloadsData[proposal.id] = proposal.payloads;
  });
  writeJSONCache(`${initDirName}`, 'proposals_payloads', {
    data: proposalPayloadsData,
  });
  console.log('Proposals payloads cache updated.');

  // format data for creation fees cache
  const creationFeesCache =
    readJSONCache<{
      data: Record<Address, Record<number, CreationFee>>;
    }>(`${initDirName}`, `creation_fees`) || undefined;
  const creationFeesData: Record<Address, Record<number, CreationFee>> = {};
  const formattedProposalsDataForCreationFeesData = dataForUpdate.map(
    (data) => {
      if (
        !creationFeesCache ||
        !creationFeesCache.data[data.proposal.creator as Address] ||
        (creationFeesCache.data[data.proposal.creator as Address] &&
          !creationFeesCache.data[data.proposal.creator as Address][
            data.proposal.id
          ]) ||
        (creationFeesCache.data[data.proposal.creator as Address] &&
          creationFeesCache.data[data.proposal.creator as Address][
            data.proposal.id
          ] &&
          creationFeesCache.data[data.proposal.creator as Address][
            data.proposal.id
          ].status < CreationFeeState.RETURNED)
      ) {
        const { proposalState } = formatProposalsData({
          proposal: data.proposal,
          configs,
          constants: contractsConstants,
          ipfsTitle: data.decodedIpfs.title,
          proposalPayloadsData: data.payloads,
          executionDelay: data.executionDelay,
        });

        let status = CreationFeeState.LATER;
        if (data.proposal.state === ProposalState.Cancelled) {
          status = CreationFeeState.NOT_AVAILABLE;
        } else if (
          data.proposal.state >= ProposalState.Executed &&
          data.proposal.cancellationFee > 0
        ) {
          status = CreationFeeState.AVAILABLE;
        } else if (
          data.proposal.state >= ProposalState.Executed &&
          data.proposal.cancellationFee <= 0
        ) {
          status = CreationFeeState.RETURNED;
        }

        return {
          proposalId: data.proposal.id,
          creator: data.proposal.creator,
          proposalStatus: proposalState,
          ipfsHash: data.proposal.ipfsHash,
          status: status,
          title: data.decodedIpfs.title || `Proposal #${data.proposal.id}`,
        };
      } else {
        return {
          creator: data.proposal.creator,
          ...creationFeesCache.data[data.proposal.creator as Address][
            data.proposal.id
          ],
        };
      }
    },
  );
  formattedProposalsDataForCreationFeesData.forEach((proposal) => {
    creationFeesData[proposal.creator as Address] = {
      ...creationFeesData[proposal.creator as Address],
      [proposal.proposalId]: {
        proposalId: proposal.proposalId,
        proposalStatus: proposal.proposalStatus,
        ipfsHash: proposal.ipfsHash,
        status: proposal.status,
        title: proposal.title,
      },
    };
  });
  writeJSONCache(`${initDirName}`, 'creation_fees', {
    data: creationFeesData,
  });
  console.log('Creation fees cache updated.');

  // update ipfs cache
  ipfsData.forEach((data) => {
    if (!data) return null;
    const ipfsFileCache =
      readJSONCache<{
        data: ProposalMetadata;
      }>(`${initDirName}/ipfs`, `${data.originalIpfsHash}`) || undefined;
    if (!ipfsFileCache) {
      writeJSONCache(`${initDirName}/ipfs`, `${data.originalIpfsHash}`, data);
      console.log(`Ipfs hash: ${data.originalIpfsHash} data cached.`);
    }
  });
}

updateCache();
