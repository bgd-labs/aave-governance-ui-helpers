import { PublicClient } from '@wagmi/core';

import { appConfigInit, CoreNetworkName } from './appConfig';

export const appConfigWithClients = (
  clients: Record<number, PublicClient>,
  coreNetwork: CoreNetworkName,
) => {
  return {
    clients,
    ...appConfigInit(coreNetwork),
  };
};
