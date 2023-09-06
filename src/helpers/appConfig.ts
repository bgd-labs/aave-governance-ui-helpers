// TODO: need integrate address book

import { ethers } from 'ethers';

import { ChainIdByName } from './chains';

export type CoreNetworkName = 'goerli' | 'sepolia'; // TODO: need add mainnet

type Config = {
  contractAddress: string;
  dataHelperContractAddress: string;
};

export const govCoreConfig: Record<
  CoreNetworkName,
  Config & { votingPortals: Record<number, string> }
> = {
  // testnets
  goerli: {
    contractAddress: '0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F',
    dataHelperContractAddress: '0x160e2d1456B815d6a3d281218538dd6E2e3C841f',
    votingPortals: {
      [ChainIdByName.Goerli]: '0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF',
    },
  },
  sepolia: {
    contractAddress: '0x84b3FE5eD74caC496BcB58d448A7c83c523F6E0E',
    dataHelperContractAddress: '0x74bb7b600fA33E2A1945F8493D17db3b129513D2',
    votingPortals: {
      [ChainIdByName.Sepolia]: '0x5C77bF8505716904a1a73eB8c3909c0Da0DD49b3',
    },
  },
};

export const payloadsControllerConfig: Record<
  CoreNetworkName,
  Record<
    number,
    Pick<Config, 'dataHelperContractAddress'> & {
      contractAddresses: string[];
      payloadAddress: string;
    }
  >
> = {
  // testnets
  goerli: {
    [ChainIdByName.Goerli]: {
      dataHelperContractAddress: '0xbd2db358f3C82F2883132A6584e22F38A979e768',

      // for create payload
      contractAddresses: ['0x064361B3761CcDd17300146bf58a79d1E570382E'],
      // TODO: (remove after release)
      payloadAddress: '0xf6b9c3fCF7f91817E7bF0efF792BA692c7bd372A',
    },
  },
  sepolia: {
    [ChainIdByName.Sepolia]: {
      dataHelperContractAddress: '0x5c2AD703961c59Adb4412d402b8D694Eee48a822',

      // for create payload
      contractAddresses: ['0x7Bb94b2a8d9fD3f37345Ec5A0b46c234164b4f90'],
      // TODO: (remove after release)
      payloadAddress: '0xf19de078dbac9db382caf8015cb208667ec581c0',
    },
  },
};

const votingMachineConfig: Record<
  CoreNetworkName,
  Record<number, Config & { dataWarehouseAddress: string }>
> = {
  // testnets
  goerli: {
    [ChainIdByName.Goerli]: {
      contractAddress: '0xE8AD5ab6295c16D04257BC6Cd6D447ff4018FF89',
      dataHelperContractAddress: '0xe10617A1ea760E174E82fBeb38a540d8ACe566f5',
      dataWarehouseAddress: '0xC946cc6bb934bAf2A539BaB62c647aff09D2e2D8',
    },
  },
  sepolia: {
    [ChainIdByName.Sepolia]: {
      contractAddress: '0xB379f8a3E62Ff807E827F853B36688d1d7aD692f',
      dataHelperContractAddress: '0x8b5661024Bc97c1Fd71B4eCafCA88c316c3D438B',
      dataWarehouseAddress: '0xdF6C1affD18Ecb318e4468d96b588bbbEac180E2',
    },
  },
};

const govCoreChainId: Record<CoreNetworkName, number> = {
  // testnets
  goerli: ChainIdByName.Goerli,
  sepolia: ChainIdByName.Sepolia,
};

const aditionalsAddresses: Record<CoreNetworkName, Record<string, string>> = {
  // testnets
  goerli: {
    aaveAddress: '0xb6D88BfC5b145a558b279cf7692e6F02064889d0',
    aAaveAddress: '0xD1ff82609FB63A0eee6FE7D2896d80d29491cCCd',
    stkAAVEAddress: '0x1406A9Ea2B0ec8FD4bCa4F876DAae2a70a9856Ec',

    // for delegation
    delegationHelper: '0x1966133c190475E8385Dc1b4150B5f81c70DC578',
  },
  sepolia: {
    aaveAddress: '0x64033B2270fd9D6bbFc35736d2aC812942cE75fE',
    aAaveAddress: '0x7d9EB767eEc260d1bCe8C518276a894aE5535F04',
    stkAAVEAddress: '0xA4FDAbdE9eF3045F0dcF9221bab436B784B7e42D',

    // for delegation
    delegationHelper: '0x1633Bd6772020a797fB09a3b17D6AD9a95b98f01',
  },
};

const votingMachineChainIds: Record<CoreNetworkName, number[]> = {
  goerli: [ChainIdByName.Goerli],
  sepolia: [ChainIdByName.Sepolia],
};

const payloadsControllerChainIds: Record<CoreNetworkName, number[]> = {
  goerli: [ChainIdByName.Goerli],
  sepolia: [ChainIdByName.Sepolia],
};

const gelatoApiKeys: Record<string, string> = {
  testnet: 'qGvvlJMoyDKyuMxqJjDwFslpgiBKZCXNXpnSjIxsICY_',
  mainnet: '', // TODO: need add
};

export const appConfigInit = (
  providers: Record<number, ethers.providers.JsonRpcBatchProvider>,
  coreNetwork: CoreNetworkName,
) => {
  return {
    providers,
    govCoreChainId: govCoreChainId[coreNetwork],
    govCoreConfig: govCoreConfig[coreNetwork],
    votingMachineConfig: votingMachineConfig[coreNetwork],
    votingMachineChainIds: votingMachineChainIds[coreNetwork],
    payloadsControllerConfig: payloadsControllerConfig[coreNetwork],
    payloadsControllerChainIds: payloadsControllerChainIds[coreNetwork],

    additional: aditionalsAddresses[coreNetwork],
    gelatoApiKeys,
  };
};
