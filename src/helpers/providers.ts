import { ethers } from 'ethers';

import { ChainIdByName } from './chains';

// TODO: need added mainnets providers
export const providers = {
  [ChainIdByName.EthereumMainnet]: new ethers.providers.JsonRpcBatchProvider(
    'https://cloudflare-eth.com',
  ),
  [ChainIdByName.AvalancheFuji]: new ethers.providers.JsonRpcBatchProvider(
    'https://api.avax-test.network/ext/bc/C/rpc',
  ),
  [ChainIdByName.Goerli]: new ethers.providers.JsonRpcBatchProvider(
    'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  ),
  [ChainIdByName.Sepolia]: new ethers.providers.JsonRpcBatchProvider(
    'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
  ),
};
