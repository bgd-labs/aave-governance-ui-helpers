import 'dotenv/config';

import {
  CHAIN_ID_CLIENT_MAP,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { Address, Hex } from 'viem';
import { getEnsName } from 'viem/actions';
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
  getProposalMetadata,
  getProposalStepsAndAmounts,
  InitialPayload,
  normalizeBN,
  Payload,
  ProposalMetadata,
  ProposalState,
  ProposalStructOutput,
  VMProposalStructOutput,
  VotersData,
  VotingMachineProposalState,
} from '..';
import { isProposalFinal } from '../utils/viem/events/governance';
import { appConfig, coreName } from './config';
import {
  formatProposalsData,
  getNotCachedDataFromAPI,
  getVotingData,
  parseProposalEvents,
} from './helpers';
import { CachedProposalData, RequestedProposalData } from './types';

const initDirName = `ui/${coreName}`;

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
  console.log(`Data from API loaded.`);

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

  const dataForUpdate = await Promise.all(
    proposalsDataInitial.map(async (proposal) => {
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
          decodedIpfs: !!data.proposalDataFromAPI.proposal.decodedIpfs
            ? data.proposalDataFromAPI.proposal.decodedIpfs
            : await getProposalMetadata({
                hash: data.proposal.proposalData.ipfsHash,
              }),
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
    }),
  );

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
        ipfsTitle: data.decodedIpfs?.title,
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
    }>(`${initDirName}`, `list_view_proposals`) ?? undefined;
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
          ipfsTitle: data.decodedIpfs?.title,
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
          title: data.decodedIpfs?.title ?? `Proposal #${data.proposal.id}`,
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
          ipfsTitle: data.decodedIpfs?.title,
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
          title: data.decodedIpfs?.title ?? `Proposal #${data.proposal.id}`,
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
