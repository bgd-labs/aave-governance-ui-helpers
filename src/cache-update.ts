import {
  CHAIN_ID_CLIENT_MAP,
  ProposalMetadata,
  getBlockAtTimestamp,
  getContractDeploymentBlock,
  getProposalMetadata,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { getGovernanceEvents, isProposalFinal } from './events/governance';
import { appConfig } from './helpers/clients';
import {
  getPayloadsControllerEvents,
  isPayloadFinal,
} from './events/payloadsController';
import { getVotingMachineEvents } from './events/votingMachine';
import {
  AbiStateMutability,
  Address,
  ContractFunctionReturnType,
  getContract,
} from 'viem';
import {
  IGovernanceCore_ABI,
  IPayloadsControllerCore_ABI,
  IVotingPortal_ABI,
} from '@bgd-labs/aave-address-book';

export async function cacheGovernance(
  bookKeepingCache: BookKeepingCache,
): Promise<{
  proposalsCache: Record<
    string,
    ContractFunctionReturnType<
      typeof IGovernanceCore_ABI,
      AbiStateMutability,
      'getProposal'
    >
  >;
  eventsCache: Awaited<ReturnType<typeof getGovernanceEvents>>;
  ipfsCache: Record<string, ProposalMetadata>;
}> {
  const bookKeepingCacheId = 'governance';
  const client = CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId];
  const currentBlockOnGovernanceChain = await client.getBlockNumber();
  const address = appConfig.govCoreConfig.contractAddress;
  const contract = getContract({
    abi: IGovernanceCore_ABI,
    address: address,
    client,
  });
  const proposalsCount = await contract.read.getProposalsCount();
  if (proposalsCount == BigInt(0)) {
    bookKeepingCache[bookKeepingCacheId] =
      currentBlockOnGovernanceChain.toString();
    return {
      proposalsCache: {},
      eventsCache: [],
      ipfsCache: {},
    };
  }
  // cache data
  const proposalsPath = `${appConfig.govCoreChainId.toString()}/proposals`;
  const proposalsCache =
    readJSONCache<
      Record<
        string,
        ContractFunctionReturnType<
          typeof IGovernanceCore_ABI,
          AbiStateMutability,
          'getProposal'
        >
      >
    >(proposalsPath, address) || {};
  const proposalsToCheck = [...Array(Number(proposalsCount)).keys()];
  for (let i = 0; i < proposalsToCheck.length; i++) {
    if (!proposalsCache[i] || !isProposalFinal(proposalsCache[i].state)) {
      proposalsCache[i] = await contract.read.getProposal([BigInt(i)]);
    }
  }
  writeJSONCache(proposalsPath, address, proposalsCache);

  // cache ipfs
  const ipfsCache: Record<string, ProposalMetadata> =
    readJSONCache('web3', 'ipfs') || {};
  for (const key of Object.keys(proposalsCache)) {
    if (!ipfsCache[proposalsCache[key].ipfsHash]) {
      ipfsCache[proposalsCache[key].ipfsHash] = await getProposalMetadata(
        proposalsCache[key].ipfsHash,
      );
    }
  }
  writeJSONCache('web3', 'ipfs', ipfsCache);

  // cache events
  const eventsPath = `${appConfig.govCoreChainId.toString()}/events`;
  const governanceEvents =
    readJSONCache<Awaited<ReturnType<typeof getGovernanceEvents>>>(
      eventsPath,
      address,
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
    address,
    client,
    BigInt(lastSeenBlock) + BigInt(1),
    currentBlockOnGovernanceChain,
  );
  const eventsCache = [...governanceEvents, ...logs];
  writeJSONCache(eventsPath, address, eventsCache);
  bookKeepingCache[bookKeepingCacheId] =
    currentBlockOnGovernanceChain.toString();
  return { proposalsCache, eventsCache, ipfsCache };
}

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
      if (payloadsCount == 0) {
        bookKeepingCache[payloadsPath] =
          currentBlockOnPayloadsControllerChain.toString();
        return;
      }
      // cache data
      const payloadsCache =
        readJSONCache<
          Record<
            number,
            ContractFunctionReturnType<
              typeof IPayloadsControllerCore_ABI,
              AbiStateMutability,
              'getPayloadById'
            >
          >
        >(payloadsPath, address) || {};
      const payloadsToCheck = [...Array(Number(payloadsCount)).keys()];
      for (let i = 0; i < payloadsToCheck.length; i++) {
        if (!payloadsCache[i] || !isPayloadFinal(payloadsCache[i].state)) {
          payloadsCache[i] = await contract.read.getPayloadById([i]);
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

async function cacheVotes(
  votingPortals: Set<Address>,
  bookKeepingCache: BookKeepingCache,
) {
  const votingMachines = await Promise.all(
    Array.from(votingPortals).map(async (portal) => {
      const portalContract = getContract({
        abi: IVotingPortal_ABI,
        client: CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId],
        address: portal,
      });
      return {
        machine: await portalContract.read.VOTING_MACHINE(),
        chainId: Number(await portalContract.read.VOTING_MACHINE_CHAIN_ID()),
      };
    }),
  );

  console.log('machines', votingMachines);

  return await Promise.all(
    votingMachines.map(async ({ chainId, machine }) => {
      const path = `${chainId}/events`;
      const address = machine;
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

/**
 * simple cache mapping:
 * filename:blockNumber with the last used block for caching
 */
type BookKeepingCache = Record<string, string>;

/**
 * Indexes & caches:
 * - events on the governance :+1:
 * - events on the payloadsController
 * - events on the voting portals
 * - ipfs data
 */
async function updateCache() {
  /**
   * the cache is initialized, passed to each function to be mutated and in the end written back to the file
   */
  const bookKeepingCache =
    readJSONCache<Record<string, string>>('bookKeeping', 'lastFetchedBlocks') ||
    {};
  // cache governance logs
  const { proposalsCache } = await cacheGovernance(bookKeepingCache);
  console.log('caching governance finished');

  // cache payloadsController logs
  const controllers = new Map<Address, number>();
  Object.keys(proposalsCache).map((key) => {
    const proposal = proposalsCache[key];
    proposal.payloads.map((payload) =>
      controllers.set(payload.payloadsController, Number(payload.chain)),
    );
  });
  await cachePayloadsControllers(controllers, bookKeepingCache);
  console.log('caching payloadsController finished');

  // cache votes
  const votingPortals = new Set<Address>();
  Object.keys(proposalsCache).map((key) => {
    const proposal = proposalsCache[key];
    votingPortals.add(proposal.votingPortal);
  });
  await cacheVotes(votingPortals, bookKeepingCache);
  console.log('caching votes finished');

  writeJSONCache('bookKeeping', 'lastFetchedBlocks', bookKeepingCache);
}

updateCache();
