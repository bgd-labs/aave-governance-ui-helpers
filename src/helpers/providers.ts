import { providers as ethProvider } from 'ethers';

import { ChainIdByName } from './chains';

export const providers = {
  [ChainIdByName.EthereumMainnet]: new ethProvider.JsonRpcProvider(
    'https://cloudflare-eth.com',
  ),
  [ChainIdByName.Polygon]: new ethProvider.JsonRpcProvider(
    'https://polygon.llamarpc.com',
  ),
  [ChainIdByName.Avalanche]: new ethProvider.JsonRpcProvider(
    'https://avalanche.drpc.org',
  ),
  [ChainIdByName.Binance]: new ethProvider.JsonRpcProvider(
    'https://binance.llamarpc.com',
  ),
  [ChainIdByName.Base]: new ethProvider.JsonRpcProvider(
    'https://base-mainnet.public.blastapi.io',
  ),
  [ChainIdByName.Arbitrum]: new ethProvider.JsonRpcProvider(
    'https://arbitrum.llamarpc.com',
  ),
  [ChainIdByName.Metis]: new ethProvider.JsonRpcProvider(
    'https://metis-mainnet.public.blastapi.io',
  ),
  [ChainIdByName.Optimism]: new ethProvider.JsonRpcProvider(
    'https://optimism.llamarpc.com',
  ),
  // testnets
  [ChainIdByName.AvalancheFuji]: new ethProvider.JsonRpcProvider(
    'https://avalanche-fuji.blockpi.network/v1/rpc/public',
  ),
  [ChainIdByName.Goerli]: new ethProvider.JsonRpcProvider(
    'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  ),
  [ChainIdByName.Sepolia]: new ethProvider.JsonRpcProvider(
    'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
  ),
};
