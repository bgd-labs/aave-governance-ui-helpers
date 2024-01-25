import { appConfig } from '../helpers/config';
import { updateCache } from './update-cache-package.ts';

updateCache({
  govCoreChainId: appConfig.govCoreChainId,
  govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
});
