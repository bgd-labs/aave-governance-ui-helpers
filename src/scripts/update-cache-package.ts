// TODO: remove after update gov cache package

import {
  IGovernanceCore_ABI,
  IVotingPortal_ABI,
} from '@bgd-labs/aave-address-book';
import {
  githubHybridCacheAdapter,
  // @ts-ignore
} from '@bgd-labs/aave-v3-governance-cache/githubHybrid';
// @ts-ignore
import { localCacheAdapter } from '@bgd-labs/aave-v3-governance-cache/localCache';
import {
  CHAIN_ID_CLIENT_MAP,
  getContractDeploymentBlock,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { Address, getContract } from 'viem';
import { getBlockNumber } from 'viem/actions';

import { BookKeepingCache } from '../';
import { getVotingMachineEvents } from '../utils/viem/events/votingMachine';
import { appConfig } from './config';

const cachingLayer = githubHybridCacheAdapter(localCacheAdapter);

async function updateVMEvents(
  govCoreChainId: BigInt | number,
  votingPortals: Set<Address>,
  bookKeepingCache: BookKeepingCache,
) {
  const votingMachines = await Promise.all(
    Array.from(votingPortals).map(async (portal) => {
      const portalContract = getContract({
        abi: IVotingPortal_ABI,
        client: CHAIN_ID_CLIENT_MAP[Number(govCoreChainId)],
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
      const client = CHAIN_ID_CLIENT_MAP[chainId];
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
  govCoreChainId: BigInt | number;
  govCoreContractAddress: Address;
}) {
  /**
   * the cache is initialized, passed to each function to be mutated and in the end written back to the file
   */
  const bookKeepingCache =
    readJSONCache<Record<string, string>>('bookKeeping', 'lastFetchedBlocks') ||
    {};
  // initialize contracts
  const govCoreClient = CHAIN_ID_CLIENT_MAP[Number(govCoreChainId)];
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

  // update VM events
  const proposalsIds = [...Array(Number(proposalsCount)).keys()];
  const proposalsCache = await Promise.all(
    proposalsIds.map(
      async (id) =>
        await cachingLayer.getProposal({
          chainId: appConfig.govCoreChainId,
          governance: appConfig.govCoreConfig.contractAddress,
          proposalId: BigInt(id),
        }),
    ),
  );
  const votingPortals = new Set<Address>();
  Object.values(proposalsCache).forEach((proposal) => {
    votingPortals.add(proposal.proposal.votingPortal);
  });
  await updateVMEvents(govCoreChainId, votingPortals, bookKeepingCache);

  writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);
  console.log('BookKeeping updated.');
}
