import {
  AaveSafetyModule,
  AaveV3Ethereum,
  GovernanceV3Arbitrum,
  GovernanceV3Avalanche,
  GovernanceV3Base,
  GovernanceV3Ethereum,
  GovernanceV3Metis,
  GovernanceV3Optimism,
  GovernanceV3Polygon,
} from '@bgd-labs/aave-address-book';
import { ethers } from 'ethers';

import { ChainIdByName } from './chains';

export type CoreNetworkName = 'mainnet' | 'goerli' | 'sepolia';

type Config = {
  contractAddress: string;
  dataHelperContractAddress: string;
};

export const govCoreConfig: Record<
  CoreNetworkName,
  Config & { votingPortals: Record<number, string> }
> = {
  mainnet: {
    contractAddress: GovernanceV3Ethereum.GOVERNANCE,
    dataHelperContractAddress: GovernanceV3Ethereum.GOV_DATA_HELPER,
    votingPortals: {
      [ChainIdByName.EthereumMainnet]:
        GovernanceV3Ethereum.VOTING_PORTAL_ETH_ETH,
      [ChainIdByName.Polygon]: GovernanceV3Ethereum.VOTING_PORTAL_ETH_POL,
      [ChainIdByName.Avalanche]: GovernanceV3Ethereum.VOTING_PORTAL_ETH_AVAX,
    },
  },
  // testnets
  goerli: {
    contractAddress: '0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F',
    dataHelperContractAddress: '0xB84D6c8b2cFC98191a1D6d00B38c1057252d876b',
    votingPortals: {
      [ChainIdByName.Goerli]: '0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF',
    },
  },
  sepolia: {
    contractAddress: '0xc4ABF658C3Dda84225cF8A07d7D5Bb6Aa41d9E59',
    dataHelperContractAddress: '0x863f9De2f82AB502612E8B7d4f4863c8535cb8cA',
    votingPortals: {
      [ChainIdByName.Sepolia]: '0x1079bAa48E56065d43b4344866B187a485cb0A92',
      [ChainIdByName.AvalancheFuji]:
        '0x4f47EdF2577995aBd7B875Eed75b3F28a20E696F',
    },
  },
};

export const payloadsControllerConfig: Record<
  CoreNetworkName,
  Record<
    number,
    Pick<Config, 'dataHelperContractAddress'> & {
      contractAddresses: string[];
      payloadAddress?: string;
    }
  >
> = {
  mainnet: {
    [ChainIdByName.EthereumMainnet]: {
      dataHelperContractAddress: GovernanceV3Ethereum.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Ethereum.PAYLOADS_CONTROLLER],
    },
    [ChainIdByName.Polygon]: {
      dataHelperContractAddress: GovernanceV3Polygon.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Polygon.PAYLOADS_CONTROLLER],
    },
    [ChainIdByName.Avalanche]: {
      dataHelperContractAddress: GovernanceV3Avalanche.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Avalanche.PAYLOADS_CONTROLLER],
    },
    [ChainIdByName.Base]: {
      dataHelperContractAddress: GovernanceV3Base.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Base.PAYLOADS_CONTROLLER],
    },
    [ChainIdByName.Arbitrum]: {
      dataHelperContractAddress: GovernanceV3Arbitrum.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Arbitrum.PAYLOADS_CONTROLLER],
    },
    [ChainIdByName.Metis]: {
      dataHelperContractAddress: GovernanceV3Metis.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Metis.PAYLOADS_CONTROLLER],
    },
    [ChainIdByName.Optimism]: {
      dataHelperContractAddress: GovernanceV3Optimism.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Optimism.PAYLOADS_CONTROLLER],
    },
  },
  // testnets
  goerli: {
    [ChainIdByName.Goerli]: {
      dataHelperContractAddress: '0xbd2db358f3C82F2883132A6584e22F38A979e768',
      contractAddresses: ['0x064361B3761CcDd17300146bf58a79d1E570382E'],
      payloadAddress: '0xf6b9c3fCF7f91817E7bF0efF792BA692c7bd372A', // only for test
    },
  },
  sepolia: {
    [ChainIdByName.Sepolia]: {
      dataHelperContractAddress: '0x6B9AF21B95FE20b5a878b43670c23124841ec31A',
      contractAddresses: ['0x7E314a46AA6dF79c51869967B9b8e9f8Bb20781d'],
      payloadAddress: '0xf19de078dbac9db382caf8015cb208667ec581c0', // only for test
    },
    [ChainIdByName.AvalancheFuji]: {
      dataHelperContractAddress: '0x6B9AF21B95FE20b5a878b43670c23124841ec31A',
      contractAddresses: ['0x1fad4eac642D8CAFb7fC5d38973D1C2764202da5'],
      payloadAddress: '0xdf9f39247c553485ac3bf974418947d9b2f969e5', // only for test
    },
  },
};

const votingMachineConfig: Record<
  CoreNetworkName,
  Record<number, Config & { dataWarehouseAddress: string }>
> = {
  mainnet: {
    [ChainIdByName.EthereumMainnet]: {
      contractAddress: GovernanceV3Ethereum.VOTING_MACHINE,
      dataHelperContractAddress: GovernanceV3Ethereum.VM_DATA_HELPER,
      dataWarehouseAddress: '', // TODO: wait for address in address book
    },
    [ChainIdByName.Polygon]: {
      contractAddress: GovernanceV3Polygon.VOTING_MACHINE,
      dataHelperContractAddress: GovernanceV3Polygon.VM_DATA_HELPER,
      dataWarehouseAddress: '', // TODO: wait for address in address book
    },
    [ChainIdByName.Avalanche]: {
      contractAddress: GovernanceV3Avalanche.VOTING_MACHINE,
      dataHelperContractAddress: GovernanceV3Avalanche.VM_DATA_HELPER,
      dataWarehouseAddress: '', // TODO: wait for address in address book
    },
  },
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
      contractAddress: '0xA1995F1d5A8A247c064a76F336E1C2ecD24Ef0D9',
      dataHelperContractAddress: '0x133210F3fe2deEB34e65deB6861ee3dF87393977',
      dataWarehouseAddress: '0xACd2b1bA0B85FaF0f45D4974Ba8ee538E157fBc6',
    },
    [ChainIdByName.AvalancheFuji]: {
      contractAddress: '0x767AA57554690D23D1E0594E8746271C97e1A1e4',
      dataHelperContractAddress: '0x133210F3fe2deEB34e65deB6861ee3dF87393977',
      dataWarehouseAddress: '0x2F4bc3128D0D52ef954552FfEC28BC523462dc02',
    },
  },
};

const govCoreChainId: Record<CoreNetworkName, number> = {
  mainnet: ChainIdByName.EthereumMainnet,
  // testnets
  goerli: ChainIdByName.Goerli,
  sepolia: ChainIdByName.Sepolia,
};

const aditionalsAddresses: Record<CoreNetworkName, Record<string, string>> = {
  mainnet: {
    aaveAddress: AaveV3Ethereum.ASSETS.AAVE.UNDERLYING,
    aAaveAddress: AaveV3Ethereum.ASSETS.AAVE.A_TOKEN,
    stkAAVEAddress: AaveSafetyModule.STK_AAVE,
    // for delegation
    delegationHelper: GovernanceV3Ethereum.META_DELEGATE_HELPER,
  },
  // testnets
  goerli: {
    aaveAddress: '0xb6D88BfC5b145a558b279cf7692e6F02064889d0',
    aAaveAddress: '0xD1ff82609FB63A0eee6FE7D2896d80d29491cCCd',
    stkAAVEAddress: '0x1406A9Ea2B0ec8FD4bCa4F876DAae2a70a9856Ec',
    delegationHelper: '0x1966133c190475E8385Dc1b4150B5f81c70DC578',
  },
  sepolia: {
    aaveAddress: '0xdaEcee477B931b209e8123401EA37582ACB3811d',
    aAaveAddress: '0x26aAB2aE39897338c2d91491C46c14a8c2a67919',
    stkAAVEAddress: '0x354032B31339853A3D682613749F183328d07275',
    delegationHelper: '0x7cc468E937ec7B06A2816B33AC159BC1273dF4A3',
  },
};

export const payloadsControllerChainIds: Record<CoreNetworkName, number[]> = {
  mainnet: [
    ChainIdByName.EthereumMainnet,
    ChainIdByName.Polygon,
    ChainIdByName.Avalanche,
    ChainIdByName.Base,
    ChainIdByName.Arbitrum,
    ChainIdByName.Metis,
    ChainIdByName.Optimism,
  ],
  goerli: [ChainIdByName.Goerli],
  sepolia: [ChainIdByName.Sepolia, ChainIdByName.AvalancheFuji],
};

export const votingMachineChainIds: Record<CoreNetworkName, number[]> = {
  mainnet: [
    ChainIdByName.EthereumMainnet,
    ChainIdByName.Polygon,
    ChainIdByName.Avalanche,
  ],
  goerli: [ChainIdByName.Goerli],
  sepolia: [ChainIdByName.Sepolia, ChainIdByName.AvalancheFuji],
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
