import { PublicClient } from '@wagmi/core';
import { Chain, createPublicClient, http } from 'viem';
import {
  arbitrum,
  avalanche,
  avalancheFuji,
  base,
  bsc,
  goerli,
  mainnet,
  metis,
  optimism,
  polygon,
  sepolia,
} from 'viem/chains';

function initPublicClient(chain: Chain) {
  return createPublicClient({
    batch: {
      multicall: true,
    },
    chain,
    transport: http(),
  }) as PublicClient;
}

export const clients: Record<number, PublicClient> = {
  [mainnet.id]: initPublicClient(mainnet),
  [polygon.id]: initPublicClient(polygon),
  [avalanche.id]: initPublicClient(avalanche),
  [bsc.id]: initPublicClient(bsc),
  [base.id]: initPublicClient(base),
  [arbitrum.id]: initPublicClient(arbitrum),
  [metis.id]: initPublicClient(metis),
  [optimism.id]: initPublicClient(optimism),
  // testnets
  [avalancheFuji.id]: initPublicClient(avalancheFuji),
  [goerli.id]: initPublicClient(goerli),
  [sepolia.id]: initPublicClient(sepolia),
};
