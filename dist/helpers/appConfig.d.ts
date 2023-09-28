import { ethers } from 'ethers';
export declare type CoreNetworkName = 'mainnet' | 'goerli' | 'sepolia';
declare type Config = {
    contractAddress: string;
    dataHelperContractAddress: string;
};
export declare const govCoreConfig: Record<CoreNetworkName, Config & {
    votingPortals: Record<number, string>;
}>;
export declare const payloadsControllerConfig: Record<CoreNetworkName, Record<number, Pick<Config, 'dataHelperContractAddress'> & {
    contractAddresses: string[];
    payloadAddress?: string;
}>>;
export declare const payloadsControllerChainIds: Record<CoreNetworkName, number[]>;
export declare const votingMachineChainIds: Record<CoreNetworkName, number[]>;
export declare const appConfigInit: (providers: Record<number, ethers.providers.JsonRpcBatchProvider>, coreNetwork: CoreNetworkName) => {
    providers: Record<number, ethers.providers.JsonRpcBatchProvider>;
    govCoreChainId: number;
    govCoreConfig: Config & {
        votingPortals: Record<number, string>;
    };
    votingMachineConfig: Record<number, Config & {
        dataWarehouseAddress: string;
    }>;
    votingMachineChainIds: number[];
    payloadsControllerConfig: Record<number, Pick<Config, "dataHelperContractAddress"> & {
        contractAddresses: string[];
        payloadAddress?: string | undefined;
    }>;
    payloadsControllerChainIds: number[];
    additional: Record<string, string>;
    gelatoApiKeys: Record<string, string>;
};
export {};
