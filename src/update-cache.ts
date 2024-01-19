// TODO: need add parser logic (proposal_1.json...etc)

import {
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
} from '@bgd-labs/aave-address-book';
import {
  CHAIN_ID_CLIENT_MAP,
  getBlockAtTimestamp,
  getContractDeploymentBlock,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import dayjs from 'dayjs';
import { Address, getContract, Hex, zeroAddress } from 'viem';

import { getGovernanceEvents } from './events/governance';
import {
  getPayloadsControllerEvents,
  isPayloadFinal,
} from './events/payloadsController';
import { getVotingMachineEvents } from './events/votingMachine';
import { appConfig } from './helpers/clients';
import {
  formatDiff,
  formatQuorum,
  normalizeVotes,
} from './helpers/formatProposal';
import { getGovCoreConfigs } from './helpers/getGovCoreConfigs';
import { getDetailedProposalsData } from './helpers/getProposalData';
import { getProposalMetadata } from './helpers/getProposalMetadata';
import {
  BasicProposal,
  BasicProposalState,
  InitialProposal,
  Payload,
  PayloadState,
  ProposalMetadata,
} from './helpers/types';

async function cacheVotes(
  votingMachines: Record<number, Hex>,
  bookKeepingCache: BookKeepingCache,
) {
  return await Promise.all(
    Object.entries(votingMachines).map(async (value) => {
      const chainId = Number(value[0]);
      const path = `${chainId}/events`;
      const address = value[1];
      const client = CHAIN_ID_CLIENT_MAP[chainId];
      const currentBlockOnVotingMachineChain = await client.getBlockNumber();
      const votesCache =
        readJSONCache<Awaited<ReturnType<typeof getVotingMachineEvents>>>(
          path,
          address,
        ) || [];
      const lastSeenBlock = bookKeepingCache[path]
        ? BigInt(bookKeepingCache[path])
        : await getContractDeploymentBlock({
            client: client,
            contractAddress: address,
            fromBlock: BigInt(0),
            toBlock: currentBlockOnVotingMachineChain,
            maxDelta: BigInt(10000),
          });
      const logs = await getVotingMachineEvents(
        address,
        client,
        BigInt(lastSeenBlock) + BigInt(1),
        currentBlockOnVotingMachineChain,
      );
      const combinedCache = [...votesCache, ...logs];
      writeJSONCache(path, address, combinedCache);
      bookKeepingCache[path] = String(currentBlockOnVotingMachineChain);
    }),
  );
}

async function getVotingData(
  initialProposals: InitialProposal[],
  bookKeepingCache: BookKeepingCache,
) {
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

  await cacheVotes(votingMachines, bookKeepingCache);
  console.log('Caching votes events finished.');

  return data.flat();
}

async function updateIpfsCache(proposals: Record<number, BasicProposal>) {
  const ipfsCache: Record<string, ProposalMetadata> =
    readJSONCache('web3', 'ipfs') || {};
  for (const key of Object.keys(proposals)) {
    const id = Number(key);
    if (!ipfsCache[proposals[id].ipfsHash]) {
      ipfsCache[proposals[id].ipfsHash] = await getProposalMetadata(
        proposals[id].ipfsHash,
      );
    }
  }
  writeJSONCache('web3', 'ipfs', ipfsCache);
  return ipfsCache;
}

// TODO: need add caching payloads if it not in proposal yet
async function updatePayloadsData(
  payloadsChainIds: number[],
  payloadsControllers: Hex[],
  proposalData: BasicProposal,
  bookKeepingCache: BookKeepingCache,
) {
  const payloadsControllerDataHelpers = {
    [appConfig.payloadsControllerChainIds[0]]: getContract({
      address:
        appConfig.payloadsControllerConfig[
          appConfig.payloadsControllerChainIds[0]
        ].dataHelperContractAddress,
      abi: IPayloadsControllerDataHelper_ABI,
      client: CHAIN_ID_CLIENT_MAP[appConfig.payloadsControllerChainIds[0]],
    }),
  };
  if (appConfig.payloadsControllerChainIds.length > 1) {
    appConfig.payloadsControllerChainIds.forEach((chainId) => {
      const payloadsControllerConfig =
        appConfig.payloadsControllerConfig[chainId];
      payloadsControllerDataHelpers[chainId] = getContract({
        address: payloadsControllerConfig.dataHelperContractAddress,
        abi: IPayloadsControllerDataHelper_ABI,
        client: CHAIN_ID_CLIENT_MAP[chainId],
      });
    });
  }

  const payloadsData = await Promise.all(
    payloadsChainIds.map(async (chainId) => {
      return await Promise.all(
        payloadsControllers.map(async (controller) => {
          const client = CHAIN_ID_CLIENT_MAP[chainId];
          const payloadsPath = `${chainId}/payloads`;
          const payloadsCache =
            readJSONCache<Record<number, Payload>>(payloadsPath, controller) ||
            {};

          const proposalPayloadsIds = proposalData.initialPayloads
            .filter(
              (payload) =>
                payload.payloadsController === controller &&
                payload.chainId === chainId,
            )
            .map((payload) => payload.id);

          const payloadController = appConfig.payloadsControllerConfig[
            chainId
          ].contractAddresses.find(
            (address) => address.toLowerCase() === controller.toLowerCase(),
          );

          if (payloadController) {
            const payloadsData =
              (await payloadsControllerDataHelpers[
                chainId
              ].read.getPayloadsData([controller, proposalPayloadsIds])) || [];

            const formattedPayloadsData = payloadsData.map((payload) => {
              return {
                creator: payload.data.creator,
                id: Number(payload.id),
                chainId,
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

            formattedPayloadsData.forEach((payloadData) => {
              if (
                (!!payloadsCache[payloadData.id] &&
                  !isPayloadFinal(payloadsCache[payloadData.id].state)) ||
                !payloadsCache[payloadData.id]
              ) {
                payloadsCache[payloadData.id] = payloadData;
              }
            });
            writeJSONCache(payloadsPath, payloadController, payloadsCache);

            // cache events
            const currentBlockOnPayloadsControllerChain =
              await client.getBlock();

            const eventsPath = `${chainId}/events`;
            const eventsCache =
              readJSONCache<
                Awaited<ReturnType<typeof getPayloadsControllerEvents>>
              >(eventsPath, payloadController) || [];

            console.log(bookKeepingCache);

            const lastSeenBlock = bookKeepingCache[payloadsPath]
              ? BigInt(bookKeepingCache[payloadsPath])
              : (
                  await getBlockAtTimestamp({
                    client: client,
                    timestamp: BigInt(
                      payloadsCache[0]?.createdAt ||
                        currentBlockOnPayloadsControllerChain.timestamp,
                    ),
                    fromBlock: BigInt(0),
                    toBlock: currentBlockOnPayloadsControllerChain.number,
                    maxDelta: BigInt(60 * 60), // 1h
                  })
                ).number;

            const logs = await getPayloadsControllerEvents(
              payloadController,
              client,
              BigInt(lastSeenBlock) + BigInt(1),
              currentBlockOnPayloadsControllerChain.number,
            );
            writeJSONCache(eventsPath, payloadController, [
              ...eventsCache,
              ...logs,
            ]);
            bookKeepingCache[payloadsPath] =
              currentBlockOnPayloadsControllerChain.number.toString();

            return formattedPayloadsData;
          }
        }),
      );
    }),
  );

  return {
    proposalId: proposalData.id,
    payloadsData,
  };
}

async function updateGovCoreEvents(
  proposalsCache: Record<number, BasicProposal>,
  bookKeepingCache: BookKeepingCache,
) {
  const bookKeepingCacheId = `${appConfig.govCoreChainId}/governance`;
  const eventsPath = `${appConfig.govCoreChainId}/events`;

  const client = CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId];
  const currentBlockOnGovernanceChain = await client.getBlockNumber();
  const contract = getContract({
    abi: IGovernanceCore_ABI,
    address: appConfig.govCoreConfig.contractAddress,
    client,
  });

  const governanceEvents =
    readJSONCache<Awaited<ReturnType<typeof getGovernanceEvents>>>(
      eventsPath,
      contract.address,
    ) || [];

  const lastSeenBlock = bookKeepingCache[bookKeepingCacheId]
    ? BigInt(bookKeepingCache[bookKeepingCacheId])
    : (
        await getBlockAtTimestamp({
          client: client,
          timestamp: BigInt(proposalsCache[0].creationTime),
          fromBlock: BigInt(0),
          toBlock: currentBlockOnGovernanceChain,
          maxDelta: BigInt(60 * 60 * 24),
        })
      ).number;

  const logs = await getGovernanceEvents(
    contract.address,
    client,
    BigInt(lastSeenBlock) + BigInt(1),
    currentBlockOnGovernanceChain,
  );
  const eventsCache = [...governanceEvents, ...logs];
  writeJSONCache(eventsPath, contract.address, eventsCache);
  bookKeepingCache[bookKeepingCacheId] =
    currentBlockOnGovernanceChain.toString();
}

// TODO: temporary
async function cachePayloadsControllers(
  controllers: Map<Address, number>,
  bookKeepingCache: BookKeepingCache,
) {
  return await Promise.all(
    Array.from(controllers).map(async ([address, chainId]) => {
      const payloadsPath = `${chainId}/payloads`;
      const client = CHAIN_ID_CLIENT_MAP[chainId];
      const contract = getContract({
        abi: IPayloadsControllerCore_ABI,
        client,
        address,
      });
      const payloadsCount = await contract.read.getPayloadsCount();

      const currentBlockOnPayloadsControllerChain =
        await client.getBlockNumber();
      if (payloadsCount === 0) {
        bookKeepingCache[payloadsPath] =
          currentBlockOnPayloadsControllerChain.toString();
        return;
      }
      // cache data
      const payloadsCache =
        readJSONCache<Record<number, Payload>>(payloadsPath, address) || {};
      const payloadsToCheck = [...Array(Number(payloadsCount)).keys()];
      for (let i = 0; i < payloadsToCheck.length; i++) {
        if (!payloadsCache[i] || !isPayloadFinal(payloadsCache[i].state)) {
          const payload = await contract.read.getPayloadById([i]);
          const payloadData = {
            ...payload,
            id: i,
            chainId,
            actionAddresses: payload.actions.map((action) => action.target),
            payloadsController: contract.address,
          };
          payloadsCache[i] = payloadData;
        }
      }
      writeJSONCache(payloadsPath, address, payloadsCache);
      // cache events
      const eventsPath = `${chainId}/events`;
      const eventsCache =
        readJSONCache<Awaited<ReturnType<typeof getPayloadsControllerEvents>>>(
          eventsPath,
          address,
        ) || [];
      const lastSeenBlock = bookKeepingCache[payloadsPath]
        ? BigInt(bookKeepingCache[payloadsPath])
        : (
            await getBlockAtTimestamp({
              client: client,
              timestamp: BigInt(payloadsCache[0].createdAt),
              fromBlock: BigInt(0),
              toBlock: currentBlockOnPayloadsControllerChain,
              maxDelta: BigInt(60 * 60), // 1h
            })
          ).number;
      const logs = await getPayloadsControllerEvents(
        address,
        client,
        BigInt(lastSeenBlock) + BigInt(1),
        currentBlockOnPayloadsControllerChain,
      );

      writeJSONCache(eventsPath, address, [...eventsCache, ...logs]);
      bookKeepingCache[payloadsPath] =
        currentBlockOnPayloadsControllerChain.toString();
    }),
  );
}

/**
 * simple cache mapping:
 * filename:blockNumber with the last used block for caching
 */
type BookKeepingCache = Record<string, string>;

/**
 * Indexes & caches:
 * - events on the governance
 * - events on the payloadsController
 * - events on the voting machines
 * - ipfs data
 * - formatted proposals data (gov core proposal data + voting machine proposal data)
 * - payloads data
 */
async function updateCache() {
  /**
   * the cache is initialized, passed to each function to be mutated and in the end written back to the file
   */
  const bookKeepingCache =
    readJSONCache<Record<string, string>>('bookKeeping', 'lastFetchedBlocks') ||
    {};

  // initialize contracts
  const govCoreClient = CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId];

  const govCore = getContract({
    address: appConfig.govCoreConfig.contractAddress,
    abi: IGovernanceCore_ABI,
    client: govCoreClient,
  });
  const govCoreDataHelper = getContract({
    address: appConfig.govCoreConfig.dataHelperContractAddress,
    abi: IGovernanceDataHelper_ABI,
    client: govCoreClient,
  });

  // get gov core configs
  const { contractsConstants, configs } = await getGovCoreConfigs({
    govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
    govCoreDataHelperContractAddress:
      appConfig.govCoreConfig.dataHelperContractAddress,
    client: govCoreClient,
  });

  // check proposals count
  const proposalsCount = await govCore.read.getProposalsCount();
  if (proposalsCount === BigInt(0)) {
    const currentBlockOnGovernanceChain = await govCoreClient.getBlockNumber();
    bookKeepingCache[`${appConfig.govCoreChainId}/governance`] =
      currentBlockOnGovernanceChain.toString();
    return;
  }

  // initialize gov core data
  const proposalsPath = `${appConfig.govCoreChainId}/proposals`;
  const proposalsCache =
    readJSONCache<Record<number, BasicProposal>>(
      proposalsPath,
      govCore.address,
    ) || {};

  // check ids for request
  const proposalsIds = [...Array(Number(proposalsCount)).keys()];
  const cachedProposalsIds = Object.values(proposalsCache)
    .filter((proposal) => proposal.prerender)
    .map((proposal) => proposal.id);
  const proposalsIdsForRequest: number[] = [];
  for (let i = 0; i < proposalsIds.length; i++) {
    let found = false;
    for (let j = 0; j < cachedProposalsIds.length; j++) {
      if (proposalsIds[i] === cachedProposalsIds[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      proposalsIdsForRequest.push(proposalsIds[i]);
    }
  }

  // get gov core proposals data from data helper contract
  const ids = !!proposalsIdsForRequest.length ? proposalsIdsForRequest : [0];
  const from = Math.max.apply(0, ids);
  const to = Math.min.apply(0, ids);
  const govCoreDataHelperData = await govCoreDataHelper.read.getProposalsData([
    govCore.address,
    BigInt(from),
    BigInt(to > 0 ? to - 1 : 0),
    BigInt(from - to + 1),
  ]);

  // format data for getting voting data
  const initialProposals = govCoreDataHelperData.map((proposal) => {
    return {
      id: proposal.id,
      votingChainId: Number(proposal.votingChainId),
      snapshotBlockHash: proposal.proposalData.snapshotBlockHash,
    };
  });
  const votingMachineData = await getVotingData(
    initialProposals,
    bookKeepingCache,
  );

  // combine voting machine data with proposal data
  const proposalsData: BasicProposal[] = getDetailedProposalsData(
    configs,
    govCoreDataHelperData,
    votingMachineData,
    proposalsIdsForRequest,
    false, // will be true only when proposal fully executed (proposal executed + all proposal payloads executed)
  );

  // update ipfs cache
  await updateIpfsCache(proposalsData);
  console.log('Caching proposals ipfs metadata finished.');

  const now = dayjs().unix();
  await Promise.all(
    proposalsData.map(async (data) => {
      const payloadsChainIds = data.initialPayloads
        .map((payload) => payload.chainId)
        .filter((value, index, self) => self.indexOf(value) === index);
      const payloadsControllers = data.initialPayloads
        .map((payload) => payload.payloadsController)
        .filter((value, index, self) => self.indexOf(value) === index);

      // update payloads cache
      const { payloadsData } = await updatePayloadsData(
        payloadsChainIds,
        payloadsControllers,
        data,
        bookKeepingCache,
      );
      console.log('Caching proposals payloads data finished.');

      const proposalPayloadsData = await Promise.all(
        data.initialPayloads.map(async (payload) => {
          return payloadsData
            .flat()
            .flat()
            .find(
              (payloadS) =>
                payloadS &&
                payloadS.id === payload.id &&
                payloadS.payloadsController === payload.payloadsController &&
                payloadS.chainId === payload.chainId,
            );
        }),
      );

      const proposalConfig = configs.filter(
        (config) => config.accessLevel === data.accessLevel,
      )[0];

      const isVotingEndedN =
        data.votingMachineData.endTime > 0 &&
        now > data.votingMachineData.endTime;

      const { forVotes, againstVotes } = normalizeVotes(
        data.votingMachineData.forVotes,
        data.votingMachineData.againstVotes,
      );

      const { quorumReached } = formatQuorum(
        data.votingMachineData.forVotes,
        proposalConfig.quorum,
        contractsConstants.precisionDivider,
      );

      const { normalizeRequiredDiff } = formatDiff(
        data.votingMachineData.forVotes,
        data.votingMachineData.againstVotes,
        proposalConfig.differential,
        contractsConstants.precisionDivider,
      );

      const isVotingFailed =
        isVotingEndedN &&
        (againstVotes >= forVotes ||
          (againstVotes === 0 && forVotes === 0) ||
          !quorumReached ||
          forVotes < againstVotes + normalizeRequiredDiff);

      const isProposalCanceled =
        data.basicState === BasicProposalState.Cancelled;
      const isProposalExpired =
        data.basicState === BasicProposalState.Expired ||
        now > data.creationTime + contractsConstants.expirationTime;

      const isProposalPayloadsFinished = proposalPayloadsData.every(
        (payload) => payload && payload?.state > PayloadState.Queued,
      );

      if (
        !isProposalPayloadsFinished &&
        !isVotingFailed &&
        !isProposalCanceled &&
        !isProposalExpired
      ) {
        proposalsCache[data.id] = {
          ...data,
          prerender: false,
        };
      } else {
        proposalsCache[data.id] = {
          ...data,
          prerender: true,
        };
      }
    }),
  );
  // update gov core cache
  writeJSONCache(proposalsPath, govCore.address, proposalsCache);
  console.log('Caching proposals data finished.');
  await updateGovCoreEvents(proposalsCache, bookKeepingCache);
  console.log('Caching proposals events finished.');

  writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);

  // TODO: temporary
  // cache payloadsController logs
  const controllers = new Map<Address, number>();
  Object.values(proposalsCache).forEach((proposal) => {
    proposal.initialPayloads.map((payload) =>
      controllers.set(payload.payloadsController, Number(payload.chainId)),
    );
  });
  await cachePayloadsControllers(controllers, bookKeepingCache);
  console.log('caching payloadsController finished');
}

updateCache();
