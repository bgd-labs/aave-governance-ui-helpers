import { appConfig } from './config.ts';
import { updateCache } from './update-cache-package.ts';

updateCache({
  govCoreChainId: appConfig.govCoreChainId,
  govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
});
