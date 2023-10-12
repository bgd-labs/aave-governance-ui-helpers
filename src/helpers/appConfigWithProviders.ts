import { providers } from 'ethers';

import { appConfigInit, CoreNetworkName } from './appConfig';

export const appConfigInitWithProviders = (
  providers: Record<
    number,
    providers.JsonRpcBatchProvider | providers.JsonRpcProvider
  >,
  coreNetwork: CoreNetworkName,
) => {
  return {
    providers,
    ...appConfigInit(coreNetwork),
  };
};
