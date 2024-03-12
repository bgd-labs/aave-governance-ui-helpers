import { appConfig } from './config';
import { updateCache } from './update-cache-package';

updateCache({
  govCoreChainId: appConfig.govCoreChainId,
  govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
});
