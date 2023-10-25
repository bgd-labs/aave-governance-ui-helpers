import { appConfigInit, CoreNetworkName } from './appConfig';
import { ClientsRecord } from './types';

export const appConfigWithClients = (
  clients: ClientsRecord,
  coreNetwork: CoreNetworkName,
) => {
  return {
    clients,
    ...appConfigInit(coreNetwork),
  };
};
