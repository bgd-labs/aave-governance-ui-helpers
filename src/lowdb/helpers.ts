import { CoreNetworkName } from '../helpers/appConfig';

require('dotenv').config();

export const coreName: CoreNetworkName =
  (process.env.CORE_NETWORK as CoreNetworkName) || 'mainnet';
export const baseDirName = `src/generated-cache/${coreName}`;
