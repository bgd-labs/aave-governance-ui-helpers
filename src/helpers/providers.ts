import { ethers } from 'ethers';

import { ChainIdByName } from './chains';

export const providers = {
  [ChainIdByName.EthereumMainnet]: new ethers.providers.JsonRpcBatchProvider(
    'https://cloudflare-eth.com',
  ),
  [ChainIdByName.Polygon]: new ethers.providers.JsonRpcBatchProvider(
    'https://polygon.llamarpc.com',
  ),
  [ChainIdByName.Avalanche]: new ethers.providers.JsonRpcBatchProvider(
    'https://avalanche.drpc.org',
  ),
  [ChainIdByName.Binance]: new ethers.providers.JsonRpcBatchProvider(
    'https://binance.llamarpc.com',
  ),
  [ChainIdByName.Base]: new ethers.providers.JsonRpcBatchProvider(
    'https://base-mainnet.public.blastapi.io',
  ),
  [ChainIdByName.Arbitrum]: new ethers.providers.JsonRpcBatchProvider(
    'https://arbitrum.llamarpc.com',
  ),
  [ChainIdByName.Metis]: new ethers.providers.JsonRpcBatchProvider(
    'https://metis-mainnet.public.blastapi.io',
  ),
  [ChainIdByName.Optimism]: new ethers.providers.JsonRpcBatchProvider(
    'https://optimism.llamarpc.com',
  ),
  // testnets
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
