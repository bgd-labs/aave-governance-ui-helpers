import { BigNumber } from 'bignumber.js';
import { Hex, zeroAddress } from 'viem';

import { appConfigWithClients } from '../helpers/appConfigWithClients';
import { checkHash } from '../helpers/checkHash';
import { clients } from '../helpers/clients';
import {
  govCoreContract,
  govCoreDataHelperContract,
  payloadsControllerDataHelperContract,
  votingMachineDataHelperContract,
} from '../helpers/contracts';
import { getBlocksForEvents } from '../helpers/eventsHelpres';
import {
  getProposalState,
  getProposalStepsAndAmounts,
} from '../helpers/formatProposal';
import { getGovCoreConfigs } from '../helpers/getGovCoreConfigs';
import {
  getDetailedProposalsData,
  getVotingMachineProposalState,
} from '../helpers/getProposalData';
import { getProposalMetadata } from '../helpers/getProposalMetadata';
import {
  BasicProposal,
  BasicProposalState,
  InitialProposal,
  ProposalMetadata,
  ProposalState,
  VotingMachineProposalState,
} from '../helpers/types';
import { coreName } from './helpers';
import { Ipfs as IpfsDB } from './ipfs';
import { ListViewProposal as ListViewProposalDB } from './listViewProposals';
import { Payload as PayloadDB } from './payload';
import { Proposal as ProposalDB } from './proposal';
import { Votes as VotesDB } from './votes';

const appConfig = appConfigWithClients(clients, coreName);

export async function populateCache() {
  const proposalFetcher = new ProposalDB();
  const listViewProposalFetcher = new ListViewProposalDB();
  const payloadFetcher = new PayloadDB();
  const ipfsFetcher = new IpfsDB();
  const votesFetcher = new VotesDB();

  const govCore = govCoreContract({
    contractAddress: appConfig.govCoreConfig.contractAddress,
    client: appConfig.clients[appConfig.govCoreChainId],
  });
  const govCoreDataHelper = govCoreDataHelperContract(
    appConfig.govCoreConfig.dataHelperContractAddress,
    appConfig.clients[appConfig.govCoreChainId],
  );

  const votingMachineDataHelpers = {
    [appConfig.votingMachineChainIds[0]]: votingMachineDataHelperContract(
      appConfig.votingMachineConfig[appConfig.votingMachineChainIds[0]]
        .dataHelperContractAddress,
      appConfig.clients[appConfig.votingMachineChainIds[0]],
    ),
  };
  if (appConfig.votingMachineChainIds.length > 1) {
    appConfig.votingMachineChainIds.forEach((chainId) => {
      const votingMachineConfig = appConfig.votingMachineConfig[chainId];
      votingMachineDataHelpers[chainId] = votingMachineDataHelperContract(
        votingMachineConfig.dataHelperContractAddress,
        appConfig.clients[chainId],
      );
    });
  }

  const payloadsControllerDataHelpers = {
    [appConfig.payloadsControllerChainIds[0]]:
      payloadsControllerDataHelperContract(
        appConfig.payloadsControllerConfig[
          appConfig.payloadsControllerChainIds[0]
        ].dataHelperContractAddress,
        appConfig.clients[appConfig.payloadsControllerChainIds[0]],
      ),
  };
  if (appConfig.payloadsControllerChainIds.length > 1) {
    appConfig.payloadsControllerChainIds.forEach((chainId) => {
      const payloadsControllerConfig =
        appConfig.payloadsControllerConfig[chainId];
      payloadsControllerDataHelpers[chainId] =
        payloadsControllerDataHelperContract(
          payloadsControllerConfig.dataHelperContractAddress,
          appConfig.clients[chainId],
        );
    });
  }

  const proposalsCountInit = await govCore.read.getProposalsCount();
  const proposalsCount = Number(proposalsCountInit);

  if (proposalsCount > 0) {
    const govCoreDataHelperData = await govCoreDataHelper.read.getProposalsData(
      [
        appConfig.govCoreConfig.contractAddress,
        BigInt(0),
        BigInt(0),
        BigInt(proposalsCount),
      ],
    );

    const getVotingData = async (
      initialProposals: InitialProposal[],
      userAddress?: Hex,
    ) => {
      const votingMachineChainIds = initialProposals
        .map((data) => data.votingChainId)
        .filter((value, index, self) => self.indexOf(value) === index);

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

          return (
            (await votingMachineDataHelper.read.getProposalsData([
              appConfig.votingMachineConfig[chainId].contractAddress,
              formattedInitialProposals,
              userAddress || zeroAddress,
            ])) || []
          );
        }),
      );

      return data.flat();
    };

    const initialProposals = govCoreDataHelperData.map((proposal) => {
      return {
        id: proposal.id,
        votingChainId: Number(proposal.votingChainId),
        snapshotBlockHash: proposal.proposalData.snapshotBlockHash,
      };
    });

    const votingMachineDataHelperData = await getVotingData(initialProposals);

    const proposalsIds = govCoreDataHelperData.map((proposal) =>
      Number(proposal.id),
    );

    const proposalsData: BasicProposal[] = getDetailedProposalsData(
      govCoreDataHelperData,
      votingMachineDataHelperData,
      proposalsIds,
      true,
    );

    // configs and constants
    const { contractsConstants, configs } = await getGovCoreConfigs(
      appConfig.clients[appConfig.govCoreChainId],
      appConfig.govCoreConfig.contractAddress,
      appConfig.govCoreConfig.dataHelperContractAddress,
    );

    // populate ipfs data
    const ipfsData: Record<string, ProposalMetadata> = {};
    const newIpfsHashes: string[] = [];
    proposalsIds.forEach((id) => {
      const proposalData = proposalsData.find((proposal) => proposal.id === id);
      if (
        proposalData &&
        typeof ipfsData[proposalData.ipfsHash] === 'undefined'
      ) {
        newIpfsHashes.push(proposalData.ipfsHash);
      }
    });

    const allIpfsData = await Promise.all(
      newIpfsHashes
        .filter((value, index, self) => self.indexOf(value) === index)
        .map(async (hash) => {
          const ipfsData = await getProposalMetadata(hash); // TODO: need check is ipfs hash real
          return {
            ...ipfsData,
            originalIpfsHash: hash,
          };
        }),
    );
    await Promise.all(
      allIpfsData.map(async (ipfs) => {
        await ipfsFetcher.populate(ipfs.originalIpfsHash, ipfs);
      }),
    );

    const now = Date.now() / 1000;

    // populate payloads and proposals
    for (let i = 0; i < proposalsIds.length; i++) {
      const proposalData = proposalsData.find((proposal) => proposal.id === i);

      if (proposalData) {
        const isVotingEndedN =
          proposalData.votingMachineData.endTime > 0 &&
          now > proposalData.votingMachineData.endTime;

        const forVotes = new BigNumber(proposalData.votingMachineData.forVotes)
          .shiftedBy(18 * -1)
          .toNumber();
        const againstVotes = new BigNumber(
          proposalData.votingMachineData.againstVotes,
        )
          .shiftedBy(18 * -1)
          .toNumber();

        const isVotingFailed =
          isVotingEndedN &&
          (againstVotes >= forVotes || (againstVotes === 0 && forVotes === 0));

        const isProposalCanceled =
          proposalData.basicState === BasicProposalState.Cancelled;
        const isProposalExpired =
          proposalData.basicState === BasicProposalState.Expired ||
          now > proposalData.creationTime + contractsConstants.expirationTime;

        const payloadsChainIds = proposalData.initialPayloads
          .map((payload) => payload.chainId)
          .filter((value, index, self) => self.indexOf(value) === index);

        const payloadsControllers = proposalData.initialPayloads
          .map((payload) => payload.payloadsController)
          .filter((value, index, self) => self.indexOf(value) === index);

        const payloadsData = await Promise.all(
          payloadsChainIds.map(async (id) => {
            return await Promise.all(
              payloadsControllers.map(async (controller) => {
                const proposalPayloadsIds = proposalData.initialPayloads
                  .filter(
                    (payload) =>
                      payload.payloadsController === controller &&
                      payload.chainId === id,
                  )
                  .map((payload) => payload.id);

                const payloadController =
                  appConfig.payloadsControllerConfig[id].contractAddresses.some(
                    (address) => address === controller,
                  ) && controller;

                if (payloadController) {
                  const payloadsData =
                    (await payloadsControllerDataHelpers[
                      id
                    ].read.getPayloadsData([
                      controller,
                      proposalPayloadsIds,
                    ])) || [];

                  return payloadsData.map((payload) => {
                    return {
                      id: Number(payload.id),
                      chainId: id,
                      maximumAccessLevelRequired:
                        payload.data.maximumAccessLevelRequired,
                      state: payload.data.state,
                      createdAt: payload.data.createdAt,
                      queuedAt: payload.data.queuedAt,
                      executedAt: payload.data.executedAt,
                      cancelledAt: payload.data.cancelledAt,
                      expirationTime: payload.data.expirationTime,
                      delay: payload.data.delay,
                      gracePeriod: payload.data.gracePeriod,
                      payloadsController: controller,
                      actionAddresses: payload.data.actions.map(
                        (action) => action.target,
                      ),
                    };
                  });
                } else {
                  return proposalData.initialPayloads;
                }
              }),
            );
          }),
        );

        const proposalPayloadsData = await Promise.all(
          proposalData.initialPayloads.map(async (payload) => {
            const payloadData = payloadsData
              .flat()
              .flat()
              .find(
                (payloadS) =>
                  payloadS.id === payload.id &&
                  payloadS.payloadsController === payload.payloadsController &&
                  payloadS.chainId === payload.chainId,
              );
            if (payloadData) {
              await payloadFetcher.populate(
                payload.id,
                payloadData,
                isVotingFailed,
                isProposalCanceled,
                isProposalExpired,
                payload.chainId,
                payload.payloadsController,
              );

              return payloadData;
            } else {
              return payloadsData.flat().flat()[0];
            }
          }),
        );

        const currentBlock =
          await appConfig.clients[proposalData.votingChainId].getBlockNumber();
        const startBlockNumber = proposalData.votingMachineData.createdBlock;
        const endBlockNumber =
          proposalData.votingMachineData.votingClosedAndSentBlockNumber;

        const { startBlock, endBlock } = getBlocksForEvents(
          Number(currentBlock),
          startBlockNumber,
          endBlockNumber,
          undefined,
        );

        if (
          isFinite(startBlock) &&
          startBlock > 0 &&
          isFinite(endBlock) &&
          endBlock > 0
        ) {
          await votesFetcher.populate(
            appConfig.votingMachineConfig[proposalData.votingChainId]
              .contractAddress,
            startBlock,
            endBlock,
            proposalData.votingChainId,
          );
        }

        const isProposalPayloadsFinished = proposalPayloadsData.every(
          // @ts-ignore
          (payload) => payload && payload?.state > 2,
        );
        await proposalFetcher.populate(
          i,
          proposalData,
          isVotingFailed,
          isProposalPayloadsFinished,
          isProposalCanceled,
          isProposalExpired,
        );

        // cache for list view
        const proposalConfig = configs.filter(
          (config) => config.accessLevel === proposalData.accessLevel,
        )[0];

        const executionPayloadTime = Math.max.apply(
          null,
          // @ts-ignore
          proposalPayloadsData.map((payload) => payload?.delay || 0),
        );

        const proposalTitle =
          allIpfsData.find(
            (ipfs) => ipfs.originalIpfsHash === proposalData.ipfsHash,
          )?.title || '';

        const formattedProposalData = {
          ...proposalData,
          payloads: proposalPayloadsData,
          title: proposalTitle,
          votingMachineState: getVotingMachineProposalState(proposalData),
        };

        const proposalState = getProposalState({
          // @ts-ignore
          proposalData: formattedProposalData,
          quorum: proposalConfig.quorum,
          differential: proposalConfig.differential,
          precisionDivider: contractsConstants.precisionDivider,
          cooldownPeriod: contractsConstants.cooldownPeriod,
          executionPayloadTime,
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
          // @ts-ignore
          proposalData: formattedProposalData,
          quorum: proposalConfig.quorum,
          differential: proposalConfig.differential,
          precisionDivider: contractsConstants.precisionDivider,
          cooldownPeriod: contractsConstants.cooldownPeriod,
          executionPayloadTime: executionPayloadTime,
        });

        if (
          proposalState === ProposalState.Created &&
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
          proposalState !== ProposalState.Executed &&
          !isExpired &&
          !isCanceled
        ) {
          finishedTimestamp =
            formattedProposalData.votingMachineData.endTime > 0
              ? formattedProposalData.votingMachineData.endTime
              : formattedProposalData.creationTime +
                proposalConfig.coolDownBeforeVotingStart;
        } else if (proposalState === ProposalState.Defeated) {
          finishedTimestamp = formattedProposalData.votingMachineData.endTime;
        } else if (proposalState === ProposalState.Executed) {
          finishedTimestamp = lastPayloadExecutedAt;
        } else if (proposalState === ProposalState.Canceled) {
          finishedTimestamp =
            lastPayloadCanceledAt > formattedProposalData.canceledAt
              ? lastPayloadCanceledAt
              : formattedProposalData.canceledAt;
        } else if (
          formattedProposalData.basicState === BasicProposalState.Executed &&
          allPayloadsExpired
        ) {
          finishedTimestamp = lastPayloadExpiredAt;
        } else {
          finishedTimestamp =
            formattedProposalData.creationTime +
            contractsConstants.expirationTime;
        }

        const listViewProposalData = {
          id: formattedProposalData.id,
          title: formattedProposalData.title,
          state: proposalState,
          finishedTimestamp,
          ipfsHash: formattedProposalData.ipfsHash,
        };

        await listViewProposalFetcher.populate(
          i,
          listViewProposalData,
          isVotingFailed,
          isProposalPayloadsFinished,
          isProposalCanceled,
          isProposalExpired,
          proposalsCount,
        );
      }
    }
  }
}

populateCache().then(() => console.log('finished'));
