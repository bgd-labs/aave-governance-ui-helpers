import {
  CHAIN_ID_CLIENT_MAP,
  getContractDeploymentBlock,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { getGovernanceEvents } from './events/governance';
import { appConfig } from './helpers/clients';
import { getPayloadsControllerEvents } from './events/payloadsController';

async function cacheGovernance() {
  const path = `${appConfig.govCoreChainId.toString()}/raw`;
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

async function cachePayloadsControllers() {
  return await Promise.all(
    appConfig.payloadsControllerChainIds.map(async (chainId) => {
      const path = `${chainId}/raw`;
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

/**
 * Indexes & caches:
 * - events on the governance :+1:
 * - events on the payloadsController
 * - events on the voting portals
 * - ipfs data
 */
async function updateCache() {
  // cache governance logs
  await cacheGovernance();
  // cache payloadsController logs
  await cachePayloadsControllers();
}

updateCache();
