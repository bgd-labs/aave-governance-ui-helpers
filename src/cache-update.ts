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
  Address,
  ContractFunctionResult,
  GetContractReturnType,
  getContract,
} from 'viem';
import {
  IGovernanceCore_ABI,
  IPayloadsControllerCore_ABI,
  IVotingPortal_ABI,
} from '@bgd-labs/aave-address-book';

async function cacheGovernance(): Promise<{
  proposalsCache: Record<
    number,
    ContractFunctionResult<typeof IGovernanceCore_ABI, 'getProposal'>
  >;
  eventsCache: Awaited<ReturnType<typeof getGovernanceEvents>>;
  ipfsCache: Record<string, ProposalMetadata>;
}> {
  const client = CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId];
  const currentBlockOnGovernanceChain = await client.getBlockNumber();
  const address = appConfig.govCoreConfig.contractAddress;
  const contract = getContract({
    abi: IGovernanceCore_ABI,
    address: address,
    publicClient: client,
  });
  const proposalsCount = await contract.read.getProposalsCount();
  if (proposalsCount == BigInt(0))
    return { proposalsCache: {}, eventsCache: [], ipfsCache: {} };
  // cache data
  const proposalsPath = `${appConfig.govCoreChainId.toString()}/proposals`;
  const proposalsCache = readJSONCache(proposalsPath, address) || {};
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
  const lastSeenBlock =
    governanceEvents.length > 0
      ? BigInt(governanceEvents[governanceEvents.length - 1].blockNumber)
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
  return { proposalsCache, eventsCache, ipfsCache };
}

async function cachePayloadsControllers(controllers: Map<Address, number>) {
  return await Promise.allSettled(
    Array.from(controllers).map(async ([address, chainId]) => {
      const client = CHAIN_ID_CLIENT_MAP[chainId];
      const contract = getContract({
        abi: IPayloadsControllerCore_ABI,
        publicClient: client,
        address,
      });
      const payloadsCount = await contract.read.getPayloadsCount();
      if (payloadsCount == 0) return;
      const currentBlockOnPayloadsControllerChain =
        await client.getBlockNumber();
      // cache data
      const payloadsPath = `${chainId}/payloads`;
      const payloadsCache =
        readJSONCache(
          /*<
          Record<
            number,
            ContractFunctionReturnType<
              typeof IPayloadsControllerCore_ABI,
              AbiStateMutability,
              'getPayloadById'
            >
          >
        >*/ payloadsPath,
          address,
        ) || {};
      const payloadsToCheck = [...Array(Number(payloadsCount)).keys()];
      for (let i = 0; i < payloadsToCheck.length; i++) {
        if (!payloadsCache[i] || !isPayloadFinal(payloadsCache[i].state)) {
          payloadsCache[i] = await contract.read.getPayloadById([i]);
        }
      }
      writeJSONCache(payloadsPath, address, payloadsCache);
      // cache events
      const eventsPath = `${chainId}/events`;
      const eventsCache = readJSONCache(eventsPath, address) || [];
      const lastSeenBlock =
        eventsCache.length > 0
          ? BigInt(eventsCache[eventsCache.length - 1].blockNumber)
          : (
              await getBlockAtTimestamp({
                client: client,
                timestamp: payloadsCache[0].createdAt,
                fromBlock: BigInt(0),
                toBlock: currentBlockOnPayloadsControllerChain,
                maxDelta: BigInt(60 * 60 * 24),
              })
            ).number;
      const logs = await getPayloadsControllerEvents(
        address,
        client,
        BigInt(lastSeenBlock) + BigInt(1),
        currentBlockOnPayloadsControllerChain,
      );
      writeJSONCache(eventsPath, address, [...eventsCache, ...logs]);
    }),
  );
}

async function cacheVotes(votingPortals: Set<Address>) {
  const votingMachines = await Promise.all(
    Array.from(votingPortals).map(async (portal) => {
      const portalContract = getContract({
        abi: IVotingPortal_ABI,
        publicClient: CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId],
        address: portal,
      });
      return {
        machine: await portalContract.read.VOTING_MACHINE(),
        chainId: Number(await portalContract.read.VOTING_MACHINE_CHAIN_ID()),
      };
    }),
  );

  return await Promise.all(
    votingMachines.map(async ({ chainId, machine }) => {
      const path = `${chainId}/events`;
      const address = machine;
      const client = CHAIN_ID_CLIENT_MAP[chainId];
      const currentBlockOnPayloadsControllerChain =
        await client.getBlockNumber();
      const votesCache = readJSONCache(path, address) || [];
      const lastSeenBlock =
        votesCache.length > 0
          ? BigInt(votesCache[votesCache.length - 1].blockNumber)
          : await getContractDeploymentBlock({
              client: client,
              contractAddress: address,
              fromBlock: BigInt(0),
              toBlock: currentBlockOnPayloadsControllerChain,
              maxDelta: BigInt(10000),
            });
      const logs = await getVotingMachineEvents(
        address,
        client,
        BigInt(lastSeenBlock) + BigInt(1),
        currentBlockOnPayloadsControllerChain,
      );
      const combinedCache = [...votesCache, ...logs];
      writeJSONCache(path, address, combinedCache);
    }),
  );
}

/**
 * Indexes & caches:
 * - events on the governance :+1:
 * - events on the payloadsController
 * - events on the voting portals
 * - ipfs data
 */
async function updateCache() {
  // cache governance logs
  const { proposalsCache } = await cacheGovernance();

  // cache payloadsController logs
  const controllers = new Map<Address, number>();
  Object.keys(proposalsCache).map((key) => {
    const proposal = proposalsCache[key as unknown as number];
    proposal.payloads.map((payload) =>
      controllers.set(payload.payloadsController, Number(payload.chain)),
    );
  });
  await cachePayloadsControllers(controllers);

  // cache votes
  const votingPortals = new Set<Address>();
  Object.keys(proposalsCache).map((key) => {
    const proposal = proposalsCache[key as unknown as number];
    votingPortals.add(proposal.votingPortal);
  });
  await cacheVotes(votingPortals);
}

updateCache();
