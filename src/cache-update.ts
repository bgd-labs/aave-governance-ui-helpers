import {
  getContractDeploymentBlock,
  readJSONCache,
  writeJSONCache,
} from '@bgd-labs/js-utils';
import { getGovernanceEvents } from './events/governance';
import { appConfig, initialClients } from './helpers/clients';

/**
 * Indexes & caches:
 * - events on the governance :+1:
 * - events on the payloadsController
 * - events on the voting portals
 * - ipfs data
 */
async function updateCache() {
  const currentBlockOnGovernanceChain =
    await initialClients[appConfig.govCoreChainId].getBlockNumber();
  const governanceCache =
    readJSONCache(
      appConfig.govCoreChainId.toString(),
      appConfig.govCoreConfig.contractAddress,
    ) || [];
  const lastSeenBlock =
    governanceCache.length > 0
      ? governanceCache[governanceCache.length - 1].blockNumber
      : await getContractDeploymentBlock({
          client: initialClients[appConfig.govCoreChainId],
          contractAddress: appConfig.govCoreConfig.contractAddress,
          fromBlock: BigInt(0),
          toBlock: currentBlockOnGovernanceChain,
          maxDelta: BigInt(10000),
        });
  // cache governance logs
  const logs = await getGovernanceEvents(
    appConfig.govCoreConfig.contractAddress,
    initialClients[appConfig.govCoreChainId],
    BigInt(lastSeenBlock) + BigInt(1),
    currentBlockOnGovernanceChain,
  );
  writeJSONCache(
    appConfig.govCoreChainId.toString(),
    appConfig.govCoreConfig.contractAddress,
    [...governanceCache, ...logs],
  );

  // cache payloadsController logs
}

updateCache();
