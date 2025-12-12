import {
  IGovernanceCore_ABI,
  IPayloadsControllerCore_ABI,
  IVotingPortal_ABI,
} from '@bgd-labs/aave-address-book/abis';
import {
  getBlockAtTimestamp,
  getContractDeploymentBlock,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { ChainList, getRPCUrl, SupportedChainIds } from '@bgd-labs/toolbox';
import { Address, getContract, Hex } from 'viem';
import { getBlock, getBlockNumber } from 'viem/actions';

import {
  BookKeepingCache,
  getProposalMetadata,
  PayloadsCache,
  PayloadState,
  ProposalMetadata,
  ProposalsCache,
  ProposalState,
} from '../';
import { getGovernanceEvents } from '../utils/viem/events/governance';
import {
  getPayloadsControllerEvents,
  isPayloadFinal,
} from '../utils/viem/events/payloadsController';
import { getVotingMachineEvents } from '../utils/viem/events/votingMachine';
import { createViemClient } from './createClient';

require('dotenv').config();

export const ipfsPrivateGateway: string =
  process.env.IPFS_GATEWAY || 'https://dweb.link/ipfs';

async function updateIpfsCache(proposalsCache: ProposalsCache) {
  const ipfsCache: Record<string, ProposalMetadata> =
    readJSONCache('web3', 'ipfs') || {};
  for (const key of Object.keys(proposalsCache)) {
    const id = Number(key);
    if (id === 420) {
      const metadata = await getProposalMetadata({
        hash: "0xf7f1081ce650af5f68e57d058f61290764c4093f309902dea0791609717df59a",
        gateway: ipfsPrivateGateway,
      });
      if (metadata) {
        ipfsCache[proposalsCache[id].ipfsHash] = metadata;
      }
      continue;
    }
    if (!ipfsCache[proposalsCache[id].ipfsHash]) {
      try {
        const metadata = await getProposalMetadata({
          hash: proposalsCache[id].ipfsHash,
          gateway: ipfsPrivateGateway,
        });
        if (metadata) {
          ipfsCache[proposalsCache[id].ipfsHash] = metadata;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        console.log(
          `Error when ipfs data getting, ipfs hash: ${proposalsCache[id].ipfsHash}`,
        );
        throw new Error(
          `Error when ipfs data getting, ipfs hash: ${proposalsCache[id].ipfsHash}`,
        );
      }
    }
  }
  writeJSONCache('web3', 'ipfs', ipfsCache);
  console.log('Caching proposals ipfs metadata finished.');
  return ipfsCache;
}

async function updatePayloadsEvents(
  chainId: number,
  controller: Hex,
  payloadsCache: PayloadsCache,
  bookKeepingCache: BookKeepingCache,
) {
  const client = createViemClient({
    chain: ChainList[chainId as SupportedChainIds] as any,
    rpcUrl: getRPCUrl(chainId as SupportedChainIds, {
      alchemyKey: process.env.ALCHEMY_API_KEY,
    }),
  });
  const payloadsPath = `${chainId}/payloads`;

  const currentBlockOnPayloadsControllerChain = await getBlock(client);
  const eventsPath = `${chainId}/events`;
  const eventsCache =
    readJSONCache<Awaited<ReturnType<typeof getPayloadsControllerEvents>>>(
      eventsPath,
      controller,
    ) || [];

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
    controller,
    client,
    BigInt(lastSeenBlock) + BigInt(1),
    currentBlockOnPayloadsControllerChain.number,
  );
  writeJSONCache(eventsPath, controller, [...eventsCache, ...logs]);
  bookKeepingCache[payloadsPath] =
    currentBlockOnPayloadsControllerChain.number.toString();
  writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);
  console.log('BookKeeping updated.');
}

async function updatePayloadsData(
  controllers: Map<Address, number>,
  bookKeepingCache: BookKeepingCache,
  secondTime?: boolean,
) {
  return await Promise.all(
    Array.from(controllers).map(async ([controller, chainId]) => {
      const payloadsPath = `${chainId}/payloads`;
      const payloadsCache =
        readJSONCache<PayloadsCache>(payloadsPath, controller) || {};

      const client = createViemClient({
        chain: ChainList[chainId as SupportedChainIds] as any,
        rpcUrl: getRPCUrl(chainId as SupportedChainIds, {
          alchemyKey: process.env.ALCHEMY_API_KEY,
        }),
      });
      const contract = getContract({
        abi: IPayloadsControllerCore_ABI,
        client,
        address: controller,
      });
      const payloadsCount = await contract.read.getPayloadsCount();
      const payloadsIds = [...Array(Number(payloadsCount)).keys()];
      for (let i = 0; i < payloadsIds.length; i++) {
        if (
          secondTime
            ? !payloadsCache[i]
            : !payloadsCache[i] || !isPayloadFinal(payloadsCache[i].state)
        ) {
          const payload = await contract.read.getPayloadById([i]);
          payloadsCache[i] = {
            ...payload,
            id: Number(i),
            chainId,
            payloadsController: controller,
          };
        }
      }
      writeJSONCache(payloadsPath, controller, payloadsCache);

      if (secondTime) {
        await updatePayloadsEvents(
          chainId,
          controller,
          payloadsCache,
          bookKeepingCache,
        );
      }
      return payloadsCache;
    }),
  );
}

async function updateGovCoreEvents(
  govCoreChainId: bigint | number,
  govCoreContractAddress: Address,
  proposalsCache: ProposalsCache,
  bookKeepingCache: BookKeepingCache,
) {
  const bookKeepingCacheId = `${Number(govCoreChainId)}/governance`;
  const eventsPath = `${Number(govCoreChainId)}/events`;

  const client = createViemClient({
    chain: ChainList[govCoreChainId as SupportedChainIds] as any,
    rpcUrl: getRPCUrl(govCoreChainId as SupportedChainIds, {
      alchemyKey: process.env.ALCHEMY_API_KEY,
    }),
  });
  const currentBlockOnGovernanceChain = await getBlockNumber(client);
  const contract = getContract({
    abi: IGovernanceCore_ABI,
    address: govCoreContractAddress,
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
  console.log('Caching proposals events finished.');

  bookKeepingCache[bookKeepingCacheId] =
    currentBlockOnGovernanceChain.toString();
  // update bookKeeping
  writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);
  console.log('BookKeeping updated.');
}

async function updateVMEvents(
  govCoreChainId: bigint | number,
  votingPortals: Set<Address>,
  bookKeepingCache: BookKeepingCache,
) {
  const votingMachines = await Promise.all(
    Array.from(votingPortals).map(async (portal) => {
      const portalContract = getContract({
        abi: IVotingPortal_ABI,
        client: createViemClient({
          chain: ChainList[govCoreChainId as SupportedChainIds] as any,
          rpcUrl: getRPCUrl(govCoreChainId as SupportedChainIds, {
            alchemyKey: process.env.ALCHEMY_API_KEY,
          }),
        }),
        address: portal,
      });
      return {
        machine: await portalContract.read.VOTING_MACHINE(),
        chainId: Number(await portalContract.read.VOTING_MACHINE_CHAIN_ID()),
      };
    }),
  );

  const votingEvents = await Promise.all(
    votingMachines.map(async ({ chainId, machine }) => {
      const path = `${chainId}/events`;
      const address = machine;
      const client = createViemClient({
        chain: ChainList[chainId as SupportedChainIds] as any,
        rpcUrl: getRPCUrl(chainId as SupportedChainIds, {
          alchemyKey: process.env.ALCHEMY_API_KEY,
        }),
      });
      const currentBlockOnVotingMachineChain = await getBlockNumber(client);
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
  console.log('Caching VM events finished.');
  writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);
  console.log('BookKeeping updated.');
  return votingEvents;
}

/**
 * Indexes & caches:
 * - events on the governance
 * - events on the payloadsController
 * - events on the voting machines
 * - ipfs data
 * - proposals data
 * - payloads data
 */
export async function updateCache({
  govCoreChainId,
  govCoreContractAddress,
}: {
  govCoreChainId: bigint | number;
  govCoreContractAddress: Address;
}) {
  /**
   * the cache is initialized, passed to each function to be mutated and in the end written back to the file
   */
  const bookKeepingCache =
    readJSONCache<Record<string, string>>('bookKeeping', 'lastFetchedBlocks') ||
    {};
  // initialize contracts
  const govCoreClient = createViemClient({
    chain: ChainList[govCoreChainId as SupportedChainIds] as any,
    rpcUrl: getRPCUrl(govCoreChainId as SupportedChainIds, {
      alchemyKey: process.env.ALCHEMY_API_KEY,
    }),
  });
  const govCore = getContract({
    address: govCoreContractAddress,
    abi: IGovernanceCore_ABI,
    client: govCoreClient,
  });
  // check proposals count
  const proposalsCount = await govCore.read.getProposalsCount();
  if (proposalsCount === BigInt(0)) {
    const currentBlockOnGovernanceChain = await getBlockNumber(govCoreClient);
    bookKeepingCache[`${govCoreChainId}/governance`] =
      currentBlockOnGovernanceChain.toString();
    writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);
    console.log('BookKeeping updated.');

    return;
  }
  // initialize gov core data from cache
  const proposalsPath = `${govCoreChainId}/proposals`;
  const proposalsCache =
    readJSONCache<ProposalsCache>(proposalsPath, govCore.address) || {};
  // update active proposals data and payloads data connected to this proposals
  const proposalsIds = [...Array(Number(proposalsCount)).keys()];
  await Promise.all(
    proposalsIds.map(async (id) => {
      if (
        !proposalsCache[id] ||
        !proposalsCache[id].isFinished ||
        Number(proposalsCache[id].cancellationFee) > 0
      ) {
        const proposalData = await govCore.read.getProposal([BigInt(id)]);
        const controllers = new Map<Address, number>();
        proposalData.payloads.map((payload) =>
          controllers.set(payload.payloadsController, Number(payload.chain)),
        );
        // update payloads cache
        const payloadsData = await updatePayloadsData(
          controllers,
          bookKeepingCache,
        );
        console.log('Caching payloads data with events finished.');
        // get payloads data for current proposal
        const proposalPayloadsData = proposalData.payloads.map((payload) => {
          const cachedPayloadsData = payloadsData
            .flat()
            .find(
              (payloadS) =>
                payloadS[payload.payloadId] &&
                payloadS[payload.payloadId].id === payload.payloadId &&
                payloadS[payload.payloadId].payloadsController ===
                payload.payloadsController &&
                payloadS[payload.payloadId].chainId === Number(payload.chain),
            );
          if (cachedPayloadsData) {
            return cachedPayloadsData[payload.payloadId];
          }
          return undefined;
        });

        const isProposalPayloadsFinished = proposalPayloadsData.every(
          (payload) => payload && payload?.state > PayloadState.Queued,
        );

        proposalsCache[id] = {
          ...proposalData,
          isFinished:
            proposalData.state === ProposalState.Executed
              ? isProposalPayloadsFinished
              : proposalData.state > ProposalState.Executed,
        };
      }
    }),
  );
  // update gov core cache
  writeJSONCache(proposalsPath, govCore.address, proposalsCache);
  console.log('Caching proposals data finished.');
  // update ipfs cache
  await updateIpfsCache(proposalsCache);
  // update gov core events
  await updateGovCoreEvents(
    govCoreChainId,
    govCoreContractAddress,
    proposalsCache,
    bookKeepingCache,
  );
  // update VM events
  const votingPortals = new Set<Address>();
  Object.values(proposalsCache).forEach((proposal) => {
    votingPortals.add(proposal.votingPortal);
  });
  await updateVMEvents(govCoreChainId, votingPortals, bookKeepingCache);
  // update payloads data for payloads that not in proposals and all payloads events
  const controllers = new Map<Address, number>();
  Object.values(proposalsCache).forEach((proposal) => {
    proposal.payloads.map((payload) =>
      controllers.set(payload.payloadsController, Number(payload.chain)),
    );
  });
  await updatePayloadsData(controllers, bookKeepingCache, true);
  console.log('Caching outside payloads data with events finished.');
  // update bookKeeping
  writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);
  console.log('BookKeeping updated.');
}
