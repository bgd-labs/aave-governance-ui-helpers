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
import { Hex, PublicClient } from 'viem';

declare function govCoreContract(contractAddress: Hex, client: PublicClient): viem.GetContractReturnType<readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "cancellationFee";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "success";
        readonly type: "bool";
    }];
    readonly name: "CancellationFeeRedeemed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "cancellationFee";
        readonly type: "uint256";
    }];
    readonly name: "CancellationFeeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "payloadsController";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "payloadNumberOnProposal";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "numberOfPayloadsOnProposal";
        readonly type: "uint256";
    }];
    readonly name: "PayloadSent";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newPowerStrategy";
        readonly type: "address";
    }];
    readonly name: "PowerStrategyUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "ProposalCanceled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "creator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        readonly name: "accessLevel";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "ipfsHash";
        readonly type: "bytes32";
    }];
    readonly name: "ProposalCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "ProposalExecuted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "votesFor";
        readonly type: "uint128";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "votesAgainst";
        readonly type: "uint128";
    }];
    readonly name: "ProposalFailed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "votesFor";
        readonly type: "uint128";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "votesAgainst";
        readonly type: "uint128";
    }];
    readonly name: "ProposalQueued";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "voter";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "representative";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }];
    readonly name: "RepresentativeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "voter";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "support";
        readonly type: "bool";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "underlyingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "slot";
            readonly type: "uint128";
        }];
        readonly indexed: false;
        readonly internalType: "struct IVotingMachineWithProofs.VotingAssetWithSlot[]";
        readonly name: "votingAssetsWithSlot";
        readonly type: "tuple[]";
    }];
    readonly name: "VoteForwarded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "snapshotBlockHash";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint24";
        readonly name: "votingDuration";
        readonly type: "uint24";
    }];
    readonly name: "VotingActivated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        readonly name: "accessLevel";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint24";
        readonly name: "votingDuration";
        readonly type: "uint24";
    }, {
        readonly indexed: false;
        readonly internalType: "uint24";
        readonly name: "coolDownBeforeVotingStart";
        readonly type: "uint24";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "yesThreshold";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "yesNoDifferential";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "minPropositionPower";
        readonly type: "uint256";
    }];
    readonly name: "VotingConfigUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "votingPortal";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "VotingPortalUpdated";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "ACHIEVABLE_VOTING_PARTICIPATION";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "CANCELLATION_FEE_COLLECTOR";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "COOLDOWN_PERIOD";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MIN_VOTING_DURATION";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "NAME";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PRECISION_DIVIDER";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PROPOSAL_EXPIRATION_TIME";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "VOTING_TOKENS_CAP";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "activateVoting";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "votingPortals";
        readonly type: "address[]";
    }];
    readonly name: "addVotingPortals";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "cancelProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "chain";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "payloadsController";
            readonly type: "address";
        }, {
            readonly internalType: "uint40";
            readonly name: "payloadId";
            readonly type: "uint40";
        }];
        readonly internalType: "struct PayloadsControllerUtils.Payload[]";
        readonly name: "payloads";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "address";
        readonly name: "votingPortal";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "ipfsHash";
        readonly type: "bytes32";
    }];
    readonly name: "createProposal";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "executeProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCancellationFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPowerStrategy";
    readonly outputs: readonly [{
        readonly internalType: "contract IGovernancePowerStrategy";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "getProposal";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum IGovernanceCore.State";
            readonly name: "state";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint40";
            readonly name: "creationTime";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint24";
            readonly name: "votingDuration";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint40";
            readonly name: "votingActivationTime";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "queuingTime";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "cancelTimestamp";
            readonly type: "uint40";
        }, {
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "votingPortal";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "snapshotBlockHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "ipfsHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint128";
            readonly name: "forVotes";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "againstVotes";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "cancellationFee";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "chain";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "accessLevel";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "payloadsController";
                readonly type: "address";
            }, {
                readonly internalType: "uint40";
                readonly name: "payloadId";
                readonly type: "uint40";
            }];
            readonly internalType: "struct PayloadsControllerUtils.Payload[]";
            readonly name: "payloads";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct IGovernanceCore.Proposal";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "getProposalState";
    readonly outputs: readonly [{
        readonly internalType: "enum IGovernanceCore.State";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProposalsCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "voter";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }];
    readonly name: "getRepresentativeByChain";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "representative";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }];
    readonly name: "getRepresentedVotersByChain";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        readonly name: "accessLevel";
        readonly type: "uint8";
    }];
    readonly name: "getVotingConfig";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint24";
            readonly name: "coolDownBeforeVotingStart";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "votingDuration";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint56";
            readonly name: "yesThreshold";
            readonly type: "uint56";
        }, {
            readonly internalType: "uint56";
            readonly name: "yesNoDifferential";
            readonly type: "uint56";
        }, {
            readonly internalType: "uint56";
            readonly name: "minPropositionPower";
            readonly type: "uint56";
        }];
        readonly internalType: "struct IGovernanceCore.VotingConfig";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVotingPortalsCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "votingPortal";
        readonly type: "address";
    }];
    readonly name: "isVotingPortalApproved";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "forVotes";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "againstVotes";
        readonly type: "uint128";
    }];
    readonly name: "queueProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "proposalIds";
        readonly type: "uint256[]";
    }];
    readonly name: "redeemCancellationFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "votingPortals";
        readonly type: "address[]";
    }];
    readonly name: "removeVotingPortals";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "votingPortal";
        readonly type: "address";
    }];
    readonly name: "rescueVotingPortal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IGovernancePowerStrategy";
        readonly name: "newPowerStrategy";
        readonly type: "address";
    }];
    readonly name: "setPowerStrategy";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint24";
            readonly name: "coolDownBeforeVotingStart";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "votingDuration";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesNoDifferential";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minPropositionPower";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IGovernanceCore.SetVotingConfigInput[]";
        readonly name: "votingConfigs";
        readonly type: "tuple[]";
    }];
    readonly name: "setVotingConfigs";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "cancellationFee";
        readonly type: "uint256";
    }];
    readonly name: "updateCancellationFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "representative";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IGovernanceCore.RepresentativeInput[]";
        readonly name: "representatives";
        readonly type: "tuple[]";
    }];
    readonly name: "updateRepresentativesForChain";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}], {
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
}, viem.Client<viem.Transport, viem.Chain | undefined, viem.Account | undefined> | undefined, `0x${string}`, "CancellationFeeRedeemed" | "CancellationFeeUpdated" | "PayloadSent" | "PowerStrategyUpdated" | "ProposalCanceled" | "ProposalCreated" | "ProposalExecuted" | "ProposalFailed" | "ProposalQueued" | "RepresentativeUpdated" | "VoteForwarded" | "VotingActivated" | "VotingConfigUpdated" | "VotingPortalUpdated", "ACHIEVABLE_VOTING_PARTICIPATION" | "CANCELLATION_FEE_COLLECTOR" | "COOLDOWN_PERIOD" | "MIN_VOTING_DURATION" | "NAME" | "PRECISION_DIVIDER" | "PROPOSAL_EXPIRATION_TIME" | "VOTING_TOKENS_CAP" | "getCancellationFee" | "getPowerStrategy" | "getProposal" | "getProposalState" | "getProposalsCount" | "getRepresentativeByChain" | "getRepresentedVotersByChain" | "getVotingConfig" | "getVotingPortalsCount" | "isVotingPortalApproved", "activateVoting" | "addVotingPortals" | "cancelProposal" | "createProposal" | "executeProposal" | "queueProposal" | "redeemCancellationFee" | "removeVotingPortals" | "rescueVotingPortal" | "setPowerStrategy" | "setVotingConfigs" | "updateCancellationFee" | "updateRepresentativesForChain", true>;
declare function govCoreDataHelperContract(contractAddress: Hex, client: PublicClient): viem.GetContractReturnType<readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IGovernanceCore";
        readonly name: "govCore";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "enum PayloadsControllerUtils.AccessControl[]";
        readonly name: "accessLevels";
        readonly type: "uint8[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getConstants";
    readonly outputs: readonly [{
        readonly internalType: "struct IGovernanceDataHelper.Constants";
        readonly name: "";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly internalType: "struct IGovernanceDataHelper.VotingConfig[]";
            readonly name: "votingConfigs";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "accessLevel";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "struct IGovernanceCore.VotingConfig";
                readonly name: "config";
                readonly type: "tuple";
                readonly components: readonly [{
                    readonly internalType: "uint24";
                    readonly name: "coolDownBeforeVotingStart";
                    readonly type: "uint24";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint24";
                    readonly name: "votingDuration";
                    readonly type: "uint24";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint56";
                    readonly name: "yesThreshold";
                    readonly type: "uint56";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint56";
                    readonly name: "yesNoDifferential";
                    readonly type: "uint56";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint56";
                    readonly name: "minPropositionPower";
                    readonly type: "uint56";
                    readonly components: readonly [];
                }];
            }];
        }, {
            readonly internalType: "uint256";
            readonly name: "precisionDivider";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "cooldownPeriod";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "expirationTime";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "cancellationFee";
            readonly type: "uint256";
            readonly components: readonly [];
        }];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IGovernanceCore";
        readonly name: "govCore";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "from";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "to";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "pageSize";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getProposalsData";
    readonly outputs: readonly [{
        readonly internalType: "struct IGovernanceDataHelper.Proposal[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "votingChainId";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IGovernanceCore.Proposal";
            readonly name: "proposalData";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "enum IGovernanceCore.State";
                readonly name: "state";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "accessLevel";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "creationTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint24";
                readonly name: "votingDuration";
                readonly type: "uint24";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "votingActivationTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "queuingTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "cancelTimestamp";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "address";
                readonly name: "creator";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "address";
                readonly name: "votingPortal";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "bytes32";
                readonly name: "snapshotBlockHash";
                readonly type: "bytes32";
                readonly components: readonly [];
            }, {
                readonly internalType: "bytes32";
                readonly name: "ipfsHash";
                readonly type: "bytes32";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint128";
                readonly name: "forVotes";
                readonly type: "uint128";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint128";
                readonly name: "againstVotes";
                readonly type: "uint128";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint256";
                readonly name: "cancellationFee";
                readonly type: "uint256";
                readonly components: readonly [];
            }, {
                readonly internalType: "struct PayloadsControllerUtils.Payload[]";
                readonly name: "payloads";
                readonly type: "tuple[]";
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "chain";
                    readonly type: "uint256";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                    readonly name: "accessLevel";
                    readonly type: "uint8";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "address";
                    readonly name: "payloadsController";
                    readonly type: "address";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint40";
                    readonly name: "payloadId";
                    readonly type: "uint40";
                    readonly components: readonly [];
                }];
            }];
        }];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IGovernanceCore";
        readonly name: "govCore";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "wallet";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256[]";
        readonly name: "chainIds";
        readonly type: "uint256[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getRepresentationData";
    readonly outputs: readonly [{
        readonly internalType: "struct IGovernanceDataHelper.Representatives[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "address";
            readonly name: "representative";
            readonly type: "address";
            readonly components: readonly [];
        }];
    }, {
        readonly internalType: "struct IGovernanceDataHelper.Represented[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "address[]";
            readonly name: "votersRepresented";
            readonly type: "address[]";
            readonly components: readonly [];
        }];
    }];
}], {
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
}, viem.Client<viem.Transport, viem.Chain | undefined, viem.Account | undefined> | undefined, `0x${string}`, never, "getConstants" | "getProposalsData" | "getRepresentationData", never, true>;
declare function votingMachineContract(contractAddress: Hex, client: PublicClient): viem.GetContractReturnType<readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "forVotes";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "againstVotes";
        readonly type: "uint256";
    }];
    readonly name: "ProposalResultsSent";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "blockHash";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint24";
        readonly name: "votingDuration";
        readonly type: "uint24";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "voteCreated";
        readonly type: "bool";
    }];
    readonly name: "ProposalVoteConfigurationBridged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "l1BlockHash";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "startTime";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }];
    readonly name: "ProposalVoteStarted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "voter";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "support";
        readonly type: "bool";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "votingPower";
        readonly type: "uint256";
    }];
    readonly name: "VoteEmitted";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DATA_WAREHOUSE";
    readonly outputs: readonly [{
        readonly internalType: "contract IDataWarehouse";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "GOVERNANCE";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "NAME";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "REPRESENTATIVES_SLOT";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "VOTE_SUBMITTED_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "VOTING_ASSET_WITH_SLOT_RAW";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "VOTING_ASSET_WITH_SLOT_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "VOTING_STRATEGY";
    readonly outputs: readonly [{
        readonly internalType: "contract IVotingStrategy";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "closeAndSendVote";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "getProposalById";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "sentToGovernance";
            readonly type: "bool";
        }, {
            readonly internalType: "uint40";
            readonly name: "startTime";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "endTime";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "votingClosedAndSentTimestamp";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint128";
            readonly name: "forVotes";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "againstVotes";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "creationBlockNumber";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "votingClosedAndSentBlockNumber";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "getProposalState";
    readonly outputs: readonly [{
        readonly internalType: "enum IVotingMachineWithProofs.ProposalState";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "getProposalVoteConfiguration";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint24";
            readonly name: "votingDuration";
            readonly type: "uint24";
        }, {
            readonly internalType: "bytes32";
            readonly name: "l1ProposalBlockHash";
            readonly type: "bytes32";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "skip";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "size";
        readonly type: "uint256";
    }];
    readonly name: "getProposalsVoteConfigurationIds";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "getUserProposalVote";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "support";
            readonly type: "bool";
        }, {
            readonly internalType: "uint248";
            readonly name: "votingPower";
            readonly type: "uint248";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.Vote";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }];
    readonly name: "startProposalVote";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "support";
        readonly type: "bool";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "underlyingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "slot";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "proof";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
    }];
    readonly name: "submitVote";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "support";
        readonly type: "bool";
    }, {
        readonly internalType: "address";
        readonly name: "voter";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "proofOfRepresentation";
        readonly type: "bytes";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "underlyingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "slot";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "proof";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
    }];
    readonly name: "submitVoteAsRepresentative";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "voter";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "representative";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "support";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "proofOfRepresentation";
        readonly type: "bytes";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "underlyingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "slot";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "proof";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.SignatureParams";
        readonly name: "signatureParams";
        readonly type: "tuple";
    }];
    readonly name: "submitVoteAsRepresentativeBySignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "proposalId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "voter";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "support";
        readonly type: "bool";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "underlyingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "slot";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "proof";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "submitVoteBySignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}], {
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
}, viem.Client<viem.Transport, viem.Chain | undefined, viem.Account | undefined> | undefined, `0x${string}`, "ProposalResultsSent" | "ProposalVoteConfigurationBridged" | "ProposalVoteStarted" | "VoteEmitted", "NAME" | "getProposalState" | "DATA_WAREHOUSE" | "DOMAIN_SEPARATOR" | "GOVERNANCE" | "REPRESENTATIVES_SLOT" | "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH" | "VOTE_SUBMITTED_TYPEHASH" | "VOTING_ASSET_WITH_SLOT_RAW" | "VOTING_ASSET_WITH_SLOT_TYPEHASH" | "VOTING_STRATEGY" | "getProposalById" | "getProposalVoteConfiguration" | "getProposalsVoteConfigurationIds" | "getUserProposalVote", "closeAndSendVote" | "startProposalVote" | "submitVote" | "submitVoteAsRepresentative" | "submitVoteAsRepresentativeBySignature" | "submitVoteBySignature", true>;
declare function votingMachineDataHelperContract(contractAddress: Hex, client: PublicClient): viem.GetContractReturnType<readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVotingMachineWithProofs";
        readonly name: "votingMachine";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "struct IVotingMachineDataHelper.InitialProposal[]";
        readonly name: "initialProposals";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "bytes32";
            readonly name: "snapshotBlockHash";
            readonly type: "bytes32";
            readonly components: readonly [];
        }];
    }, {
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getProposalsData";
    readonly outputs: readonly [{
        readonly internalType: "struct IVotingMachineDataHelper.Proposal[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes";
            readonly name: "proposalData";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
                readonly components: readonly [];
            }, {
                readonly internalType: "bool";
                readonly name: "sentToGovernance";
                readonly type: "bool";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "startTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "endTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "votingClosedAndSentTimestamp";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint128";
                readonly name: "forVotes";
                readonly type: "uint128";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint128";
                readonly name: "againstVotes";
                readonly type: "uint128";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint256";
                readonly name: "creationBlockNumber";
                readonly type: "uint256";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint256";
                readonly name: "votingClosedAndSentBlockNumber";
                readonly type: "uint256";
                readonly components: readonly [];
            }];
        }, {
            readonly internalType: "struct IVotingMachineDataHelper.VotedInfo";
            readonly name: "votedInfo";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "support";
                readonly type: "bool";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint248";
                readonly name: "votingPower";
                readonly type: "uint248";
                readonly components: readonly [];
            }];
        }, {
            readonly internalType: "contract IVotingStrategy";
            readonly name: "strategy";
            readonly type: "address";
            readonly components: readonly [];
        }, {
            readonly internalType: "contract IDataWarehouse";
            readonly name: "dataWarehouse";
            readonly type: "address";
            readonly components: readonly [];
        }, {
            readonly internalType: "address[]";
            readonly name: "votingAssets";
            readonly type: "address[]";
            readonly components: readonly [];
        }, {
            readonly internalType: "bool";
            readonly name: "hasRequiredRoots";
            readonly type: "bool";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration";
            readonly name: "voteConfig";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "uint24";
                readonly name: "votingDuration";
                readonly type: "uint24";
                readonly components: readonly [];
            }, {
                readonly internalType: "bytes32";
                readonly name: "l1ProposalBlockHash";
                readonly type: "bytes32";
                readonly components: readonly [];
            }];
        }, {
            readonly internalType: "enum IVotingMachineWithProofs.ProposalState";
            readonly name: "state";
            readonly type: "uint8";
            readonly components: readonly [];
        }];
    }];
}], {
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
}, viem.Client<viem.Transport, viem.Chain | undefined, viem.Account | undefined> | undefined, `0x${string}`, never, "getProposalsData", never, true>;
declare function payloadsControllerContract(contractAddress: Hex, client: PublicClient): viem.GetContractReturnType<readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        readonly name: "accessLevel";
        readonly type: "uint8";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "executor";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint40";
        readonly name: "delay";
        readonly type: "uint40";
    }];
    readonly name: "ExecutorSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }];
    readonly name: "PayloadCancelled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "creator";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "withDelegateCall";
            readonly type: "bool";
        }, {
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "signature";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly indexed: false;
        readonly internalType: "struct IPayloadsControllerCore.ExecutionAction[]";
        readonly name: "actions";
        readonly type: "tuple[]";
    }, {
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        readonly name: "maximumAccessLevelRequired";
        readonly type: "uint8";
    }];
    readonly name: "PayloadCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }];
    readonly name: "PayloadExecuted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "originSender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "originChainId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "delivered";
        readonly type: "bool";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "message";
        readonly type: "bytes";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "reason";
        readonly type: "bytes";
    }];
    readonly name: "PayloadExecutionMessageReceived";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }];
    readonly name: "PayloadQueued";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "EXPIRATION_DELAY";
    readonly outputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "";
        readonly type: "uint40";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "GRACE_PERIOD";
    readonly outputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "";
        readonly type: "uint40";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MAX_EXECUTION_DELAY";
    readonly outputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "";
        readonly type: "uint40";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MIN_EXECUTION_DELAY";
    readonly outputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "";
        readonly type: "uint40";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }];
    readonly name: "cancelPayload";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "withDelegateCall";
            readonly type: "bool";
        }, {
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "signature";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IPayloadsControllerCore.ExecutionAction[]";
        readonly name: "actions";
        readonly type: "tuple[]";
    }];
    readonly name: "createPayload";
    readonly outputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "";
        readonly type: "uint40";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }];
    readonly name: "executePayload";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        readonly name: "accessControl";
        readonly type: "uint8";
    }];
    readonly name: "getExecutorSettingsByAccessControl";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }, {
            readonly internalType: "uint40";
            readonly name: "delay";
            readonly type: "uint40";
        }];
        readonly internalType: "struct IPayloadsControllerCore.ExecutorConfig";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }];
    readonly name: "getPayloadById";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "maximumAccessLevelRequired";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum IPayloadsControllerCore.PayloadState";
            readonly name: "state";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint40";
            readonly name: "createdAt";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "queuedAt";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "executedAt";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "cancelledAt";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "expirationTime";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "delay";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint40";
            readonly name: "gracePeriod";
            readonly type: "uint40";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "withDelegateCall";
                readonly type: "bool";
            }, {
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "accessLevel";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "signature";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IPayloadsControllerCore.ExecutionAction[]";
            readonly name: "actions";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct IPayloadsControllerCore.Payload";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "payloadId";
        readonly type: "uint40";
    }];
    readonly name: "getPayloadState";
    readonly outputs: readonly [{
        readonly internalType: "enum IPayloadsControllerCore.PayloadState";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPayloadsCount";
    readonly outputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "";
        readonly type: "uint40";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "executor";
                readonly type: "address";
            }, {
                readonly internalType: "uint40";
                readonly name: "delay";
                readonly type: "uint40";
            }];
            readonly internalType: "struct IPayloadsControllerCore.ExecutorConfig";
            readonly name: "executorConfig";
            readonly type: "tuple";
        }];
        readonly internalType: "struct IPayloadsControllerCore.UpdateExecutorInput[]";
        readonly name: "executors";
        readonly type: "tuple[]";
    }];
    readonly name: "updateExecutors";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}], {
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
}, viem.Client<viem.Transport, viem.Chain | undefined, viem.Account | undefined> | undefined, `0x${string}`, "ExecutorSet" | "PayloadCancelled" | "PayloadCreated" | "PayloadExecuted" | "PayloadExecutionMessageReceived" | "PayloadQueued", "EXPIRATION_DELAY" | "GRACE_PERIOD" | "MAX_EXECUTION_DELAY" | "MIN_EXECUTION_DELAY" | "getExecutorSettingsByAccessControl" | "getPayloadById" | "getPayloadState" | "getPayloadsCount", "cancelPayload" | "createPayload" | "executePayload" | "updateExecutors", true>;
declare function payloadsControllerDataHelperContract(contractAddress: Hex, client: PublicClient): viem.GetContractReturnType<readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IPayloadsController";
        readonly name: "payloadsController";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "enum PayloadsControllerUtils.AccessControl[]";
        readonly name: "accessLevels";
        readonly type: "uint8[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getExecutorConfigs";
    readonly outputs: readonly [{
        readonly internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IPayloadsControllerCore.ExecutorConfig";
            readonly name: "config";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "executor";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "delay";
                readonly type: "uint40";
                readonly components: readonly [];
            }];
        }];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IPayloadsController";
        readonly name: "payloadsController";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint40[]";
        readonly name: "payloadsIds";
        readonly type: "uint40[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getPayloadsData";
    readonly outputs: readonly [{
        readonly internalType: "struct IPayloadsControllerDataHelper.Payload[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IPayloadsControllerCore.Payload";
            readonly name: "data";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "creator";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "maximumAccessLevelRequired";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "enum IPayloadsControllerCore.PayloadState";
                readonly name: "state";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "createdAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "queuedAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "executedAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "cancelledAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "expirationTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "delay";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "gracePeriod";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "struct IPayloadsControllerCore.ExecutionAction[]";
                readonly name: "actions";
                readonly type: "tuple[]";
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "bool";
                    readonly name: "withDelegateCall";
                    readonly type: "bool";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                    readonly name: "accessLevel";
                    readonly type: "uint8";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "string";
                    readonly name: "signature";
                    readonly type: "string";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "bytes";
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly components: readonly [];
                }];
            }];
        }];
    }];
}], {
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
}, viem.Client<viem.Transport, viem.Chain | undefined, viem.Account | undefined> | undefined, `0x${string}`, never, "getExecutorConfigs" | "getPayloadsData", never, true>;

export { govCoreContract, govCoreDataHelperContract, payloadsControllerContract, payloadsControllerDataHelperContract, votingMachineContract, votingMachineDataHelperContract };
