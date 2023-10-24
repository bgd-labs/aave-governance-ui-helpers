import { PublicClient } from '@wagmi/core';
import { CoreNetworkName } from './appConfig.js';
import 'viem';

declare const appConfigWithClients: (clients: Record<number, PublicClient>, coreNetwork: CoreNetworkName) => {
    govCoreChainId: number;
    govCoreConfig: {
        contractAddress: `0x${string}`;
        dataHelperContractAddress: `0x${string}`;
    } & {
        votingPortals: Record<number, `0x${string}`>;
    };
    votingMachineConfig: Record<number, {
        contractAddress: `0x${string}`;
        dataHelperContractAddress: `0x${string}`;
    } & {
        dataWarehouseAddress: `0x${string}`;
    }>;
    votingMachineChainIds: number[];
    payloadsControllerConfig: Record<number, Pick<{
        contractAddress: `0x${string}`;
        dataHelperContractAddress: `0x${string}`;
    }, "dataHelperContractAddress"> & {
        contractAddresses: `0x${string}`[];
        payloadAddress?: `0x${string}` | undefined;
    }>;
    payloadsControllerChainIds: number[];
    additional: Record<string, `0x${string}`>;
    gelatoApiKeys: Record<string, string>;
    clients: Record<number, PublicClient>;
};

export { appConfigWithClients };
