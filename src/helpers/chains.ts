import { AddEthereumChainParameter } from '@web3-react/types';

import {
  ChainInformation,
  ETH,
  initChainInformationConfig,
  initialChains,
  MATIC,
} from './chainInfoHelpers';

export const BNB: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Binance Coin',
  symbol: 'BNB',
  decimals: 18,
};

const CHAINS: {
  [chainId: number]: ChainInformation;
} = {
  5: {
    urls: [`https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`],
    nativeCurrency: ETH,
    name: 'Goerli Testnet',
    blockExplorerUrls: ['https://goerli.etherscan.io/'],
  },
  11155111: {
    urls: [`https://ethereum-sepolia.blockpi.network/v1/rpc/public`],
    nativeCurrency: ETH,
    name: 'Sepolia Testnet',
    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
  },
  80001: {
    urls: [`https://rpc.ankr.com/polygon_mumbai`],
    nativeCurrency: MATIC,
    name: 'Mumbai Testnet',
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
  97: {
    urls: [`https://data-seed-prebsc-1-s1.bnbchain.org:8545`],
    nativeCurrency: BNB,
    name: 'BSC Testnet',
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
  },
};

export const internalChains = Object.assign(initialChains, CHAINS);

export const chainInfoHelper = initChainInformationConfig(CHAINS);
