import {
  CHAIN_ID_CLIENT_MAP,
  getContractDeploymentBlock,
  getProposalMetadata,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { getGovernanceEvents, isProposalFinal } from './events/governance';
import { appConfig } from './helpers/clients';
import { getPayloadsControllerEvents } from './events/payloadsController';
import { getVotingMachineEvents } from './events/votingMachine';
import { getContract } from 'viem';
import { IGovernanceCore_ABI } from '@bgd-labs/aave-address-book';

async function cacheGovernanceEvents() {
  const path = `${appConfig.govCoreChainId.toString()}/events`;
  const client = CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId];
  const currentBlockOnGovernanceChain = await client.getBlockNumber();
  const governanceCache =
    readJSONCache(path, appConfig.govCoreConfig.contractAddress) || [];
  const lastSeenBlock =
    governanceCache.length > 0
      ? governanceCache[governanceCache.length - 1].blockNumber
      : await getContractDeploymentBlock({
          client,
          contractAddress: appConfig.govCoreConfig.contractAddress,
          fromBlock: BigInt(0),
          toBlock: currentBlockOnGovernanceChain,
          maxDelta: BigInt(10000),
        });
  const logs = await getGovernanceEvents(
    appConfig.govCoreConfig.contractAddress,
    client,
    BigInt(lastSeenBlock) + BigInt(1),
    currentBlockOnGovernanceChain,
  );
  writeJSONCache(path, appConfig.govCoreConfig.contractAddress, [
    ...governanceCache,
    ...logs,
  ]);
}

async function cachePayloadsControllersEvents() {
  return await Promise.allSettled(
    appConfig.payloadsControllerChainIds.map(async (chainId) => {
      const path = `${chainId}/events`;
      const address =
        // TODO: this is weird as each chain should only have one controller
        appConfig.payloadsControllerConfig[chainId].contractAddresses[0];
      const client = CHAIN_ID_CLIENT_MAP[chainId];
      const currentBlockOnPayloadsControllerChain =
        await client.getBlockNumber();
      const payloadsControllerCache = readJSONCache(path, address) || [];
      const lastSeenBlock =
        payloadsControllerCache.length > 0
          ? payloadsControllerCache[payloadsControllerCache.length - 1]
              .blockNumber
          : await getContractDeploymentBlock({
              client: client,
              contractAddress: address,
              fromBlock: BigInt(0),
              toBlock: currentBlockOnPayloadsControllerChain,
              maxDelta: BigInt(10000),
            });
      const logs = await getPayloadsControllerEvents(
        address,
        client,
        BigInt(lastSeenBlock) + BigInt(1),
        currentBlockOnPayloadsControllerChain,
      );
      writeJSONCache(path, address, [...payloadsControllerCache, ...logs]);
    }),
  );
}

async function cacheVotes() {
  return await Promise.allSettled(
    appConfig.votingMachineChainIds.map(async (chainId) => {
      const path = `${chainId}/events`;
      const address =
        // TODO: this is weird as each chain should only have one controller
        appConfig.votingMachineConfig[chainId].contractAddress;
      const client = CHAIN_ID_CLIENT_MAP[chainId];
      const currentBlockOnPayloadsControllerChain =
        await client.getBlockNumber();
      const payloadsControllerCache = readJSONCache(path, address) || [];
      const lastSeenBlock =
        payloadsControllerCache.length > 0
          ? payloadsControllerCache[payloadsControllerCache.length - 1]
              .blockNumber
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
      writeJSONCache(path, address, [...payloadsControllerCache, ...logs]);
    }),
  );
}

async function cacheProposals() {
  const path = `${appConfig.govCoreChainId.toString()}/proposals`;
  const client = CHAIN_ID_CLIENT_MAP[appConfig.govCoreChainId];
  const address = appConfig.govCoreConfig.contractAddress;

  const governanceCache = readJSONCache(path, address) || {};
  const contract = getContract({
    abi: IGovernanceCore_ABI,
    address: address,
    publicClient: client,
  });
  const proposalsCount = await contract.read.getProposalsCount();
  const proposalsToCheck = [...Array(Number(proposalsCount)).keys()];
  for (let i = 0; i < proposalsToCheck.length; i++) {
    if (!governanceCache[i] || !isProposalFinal(governanceCache[i].state)) {
      governanceCache[i] = await contract.read.getProposal([BigInt(i)]);
    }
  }
  writeJSONCache(path, address, governanceCache);
  return governanceCache;
}

async function cacheIpfs(governanceCache: any) {
  const ipfsCache = readJSONCache('web3', 'ipfs') || {};
  for (const key of Object.keys(governanceCache)) {
    if (!ipfsCache[governanceCache[key].ipfsHash]) {
      ipfsCache[governanceCache[key].ipfsHash] = await getProposalMetadata(
        governanceCache[key].ipfsHash,
      );
    }
  }
  writeJSONCache('web3', 'ipfs', ipfsCache);
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
  await cacheGovernanceEvents();
  const cache = await cacheProposals();
  await cacheIpfs(cache);
  // cache payloadsController logs
  await cachePayloadsControllersEvents();
  // cache votes
  await cacheVotes();
}

updateCache();
