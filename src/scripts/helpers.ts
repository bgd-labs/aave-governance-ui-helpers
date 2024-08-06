import {
  IGovernanceCore_ABI,
  IPayloadsControllerCore_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingPortal_ABI,
} from '@bgd-labs/aave-address-book';
import {
  CHAIN_ID_CLIENT_MAP,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { Address, getContract, Hex, zeroAddress, zeroHash } from 'viem';
import { getBlock } from 'viem/actions';

import {
  checkHash,
  CombineProposalState,
  HistoryItemType,
  PayloadState,
  ProposalMetadata,
  ProposalState,
} from '../utils/generic';
import {
  BasicProposal,
  getProposalState,
  getProposalStepsAndAmounts,
  getVotingMachineProposalState,
  InitialProposal,
  Payload,
  ProposalHistoryItem,
} from '../utils/viem';
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

export const initDirName = `ui/${coreName}`;

/**
 * Function for getting initial data for update cache and request data from API when data not in the cache
 */
export async function getNotCachedDataFromAPI({
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

  // check cached data and request data from API for not finished proposals
  const data: (RequestedProposalData | CachedProposalData)[] = [];
  for (const id in proposalsIds) {
    await new Promise((resolve) => setTimeout(resolve, 10));
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
      console.log('data from API for proposal', id);
      const proposalDataFromAPIResponse = await fetch(
        `https://api.onaave.com/governance/proposal/?proposalId=${id}&chainId=${govCoreChainId}&governance=${govCoreContractAddress}`,
      );

      if (proposalDataFromAPIResponse.ok) {
        const proposalDataFromAPI =
          (await proposalDataFromAPIResponse.json()) as APIProposalData;

        const portalContract = getContract({
          abi: IVotingPortal_ABI,
          client: CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId],
          address: proposalDataFromAPI.proposal?.args?.votingPortal,
        });
        const votingChainId =
          await portalContract.read.VOTING_MACHINE_CHAIN_ID();

        const proposal = {
          id: BigInt(id),
          votingChainId: votingChainId,
          proposalData: {
            ...proposalDataFromAPI?.proposal?.args,
            isFinished: false,
          },
        };

        const proposalPayloadsDataFromAPI = await Promise.all(
          proposal.proposalData.payloads.map(async (payload) => {
            try {
              const payloadsDataFromAPIResponse = await fetch(
                `https://api.onaave.com/governance/payload/?payloadId=${payload.payloadId}&chainId=${Number(payload.chain)}&payloadsController=${payload.payloadsController}`,
              );
              return (await payloadsDataFromAPIResponse.json()) as APIPayloadData;
            } catch (e) {
              const client = CHAIN_ID_CLIENT_MAP[Number(payload.chain)];
              const contract = getContract({
                abi: IPayloadsControllerCore_ABI,
                client,
                address: payload.payloadsController,
              });
              const dataFromContract = await contract.read.getPayloadById([
                payload.payloadId,
              ]);
              return {
                events: [],
                proposal: {
                  chainId: Number(payload.chain),
                  payloadsControllerAddress: payload.payloadsController,
                  payloadId: payload.payloadId,
                  args: dataFromContract,
                },
              } as APIPayloadData;
            }
          }),
        );

        // maximum delay from all payloads in proposal for finished timestamp
        const payloadsExecutionDelay = Math.max.apply(
          0,
          proposalPayloadsDataFromAPI.map(
            (payload) => payload?.proposal?.args?.delay ?? 0,
          ),
        );

        const isProposalPayloadsFinished = proposalPayloadsDataFromAPI.every(
          (payload) =>
            payload && payload?.proposal?.args?.state > PayloadState.Queued,
        );

        const proposalPayloadsData = proposalPayloadsDataFromAPI.map(
          (payload) => {
            return {
              id: payload?.proposal.payloadId,
              chainId: payload?.proposal.chainId,
              payloadsController: payload?.proposal.payloadsControllerAddress,
              ...payload?.proposal?.args,
            };
          },
        );

        const requestedProposalData = {
          proposal,
          proposalDataFromAPI,
          proposalPayloadsDataFromAPI,
          payloadsExecutionDelay,
          proposalPayloadsData,
          isProposalPayloadsFinished,
        } as RequestedProposalData;
        data.push(requestedProposalData);
      }
    } else {
      console.log('data from Cache for proposal', id);
      const cachedProposalData = proposalCache as CachedProposalData;
      data.push(cachedProposalData);
    }
  }
  return {
    totalProposalCount: proposalsCount,
    data,
  };
}

/**
 * Function for getting data from voting machine contracts RPC calls
 */
export async function getVotingData(initialProposals: InitialProposal[]) {
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

/**
 * Function that formatting proposal data for UI compatibility
 */
export function formatProposalsData({
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

/**
 * Function that formatting proposal events for UI compatibility
 */
export async function parseProposalEvents({
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
