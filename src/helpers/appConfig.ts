// TODO: need integrate address book

import { chainInfoHelper } from './chains';
import { StaticJsonRpcBatchProvider } from './StaticJsonRpcBatchProvider';

export const goerliChainId = 5;
export const goerliOptimismChainId = 420;
export const avalancheFujiChainId = 43113;
export const sepoliaChainId = 11155111;
export const mumbaiChainId = 80001;
export const bnbTestChainId = 97;

type Config = {
  contractAddress: string;
  dataHelperContractAddress: string;
};

export const govCoreConfig: Config & { votingPortals: Record<number, string> } =
  {
    contractAddress: '0x84b3FE5eD74caC496BcB58d448A7c83c523F6E0E',
    dataHelperContractAddress: '0x74bb7b600fA33E2A1945F8493D17db3b129513D2',
    votingPortals: {
      [sepoliaChainId]: '0x5C77bF8505716904a1a73eB8c3909c0Da0DD49b3',
    },
  };

export const payloadsControllerConfig: Record<
  number,
  Pick<Config, 'dataHelperContractAddress'> & {
    contractAddresses: string[];
    payloadAddress: string;
  }
> = {
  [sepoliaChainId]: {
    dataHelperContractAddress: '0x5c2AD703961c59Adb4412d402b8D694Eee48a822',

    // for create payload
    contractAddresses: ['0x7Bb94b2a8d9fD3f37345Ec5A0b46c234164b4f90'],
    // TODO: (remove after release)
    payloadAddress: '0xf19de078dbac9db382caf8015cb208667ec581c0',
  },
};

const votingMachineConfig: Record<
  number,
  Config & { dataWarehouseAddress: string }
> = {
  [sepoliaChainId]: {
    contractAddress: '0xB379f8a3E62Ff807E827F853B36688d1d7aD692f',
    dataHelperContractAddress: '0x8b5661024Bc97c1Fd71B4eCafCA88c316c3D438B',
    dataWarehouseAddress: '0xdF6C1affD18Ecb318e4468d96b588bbbEac180E2',
  },
};

const gelatoApiKeys: Record<number, string> = {
  [goerliChainId]: process.env.NEXT_PUBLIC_RELAY_GELATO_API_KEY_GOERLI || '',
  [goerliOptimismChainId]:
    process.env.NEXT_PUBLIC_RELAY_GELATO_API_KEY_GOERLI_OPTIMISM || '',
  [mumbaiChainId]: process.env.NEXT_PUBLIC_RELAY_GELATO_API_KEY_MUMBAI || '',
};

export const appConfig = {
  providers: {
    // [goerliChainId]: chainInfoHelper.providerInstances[goerliChainId].instance,
    [sepoliaChainId]:
      chainInfoHelper.providerInstances[sepoliaChainId].instance,
    // [avalancheFujiChainId]:
    //   chainInfoHelper.providerInstances[avalancheFujiChainId].instance,
    // [mumbaiChainId]: chainInfoHelper.providerInstances[mumbaiChainId].instance,
    // [bnbTestChainId]:
    //   chainInfoHelper.providerInstances[bnbTestChainId].instance,
  } as Record<number, StaticJsonRpcBatchProvider>,
  govCoreChainId: sepoliaChainId,
  govCoreConfig: govCoreConfig,
  votingMachineChainIds: [
    // goerliChainId,
    sepoliaChainId,
    // avalancheFujiChainId,
    // mumbaiChainId,
    // bnbTestChainId,
  ],
  payloadsControllerChainIds: [
    // goerliChainId,
    sepoliaChainId,
    // avalancheFujiChainId,
    // mumbaiChainId,
    // bnbTestChainId,
  ],
  payloadsControllerConfig,
  votingMachineConfig,
  gelatoApiKeys,
  additional: {
    aaveAddress: '0x64033B2270fd9D6bbFc35736d2aC812942cE75fE',
    aAaveAddress: '0x7d9EB767eEc260d1bCe8C518276a894aE5535F04',
    stkAAVEAddress: '0xA4FDAbdE9eF3045F0dcF9221bab436B784B7e42D',

    // for delegation
    delegationHelper: '0x1633Bd6772020a797fB09a3b17D6AD9a95b98f01',
  },
};
