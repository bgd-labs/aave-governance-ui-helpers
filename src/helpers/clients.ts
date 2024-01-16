// only for internal usage

import { Chain, createPublicClient, fallback, http } from 'viem';
import {
  arbitrum,
  avalanche,
  avalancheFuji,
  base,
  bsc,
  bscTestnet,
  gnosis,
  goerli,
  mainnet,
  metis,
  optimism,
  polygon,
  polygonMumbai,
  sepolia,
} from 'viem/chains';

import { coreName } from '../lowdb/helpers';
import { appConfigInit } from './appConfig';
import { ClientsRecord } from './types';

// chains information (RPC (urls), nativeCurrency, name, blockExplorerUrls)
export const initialRpcUrls: Record<number, string[]> = {
  [mainnet.id]: [
    'https://blissful-purple-sky.quiknode.pro',
    'https://rpc.ankr.com/eth',
    'https://eth.nodeconnect.org',
  ],
  [polygon.id]: [
    'https://polygon.blockpi.network/v1/rpc/public',
    'https://polygon.llamarpc.com',
    'https://polygon-bor.publicnode.com',
    'https://endpoints.omniatech.io/v1/matic/mainnet/public',
  ],
  [avalanche.id]: [
    'https://api.avax.network/ext/bc/C/rpc',
    'https://avalanche.drpc.org',
    'https://avax.meowrpc.com',
    'https://avalanche.blockpi.network/v1/rpc/public',
  ],
  [bsc.id]: ['https://binance.llamarpc.com', 'https://bsc.meowrpc.com'],
  [base.id]: [
    'https://base.blockpi.network/v1/rpc/public',
    'https://base.llamarpc.com',
    'https://base-mainnet.public.blastapi.io',
    'https://base.meowrpc.com',
  ],
  [arbitrum.id]: [
    'https://arbitrum.llamarpc.com',
    'https://arb-mainnet-public.unifra.io',
    'https://endpoints.omniatech.io/v1/arbitrum/one/public',
  ],
  [metis.id]: [
    'https://metis-mainnet.public.blastapi.io',
    'https://metis.api.onfinality.io/public',
  ],
  [optimism.id]: [
    'https://optimism.blockpi.network/v1/rpc/public',
    'https://optimism.llamarpc.com',
    'https://optimism.publicnode.com',
  ],
  [gnosis.id]: [
    'https://gnosis.blockpi.network/v1/rpc/public',
    'https://gnosis-mainnet.public.blastapi.io',
  ],
  // testnets
  [goerli.id]: [
    'https://ethereum-goerli.publicnode.com',
    'https://goerli.blockpi.network/v1/rpc/public',
    'https://eth-goerli.public.blastapi.io',
  ],
  [sepolia.id]: [
    'https://endpoints.omniatech.io/v1/eth/sepolia/public',
    'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
    'https://ethereum-sepolia.publicnode.com',
  ],
  [polygonMumbai.id]: ['https://rpc.ankr.com/polygon_mumbai'],
  [avalancheFuji.id]: [
    'https://api.avax-test.network/ext/bc/C/rpc',
    'https://avalanche-fuji-c-chain.publicnode.com',
    'https://rpc.ankr.com/avalanche_fuji',
  ],
  [bscTestnet.id]: ['https://data-seed-prebsc-1-s1.bnbchain.org:8545'],
};

export const appConfig = appConfigInit(coreName);
const appUsedNetworks: number[] = [
  ...appConfig.votingMachineChainIds,
  ...appConfig.payloadsControllerChainIds,
].filter((value, index, self) => self.indexOf(value) === index);

function setChain(chain: Chain, url?: string) {
  return {
    ...chain,
    rpcUrls: {
      ...chain.rpcUrls,
      default: {
        ...chain.rpcUrls.default,
        http: [url || initialRpcUrls[chain.id][0], ...initialRpcUrls[chain.id]],
      },
    },
  };
}

const CHAINS: Record<number, Chain> = {
  [mainnet.id]: setChain(mainnet),
  [polygon.id]: setChain(polygon),
  [avalanche.id]: setChain(avalanche),
  [bsc.id]: setChain(bsc),
  [base.id]: setChain(base),
  [arbitrum.id]: setChain(arbitrum),
  [metis.id]: setChain(metis),
  [optimism.id]: setChain(optimism),
  [gnosis.id]: setChain(gnosis),
  // testnets
  [goerli.id]: setChain(goerli),
  [sepolia.id]: setChain(sepolia),
  [polygonMumbai.id]: setChain(polygonMumbai),
  [avalancheFuji.id]: setChain(avalancheFuji),
  [bscTestnet.id]: setChain(bscTestnet),
};
export const initialClients: ClientsRecord = {};

const fallBackConfig = {
  rank: false,
  retryDelay: 100,
  retryCount: 5,
};
appUsedNetworks.forEach((chain) => {
  initialClients[chain] = createPublicClient({
    batch: {
      multicall: true,
    },
    chain: CHAINS[chain],
    transport: fallback(
      initialRpcUrls[chain].map((url) => http(url)),
      fallBackConfig,
    ),
  });
});

initialClients[mainnet.id] = createPublicClient({
  batch: {
    multicall: true,
  },
  chain: CHAINS[mainnet.id],
  transport: fallback(
    initialRpcUrls[mainnet.id].map((url) => http(url)),
    fallBackConfig,
  ),
});
