import { Hex } from 'viem';

type CoreNetworkName = 'mainnet' | 'goerli' | 'sepolia';
type Config = {
    contractAddress: Hex;
    dataHelperContractAddress: Hex;
};
declare const govCoreConfig: Record<CoreNetworkName, Config & {
    votingPortals: Record<number, Hex>;
}>;
declare const payloadsControllerConfig: Record<CoreNetworkName, Record<number, Pick<Config, 'dataHelperContractAddress'> & {
    contractAddresses: Hex[];
    payloadAddress?: Hex;
}>>;
declare const payloadsControllerChainIds: Record<CoreNetworkName, number[]>;
declare const votingMachineChainIds: Record<CoreNetworkName, number[]>;
declare const appConfigInit: (coreNetwork: CoreNetworkName) => {
    govCoreChainId: number;
    govCoreConfig: Config & {
        votingPortals: Record<number, Hex>;
    };
    votingMachineConfig: Record<number, Config & {
        dataWarehouseAddress: Hex;
    }>;
    votingMachineChainIds: number[];
    payloadsControllerConfig: Record<number, Pick<Config, "dataHelperContractAddress"> & {
        contractAddresses: Hex[];
        payloadAddress?: `0x${string}` | undefined;
    }>;
    payloadsControllerChainIds: number[];
    additional: Record<string, `0x${string}`>;
    gelatoApiKeys: Record<string, string>;
};

export { CoreNetworkName, appConfigInit, govCoreConfig, payloadsControllerChainIds, payloadsControllerConfig, votingMachineChainIds };
