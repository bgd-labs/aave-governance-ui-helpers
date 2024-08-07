// only for internal usage, for update cache

import { appConfigInit, CoreNetworkName } from '..';

require('dotenv').config();

export const coreName: CoreNetworkName =
  (process.env.CORE_NETWORK as CoreNetworkName) || 'mainnet';

export const appConfig = appConfigInit(coreName);
