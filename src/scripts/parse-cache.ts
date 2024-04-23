import {
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
  ContractsConstants,
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
  ProposalsCache,
  ProposalState,
  VMProposalStructOutput,
  VotersData,
  VotingConfig,
  VotingMachineProposalState,
} from '..';
import {
  getGovernanceEvents,
  isProposalFinal,
} from '../utils/viem/events/governance';
import { getPayloadsControllerEvents } from '../utils/viem/events/payloadsController';
import { getVotingMachineEvents } from '../utils/viem/events/votingMachine';
import { appConfig, coreName } from './config';

const initDirName = `ui/${coreName}`;

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

function getProposalPayloads(proposal: BasicProposal) {
  // get payloads data for proposal
  const proposalPayloadsData = proposal.initialPayloads.map((payload) => {
    const payloadsPath = `${payload.chainId}/payloads`;
    const payloadsCache =
      readJSONCache<Record<number, Payload>>(
        payloadsPath,
        payload.payloadsController,
      ) || {};

    return payloadsCache[payload.id];
  });
  // maximum delay from all payloads in proposal for finished timestamp
  const executionDelay = Math.max.apply(
    0,
    proposalPayloadsData.map((payload) => payload?.delay || 0),
  );
  return { proposalPayloadsData, executionDelay };
}

function formatProposalsData(
  proposal: BasicProposal,
  configs: VotingConfig[],
  constants: ContractsConstants,
) {
  const ipfsCache: Record<string, ProposalMetadata> =
    readJSONCache('web3', 'ipfs') || {};

  const proposalConfig = configs.filter(
    (config) => config.accessLevel === proposal.accessLevel,
  )[0];

  const { proposalPayloadsData, executionDelay } =
    getProposalPayloads(proposal);

  const formattedProposalData = {
    ...proposal,
    payloads: proposalPayloadsData,
    title: ipfsCache[proposal.ipfsHash]?.title || `Proposal #${proposal.id}`,
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

async function parseProposalEvents(
  proposal: BasicProposal,
  configs: VotingConfig[],
  contractsConstants: ContractsConstants,
) {
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

    const {
      formattedProposalData,
      executionDelay,
      proposalConfig,
      constants,
      proposalState,
    } = formatProposalsData(proposal, configs, contractsConstants);

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

    const govCoreEventsPath = `${appConfig.govCoreChainId}/events`;
    const governanceEvents =
      readJSONCache<Awaited<ReturnType<typeof getGovernanceEvents>>>(
        govCoreEventsPath,
        appConfig.govCoreConfig.contractAddress,
      ) || [];

    // PAYLOADS_CREATED
    formattedProposalData.payloads.forEach((payload, index) => {
      const historyId = `${formattedProposalData.id}_${HistoryItemType.PAYLOADS_CREATED}_${payload.id}_${payload.chainId}`;

      const eventsPath = `${payload.chainId}/events`;
      const eventsCache =
        readJSONCache<Awaited<ReturnType<typeof getPayloadsControllerEvents>>>(
          eventsPath,
          payload.payloadsController,
        ) || [];

      setEvent({
        historyId,
        type: HistoryItemType.PAYLOADS_CREATED,
        id: payload.id,
        chainId: payload.chainId,
        timestamp: payload.createdAt,
        addresses: payload.actions.map((action) => action.target),
        hash: eventsCache.find(
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
      hash: governanceEvents.find(
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
        hash: governanceEvents.find(
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
        hash: governanceEvents.find(
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
          blockHash: governanceEvents.find(
            (event) =>
              event.eventName === 'ProposalExecuted' &&
              Number(event.args.proposalId) === formattedProposalData.id,
          )?.blockHash,
        })
      ).timestamp;

      setEvent({
        historyId,
        type: HistoryItemType.PROPOSAL_EXECUTED,
        id: formattedProposalData.id,
        chainId: appConfig.govCoreChainId,
        timestamp: Number(executedTimestamp),
        hash: governanceEvents.find(
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
        hash: governanceEvents.find(
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
            : formattedProposalData.creationTime +
              contractsConstants.expirationTime,
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

async function parseCache() {
  // get ipfs cache
  const ipfsCache: Record<string, ProposalMetadata> =
    readJSONCache('web3', 'ipfs') || {};

  // get proposals cache
  const proposalsPath = `${appConfig.govCoreChainId}/proposals`;
  const proposalsCache =
    readJSONCache<ProposalsCache>(
      proposalsPath,
      appConfig.govCoreConfig.contractAddress,
    ) || {};

  // get gov core configs
  const { contractsConstants, configs } = await getGovCoreConfigs({
    govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
    govCoreDataHelperContractAddress:
      appConfig.govCoreConfig.dataHelperContractAddress,
    client: CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId],
  });

  // get voting chain for all proposals
  const formattedProposalCache = await Promise.all(
    Object.entries(proposalsCache).map(async (proposal) => {
      const portalContract = getContract({
        abi: IVotingPortal_ABI,
        client: CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId],
        address: proposal[1].votingPortal,
      });
      const votingChainId = await portalContract.read.VOTING_MACHINE_CHAIN_ID();
      return {
        id: BigInt(proposal[0]),
        votingChainId: votingChainId,
        proposalData: proposal[1],
      };
    }),
  );

  // get VM data and combine proposals cache with voting machines data
  const initialProposals = await Promise.all(
    formattedProposalCache.map(async (proposal) => {
      return {
        id: proposal.id,
        votingChainId: Number(proposal.votingChainId),
        snapshotBlockHash: proposal.proposalData.snapshotBlockHash,
      };
    }),
  );
  const votingMachineDataHelperData = await getVotingData(initialProposals);
  const proposalsDataInitial = getDetailedProposalsData(
    configs,
    formattedProposalCache,
    votingMachineDataHelperData as VMProposalStructOutput[],
    formattedProposalCache.map((proposal) => Number(proposal.id)),
    false,
  );
  const proposalsData = proposalsDataInitial.map((proposal) => {
    return {
      ...proposal,
      isFinished: formattedProposalCache.filter(
        (p) => Number(p.id) === proposal.id,
      )[0].proposalData.isFinished,
    };
  });

  // start parsing
  await Promise.allSettled(
    proposalsData.map(async (proposal) => {
      const proposalIpfsData = ipfsCache[proposal.ipfsHash];

      const path = `${proposal.votingChainId}/events`;
      const votesCache =
        readJSONCache<Awaited<ReturnType<typeof getVotingMachineEvents>>>(
          path,
          appConfig.votingMachineConfig[proposal.votingChainId].contractAddress,
        ) || [];

      // format VoteEmitted events to UI data format
      const proposalVoters: VotersData[] = votesCache
        .filter(
          (data) =>
            data.eventName === 'VoteEmitted' &&
            Number(data.args.proposalId) === proposal.id,
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
          chainId: proposal.votingChainId,
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

      // get payloads data for proposal
      const { proposalPayloadsData } = getProposalPayloads(proposal);

      const dataToWrite = {
        payloads: proposalPayloadsData,
        ipfs: proposalIpfsData,
        proposal: proposal,
      };

      const proposalCache =
        readJSONCache<{
          payloads: Payload[];
          ipfs: ProposalMetadata;
          proposal: BasicProposal;
        }>(`${initDirName}/proposals`, `proposal_${proposal.id}`) || undefined;
      if (
        !proposalCache ||
        !proposalCache?.proposal.isFinished ||
        Number(proposalCache.proposal.cancellationFee) > 0
      ) {
        writeJSONCache(
          `${initDirName}/proposals`,
          `proposal_${proposal.id}`,
          dataToWrite,
        );
        console.log(`Proposal ${proposal.id} data cached.`);
      }

      const proposalVotersCache =
        readJSONCache<{
          votes: VotersData[];
        }>(`${initDirName}/votes`, `vote_for_proposal_${proposal.id}`) ||
        undefined;
      if (
        !proposalVotersCache ||
        !isProposalFinal(proposalCache ? proposalCache.proposal.state : 0)
      ) {
        writeJSONCache(
          `${initDirName}/votes`,
          `vote_for_proposal_${proposal.id}`,
          {
            votes: proposalVotersWithEnsName,
          },
        );
        console.log(`Proposal ${proposal.id} voters data cached.`);
      }

      await parseProposalEvents(proposal, configs, contractsConstants);
    }),
  );

  const proposalIds = proposalsData
    .filter((proposal) => proposal.isFinished)
    .map((proposal) => proposal.id);
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
  const formattedProposalsDataForList: FinishedProposalForList[] = proposalsData
    .filter((proposal) => proposal.isFinished)
    .map((proposal) => {
      if (
        !proposalsListCache ||
        !proposalsListCache.proposals.find((prop) => prop.id === proposal.id)
      ) {
        const {
          formattedProposalData,
          proposalState,
          proposalConfig,
          executionDelay,
        } = formatProposalsData(proposal, configs, contractsConstants);

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
          id: proposal.id,
          title:
            ipfsCache[proposal.ipfsHash]?.title || `Proposal #${proposal.id}`,
          combineState: proposalState,
          finishedTimestamp: finishedTimestamp,
          ipfsHash: proposal.ipfsHash,
        };
      } else {
        return proposalsListCache.proposals.filter(
          (prop) => prop.id === proposal.id,
        )[0];
      }
    });

  writeJSONCache(`${initDirName}`, 'list_view_proposals', {
    totalProposalCount: Object.keys(proposalsCache).length,
    proposals: formattedProposalsDataForList,
  });
  console.log('Proposals list cache updated.');

  // format data for proposals payloads cache
  const proposalsPayloadsCache =
    readJSONCache<{
      data: Record<number, InitialPayload[]>;
    }>(`${initDirName}`, `proposals_payloads`) || undefined;

  const proposalPayloadsData: Record<number, InitialPayload[]> = {};
  const formattedProposalsDataForProposalPayloads = proposalsData.map(
    (proposal) => {
      if (
        !proposalsPayloadsCache ||
        !proposalsPayloadsCache.data[proposal.id]
      ) {
        return {
          id: proposal.id,
          payloads: proposal.initialPayloads,
        };
      } else {
        return {
          id: proposal.id,
          payloads: proposalsPayloadsCache.data[proposal.id],
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
  const formattedProposalsDataForCreationFeesData = proposalsData.map(
    (proposal) => {
      if (
        !creationFeesCache ||
        !creationFeesCache.data[proposal.creator as Address] ||
        (creationFeesCache.data[proposal.creator as Address] &&
          !creationFeesCache.data[proposal.creator as Address][proposal.id]) ||
        (creationFeesCache.data[proposal.creator as Address] &&
          creationFeesCache.data[proposal.creator as Address][proposal.id] &&
          creationFeesCache.data[proposal.creator as Address][proposal.id]
            .status < CreationFeeState.RETURNED)
      ) {
        const { proposalState } = formatProposalsData(
          proposal,
          configs,
          contractsConstants,
        );

        let status = CreationFeeState.LATER;
        if (proposal.state === ProposalState.Cancelled) {
          status = CreationFeeState.NOT_AVAILABLE;
        } else if (
          proposal.state >= ProposalState.Executed &&
          proposal.cancellationFee > 0
        ) {
          status = CreationFeeState.AVAILABLE;
        } else if (
          proposal.state >= ProposalState.Executed &&
          proposal.cancellationFee <= 0
        ) {
          status = CreationFeeState.RETURNED;
        }

        return {
          proposalId: proposal.id,
          creator: proposal.creator,
          proposalStatus: proposalState,
          ipfsHash: proposal.ipfsHash,
          status: status,
          title:
            ipfsCache[proposal.ipfsHash]?.title || `Proposal #${proposal.id}`,
        };
      } else {
        return {
          creator: proposal.creator,
          ...creationFeesCache.data[proposal.creator as Address][proposal.id],
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
}

parseCache();
