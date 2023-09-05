import type { AddEthereumChainParameter } from '@web3-react/types';
import { ethers } from 'ethers';

export const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
};

export const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
};

export const AVAX: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Avax',
  symbol: 'AVAX',
  decimals: 18,
};

interface BasicChainInformation {
  urls: string[];
  name: string;
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
}

export type ChainInformation = BasicChainInformation & ExtendedChainInformation;

export const initialChains: {
  [chainId: number]: ChainInformation;
} = {
  1: {
    urls: ['https://cloudflare-eth.com'],
    nativeCurrency: ETH,
    name: 'Ethereum',
    blockExplorerUrls: ['https://etherscan.io'],
  },
  137: {
    urls: ['https://polygon.llamarpc.com'],
    nativeCurrency: MATIC,
    name: 'Polygon',
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  43114: {
    urls: ['https://rpc.ankr.com/avalanche'],
    nativeCurrency: AVAX,
    name: 'Avalanche',
    blockExplorerUrls: ['https://snowtrace.io'],
  },

  // testnet chains
  5: {
    urls: ['https://ethereum-goerli.publicnode.com'],
    nativeCurrency: ETH,
    name: 'Goerli testnet',
    blockExplorerUrls: ['https://goerli.etherscan.io'],
  },
  43113: {
    urls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    nativeCurrency: AVAX,
    name: 'Avalanche fuji',
    blockExplorerUrls: ['https://testnet.snowtrace.io'],
  },
  420: {
    urls: ['https://goerli.optimism.io'],
    nativeCurrency: ETH,
    name: 'Optimism goerli',
    blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
  },
  11155111: {
    urls: ['https://ethereum-sepolia.blockpi.network/v1/rpc/public'],
    nativeCurrency: ETH,
    name: 'Sepolia Testnet',
    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
  },
};

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation,
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation)?.nativeCurrency;
}

export const initChainInformationConfig = (chains?: {
  [chainId: number]: BasicChainInformation | ExtendedChainInformation;
}) => {
  const CHAINS = Object.assign(initialChains, chains || {});

  // init urls from chains config
  const urls = Object.keys(CHAINS).reduce<{
    [chainId: number]: string[];
  }>((accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls;

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs;
    }

    return accumulator;
  }, {});

  // init provider instances from chain config
  const initalizedProviders: Record<
    number,
    ethers.providers.JsonRpcBatchProvider
  > = {};

  const providerInstances = Object.keys(CHAINS).reduce<{
    [chainId: number]: {
      instance: ethers.providers.JsonRpcBatchProvider;
    };
  }>((accumulator, chainId) => {
    const numberChainId = Number(chainId);
    const providerInstance = {
      get instance() {
        if (initalizedProviders[numberChainId]) {
          return initalizedProviders[numberChainId];
        } else {
          // TODO: add fallback provider to utilize all the urls
          const provider = new ethers.providers.JsonRpcBatchProvider(
            urls[numberChainId][0],
          );
          initalizedProviders[numberChainId] = provider;
          return provider;
        }
      },
    } as {
      instance: ethers.providers.JsonRpcBatchProvider;
    };

    accumulator[numberChainId] = providerInstance;
    return accumulator;
  }, {});

  function getChainParameters(chainId: number): AddEthereumChainParameter {
    const chainInformation = CHAINS[chainId];
    if (isExtendedChainInformation(chainInformation)) {
      return {
        chainId,
        chainName: chainInformation.name,
        nativeCurrency: chainInformation.nativeCurrency,
        rpcUrls: chainInformation.urls,
        blockExplorerUrls: chainInformation.blockExplorerUrls,
      };
    } else {
      // this case can only ever occure when a wallet is connected with a unknown chainId which will not allow interaction
      return {
        chainId,
        chainName: `unknown network: ${chainId}`,
        nativeCurrency: initialChains[1].nativeCurrency,
        rpcUrls: initialChains[1].urls,
        blockExplorerUrls: initialChains[1].blockExplorerUrls,
      };
    }
  }

  return {
    urls,
    providerInstances,
    getChainParameters,
  };
};
