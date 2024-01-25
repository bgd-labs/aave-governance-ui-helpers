// only for internal usage

import { appConfigInit, CoreNetworkName } from './appConfig';

require('dotenv').config();

export const coreName: CoreNetworkName =
  (process.env.CORE_NETWORK as CoreNetworkName) || 'mainnet';

export const appConfig = appConfigInit(coreName);
