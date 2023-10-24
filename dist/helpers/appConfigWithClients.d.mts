import * as viem__types_actions_public_verifyTypedData from 'viem/_types/actions/public/verifyTypedData';
import * as viem__types_actions_public_verifyMessage from 'viem/_types/actions/public/verifyMessage';
import * as viem__types_actions_wallet_sendRawTransaction from 'viem/_types/actions/wallet/sendRawTransaction';
import * as viem__types_actions_public_getProof from 'viem/_types/actions/public/getProof';
import * as viem__types_types_filter from 'viem/_types/types/filter';
import * as viem__types_actions_ens_getEnsText from 'viem/_types/actions/ens/getEnsText';
import * as viem__types_actions_ens_getEnsAvatar from 'viem/_types/actions/ens/getEnsAvatar';
import * as viem__types_actions_public_getContractEvents from 'viem/_types/actions/public/getContractEvents';
import * as abitype from 'abitype';
import * as viem__types_types_contract from 'viem/_types/types/contract';
import * as viem from 'viem';
import { PublicClient } from 'viem';
import { CoreNetworkName } from './appConfig.mjs';

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
    clients: Record<number, {
        account: undefined;
        batch?: {
            multicall?: boolean | {
                batchSize?: number | undefined;
                wait?: number | undefined;
            } | undefined;
        } | undefined;
        cacheTime: number;
        chain: viem.Chain | undefined;
        key: string;
        name: string;
        pollingInterval: number;
        request: viem.EIP1193RequestFn<viem.PublicRpcSchema>;
        transport: viem.TransportConfig<string, viem.EIP1193RequestFn> & Record<string, any>;
        type: string;
        uid: string;
        call: (parameters: viem.CallParameters<viem.Chain | undefined>) => Promise<viem.CallReturnType>;
        createBlockFilter: () => Promise<{
            id: `0x${string}`;
            request: viem.EIP1193RequestFn<readonly [{
                Method: "eth_getFilterChanges";
                Parameters: [filterId: `0x${string}`];
                ReturnType: `0x${string}`[] | viem.RpcLog[];
            }, {
                Method: "eth_getFilterLogs";
                Parameters: [filterId: `0x${string}`];
                ReturnType: viem.RpcLog[];
            }, {
                Method: "eth_uninstallFilter";
                Parameters: [filterId: `0x${string}`];
                ReturnType: boolean;
            }]>;
            type: "block";
        }>;
        createContractEventFilter: <const TAbi extends viem.Abi | readonly unknown[], TEventName extends string | undefined, TArgs extends viem__types_types_contract.MaybeExtractEventArgsFromAbi<TAbi, TEventName> | undefined, TStrict extends boolean | undefined = undefined, TFromBlock extends bigint | viem.BlockTag | undefined = undefined, TToBlock extends bigint | viem.BlockTag | undefined = undefined>(args: viem.CreateContractEventFilterParameters<TAbi, TEventName, TArgs, TStrict, TFromBlock, TToBlock>) => Promise<viem.CreateContractEventFilterReturnType<TAbi, TEventName, TArgs, TStrict, TFromBlock, TToBlock>>;
        createEventFilter: <const TAbiEvent extends abitype.AbiEvent | undefined = undefined, const TAbiEvents extends readonly unknown[] | readonly abitype.AbiEvent[] | undefined = TAbiEvent extends abitype.AbiEvent ? [TAbiEvent] : undefined, TStrict_1 extends boolean | undefined = undefined, TFromBlock_1 extends bigint | viem.BlockTag | undefined = undefined, TToBlock_1 extends bigint | viem.BlockTag | undefined = undefined, _EventName extends string | undefined = viem__types_types_contract.MaybeAbiEventName<TAbiEvent>, _Args extends viem__types_types_contract.MaybeExtractEventArgsFromAbi<TAbiEvents, _EventName> | undefined = undefined>(args?: viem.CreateEventFilterParameters<TAbiEvent, TAbiEvents, TStrict_1, TFromBlock_1, TToBlock_1, _EventName, _Args> | undefined) => Promise<viem.Filter<"event", TAbiEvents, _EventName, _Args, TStrict_1, TFromBlock_1, TToBlock_1> extends infer T ? { [K in keyof T]: viem.Filter<"event", TAbiEvents, _EventName, _Args, TStrict_1, TFromBlock_1, TToBlock_1>[K]; } : never>;
        createPendingTransactionFilter: () => Promise<{
            id: `0x${string}`;
            request: viem.EIP1193RequestFn<readonly [{
                Method: "eth_getFilterChanges";
                Parameters: [filterId: `0x${string}`];
                ReturnType: `0x${string}`[] | viem.RpcLog[];
            }, {
                Method: "eth_getFilterLogs";
                Parameters: [filterId: `0x${string}`];
                ReturnType: viem.RpcLog[];
            }, {
                Method: "eth_uninstallFilter";
                Parameters: [filterId: `0x${string}`];
                ReturnType: boolean;
            }]>;
            type: "transaction";
        }>;
        estimateContractGas: <TChain extends viem.Chain | undefined, const TAbi_1 extends viem.Abi | readonly unknown[], TFunctionName extends string>(args: viem.EstimateContractGasParameters<TAbi_1, TFunctionName, TChain, viem.Account | undefined>) => Promise<bigint>;
        estimateGas: (args: viem.EstimateGasParameters<viem.Chain | undefined, viem.Account | undefined>) => Promise<bigint>;
        getBalance: (args: viem.GetBalanceParameters) => Promise<bigint>;
        getBlock: <TIncludeTransactions extends boolean = false, TBlockTag extends viem.BlockTag = "latest">(args?: viem.GetBlockParameters<TIncludeTransactions, TBlockTag> | undefined) => Promise<viem.GetBlockReturnType<viem.Chain | undefined, TIncludeTransactions, TBlockTag>>;
        getBlockNumber: (args?: viem.GetBlockNumberParameters | undefined) => Promise<bigint>;
        getBlockTransactionCount: (args?: viem.GetBlockTransactionCountParameters | undefined) => Promise<number>;
        getBytecode: (args: viem.GetBytecodeParameters) => Promise<viem.GetBytecodeReturnType>;
        getChainId: () => Promise<number>;
        getContractEvents: <const TAbi_2 extends viem.Abi | readonly unknown[], TEventName_1 extends string | undefined = undefined, TStrict_2 extends boolean | undefined = undefined, TFromBlock_2 extends bigint | viem.BlockTag | undefined = undefined, TToBlock_2 extends bigint | viem.BlockTag | undefined = undefined>(args: viem__types_actions_public_getContractEvents.GetContractEventsParameters<TAbi_2, TEventName_1, TStrict_2, TFromBlock_2, TToBlock_2>) => Promise<viem__types_actions_public_getContractEvents.GetContractEventsReturnType<TAbi_2, TEventName_1, TStrict_2, TFromBlock_2, TToBlock_2>>;
        getEnsAddress: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: viem.BlockTag | undefined;
            coinType?: number | undefined;
            name: string;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<viem.GetEnsAddressReturnType>;
        getEnsAvatar: (args: {
            name: string;
            blockNumber?: bigint | undefined;
            blockTag?: viem.BlockTag | undefined;
            universalResolverAddress?: `0x${string}` | undefined;
            gatewayUrls?: viem.AssetGatewayUrls | undefined;
        }) => Promise<viem__types_actions_ens_getEnsAvatar.GetEnsAvatarReturnType>;
        getEnsName: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: viem.BlockTag | undefined;
            address: `0x${string}`;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<viem.GetEnsNameReturnType>;
        getEnsResolver: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: viem.BlockTag | undefined;
            name: string;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<`0x${string}`>;
        getEnsText: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: viem.BlockTag | undefined;
            name: string;
            key: string;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<viem__types_actions_ens_getEnsText.GetEnsTextReturnType>;
        getFeeHistory: (args: viem.GetFeeHistoryParameters) => Promise<viem.GetFeeHistoryReturnType>;
        estimateFeesPerGas: <TChainOverride extends viem.Chain | undefined, TType extends viem.FeeValuesType = "eip1559">(args?: viem.EstimateFeesPerGasParameters<viem.Chain | undefined, TChainOverride, TType> | undefined) => Promise<viem.EstimateFeesPerGasReturnType>;
        getFilterChanges: <TFilterType extends viem__types_types_filter.FilterType, const TAbi_3 extends viem.Abi | readonly unknown[] | undefined, TEventName_2 extends string | undefined, TStrict_3 extends boolean | undefined = undefined, TFromBlock_3 extends bigint | viem.BlockTag | undefined = undefined, TToBlock_3 extends bigint | viem.BlockTag | undefined = undefined>(args: viem.GetFilterChangesParameters<TFilterType, TAbi_3, TEventName_2, TStrict_3, TFromBlock_3, TToBlock_3>) => Promise<viem.GetFilterChangesReturnType<TFilterType, TAbi_3, TEventName_2, TStrict_3, TFromBlock_3, TToBlock_3>>;
        getFilterLogs: <const TAbi_4 extends viem.Abi | readonly unknown[] | undefined, TEventName_3 extends string | undefined, TStrict_4 extends boolean | undefined = undefined, TFromBlock_4 extends bigint | viem.BlockTag | undefined = undefined, TToBlock_4 extends bigint | viem.BlockTag | undefined = undefined>(args: viem.GetFilterLogsParameters<TAbi_4, TEventName_3, TStrict_4, TFromBlock_4, TToBlock_4>) => Promise<viem.GetFilterLogsReturnType<TAbi_4, TEventName_3, TStrict_4, TFromBlock_4, TToBlock_4>>;
        getGasPrice: () => Promise<bigint>;
        getLogs: <const TAbiEvent_1 extends abitype.AbiEvent | undefined = undefined, const TAbiEvents_1 extends readonly unknown[] | readonly abitype.AbiEvent[] | undefined = TAbiEvent_1 extends abitype.AbiEvent ? [TAbiEvent_1] : undefined, TStrict_5 extends boolean | undefined = undefined, TFromBlock_5 extends bigint | viem.BlockTag | undefined = undefined, TToBlock_5 extends bigint | viem.BlockTag | undefined = undefined>(args?: viem.GetLogsParameters<TAbiEvent_1, TAbiEvents_1, TStrict_5, TFromBlock_5, TToBlock_5> | undefined) => Promise<viem.GetLogsReturnType<TAbiEvent_1, TAbiEvents_1, TStrict_5, TFromBlock_5, TToBlock_5>>;
        getProof: (args: viem__types_actions_public_getProof.GetProofParameters) => Promise<viem__types_actions_public_getProof.GetProofReturnType>;
        estimateMaxPriorityFeePerGas: <TChainOverride_1 extends viem.Chain | undefined>(args?: {
            chain: TChainOverride_1 | null;
        } | undefined) => Promise<bigint>;
        getStorageAt: (args: viem.GetStorageAtParameters) => Promise<viem.GetStorageAtReturnType>;
        getTransaction: <TBlockTag_1 extends viem.BlockTag = "latest">(args: viem.GetTransactionParameters<TBlockTag_1>) => Promise<viem.GetTransactionReturnType<viem.Chain | undefined, TBlockTag_1>>;
        getTransactionConfirmations: (args: viem.GetTransactionConfirmationsParameters<viem.Chain | undefined>) => Promise<bigint>;
        getTransactionCount: (args: viem.GetTransactionCountParameters) => Promise<number>;
        getTransactionReceipt: (args: viem.GetTransactionReceiptParameters) => Promise<viem.TransactionReceipt>;
        multicall: <TContracts extends viem.ContractFunctionConfig[], TAllowFailure extends boolean = true>(args: viem.MulticallParameters<TContracts, TAllowFailure>) => Promise<viem.MulticallReturnType<TContracts, TAllowFailure>>;
        prepareTransactionRequest: <TChainOverride_2 extends viem.Chain | undefined>(args: viem.PrepareTransactionRequestParameters<viem.Chain | undefined, viem.Account | undefined, TChainOverride_2>) => Promise<viem.PrepareTransactionRequestReturnType>;
        readContract: <const TAbi_5 extends viem.Abi | readonly unknown[], TFunctionName_1 extends string>(args: viem.ReadContractParameters<TAbi_5, TFunctionName_1>) => Promise<viem.ReadContractReturnType<TAbi_5, TFunctionName_1>>;
        sendRawTransaction: (args: viem__types_actions_wallet_sendRawTransaction.SendRawTransactionParameters) => Promise<`0x${string}`>;
        simulateContract: <const TAbi_6 extends viem.Abi | readonly unknown[], TFunctionName_2 extends string, TChainOverride_3 extends viem.Chain | undefined>(args: viem.SimulateContractParameters<TAbi_6, TFunctionName_2, viem.Chain | undefined, TChainOverride_3>) => Promise<viem.SimulateContractReturnType<TAbi_6, TFunctionName_2, viem.Chain | undefined, TChainOverride_3>>;
        verifyMessage: (args: viem__types_actions_public_verifyMessage.VerifyMessageParameters) => Promise<boolean>;
        verifyTypedData: (args: viem__types_actions_public_verifyTypedData.VerifyTypedDataParameters) => Promise<boolean>;
        uninstallFilter: (args: viem.UninstallFilterParameters) => Promise<boolean>;
        waitForTransactionReceipt: (args: viem.WaitForTransactionReceiptParameters<viem.Chain | undefined>) => Promise<viem.TransactionReceipt>;
        watchBlockNumber: (args: viem.WatchBlockNumberParameters) => viem.WatchBlockNumberReturnType;
        watchBlocks: <TIncludeTransactions_1 extends boolean = false, TBlockTag_2 extends viem.BlockTag = "latest">(args: viem.WatchBlocksParameters<viem.Transport, viem.Chain | undefined, TIncludeTransactions_1, TBlockTag_2>) => viem.WatchBlocksReturnType;
        watchContractEvent: <const TAbi_7 extends viem.Abi | readonly unknown[], TEventName_4 extends string, TStrict_6 extends boolean | undefined = undefined>(args: viem.WatchContractEventParameters<TAbi_7, TEventName_4, TStrict_6>) => viem.WatchContractEventReturnType;
        watchEvent: <const TAbiEvent_2 extends abitype.AbiEvent | undefined = undefined, const TAbiEvents_2 extends readonly unknown[] | readonly abitype.AbiEvent[] | undefined = TAbiEvent_2 extends abitype.AbiEvent ? [TAbiEvent_2] : undefined, TStrict_7 extends boolean | undefined = undefined>(args: viem.WatchEventParameters<TAbiEvent_2, TAbiEvents_2, TStrict_7>) => viem.WatchEventReturnType;
        watchPendingTransactions: (args: viem.WatchPendingTransactionsParameters<viem.Transport>) => viem.WatchPendingTransactionsReturnType;
        extend: <const client extends {
            [x: string]: unknown;
            account?: undefined;
            batch?: undefined;
            cacheTime?: undefined;
            chain?: undefined;
            key?: undefined;
            name?: undefined;
            pollingInterval?: undefined;
            request?: undefined;
            transport?: undefined;
            type?: undefined;
            uid?: undefined;
        }>(fn: (client: viem.Client<viem.Transport, viem.Chain | undefined, undefined, viem.PublicRpcSchema, viem.PublicActions<viem.Transport, viem.Chain | undefined>>) => client) => viem.Client<viem.Transport, viem.Chain | undefined, undefined, viem.PublicRpcSchema, { [K_1 in keyof client]: client[K_1]; } & viem.PublicActions<viem.Transport, viem.Chain | undefined>>;
    }>;
};

export { appConfigWithClients };
