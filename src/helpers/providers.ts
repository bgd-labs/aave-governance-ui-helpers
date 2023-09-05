import { ethers } from 'ethers';

import { ChainIdByName } from './chains';

export const providers = {
  [ChainIdByName.Sepolia]: new ethers.providers.JsonRpcBatchProvider(
    'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
  ),
};
