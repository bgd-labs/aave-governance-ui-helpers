export interface PayloadForCreation {
    chain: number;
    accessLevel: number;
    payloadsController: string;
    payloadId: number;
}
export declare enum BasicProposalState {
    Null = 0,
    Created = 1,
    Active = 2,
    Queued = 3,
    Executed = 4,
    Failed = 5,
    Cancelled = 6,
    Expired = 7
}
export declare enum VotingMachineProposalState {
    NotCreated = 0,
    Active = 1,
    Finished = 2,
    SentToGovernance = 3
}
export declare enum PayloadState {
    None = 0,
    Created = 1,
    Queued = 2,
    Executed = 3,
    Cancelled = 4,
    Expired = 5
}
export declare enum ProposalState {
    Created = 0,
    Active = 1,
    Succeed = 2,
    Defeated = 3,
    Executed = 4,
    Expired = 5,
    Canceled = 6
}
export declare type VotersData = {
    proposalId: number;
    address: string;
    support: boolean;
    votingPower: number;
    transactionHash: string;
    blockNumber: number;
    chainId: number;
    ensName?: string;
};
export declare type InitialProposal = {
    id: number;
    votingChainId: number;
    snapshotBlockHash: string;
};
export declare type VotingMachineData = {
    id: number;
    forVotes: string;
    againstVotes: string;
    startTime: number;
    endTime: number;
    votingClosedAndSentBlockNumber: number;
    votingClosedAndSentTimestamp: number;
    l1BlockHash: string;
    strategy: string;
    sentToGovernance: boolean;
    createdBlock: number;
    votedInfo: {
        support: boolean;
        votingPower: string;
    };
    votingAssets: string[];
    hasRequiredRoots: boolean;
};
export declare type Payload = {
    id: number;
    chainId: number;
    maximumAccessLevelRequired: number;
    state: PayloadState;
    createdAt: number;
    queuedAt: number;
    executedAt: number;
    cancelledAt: number;
    expirationTime: number;
    delay: number;
    gracePeriod: number;
    payloadsController: string;
    actionAddresses: string[];
};
export declare type PayloadAction = {
    payloadAddress: string;
    withDelegateCall: boolean;
    accessLevel: number;
    value: number;
    signature: string;
    callData?: string;
};
export declare type VotingConfig = {
    accessLevel: number;
    quorum: number;
    differential: number;
    minPropositionPower: number;
    coolDownBeforeVotingStart: number;
    votingDuration: number;
};
export declare type ContractsConstants = {
    precisionDivider: string;
    cooldownPeriod: number;
    expirationTime: number;
    cancellationFee: string;
};
export declare type InitialPayload = {
    id: number;
    chainId: number;
    payloadsController: string;
};
export interface BasicProposal {
    id: number;
    votingDuration: number;
    creationTime: number;
    accessLevel: number;
    basicState: BasicProposalState;
    queuingTime: number;
    ipfsHash: string;
    initialPayloads: InitialPayload[];
    votingMachineData: VotingMachineData;
    snapshotBlockHash: string;
    creator: string;
    canceledAt: number;
    votingActivationTime: number;
    votingChainId: number;
    prerender: boolean;
}
export interface ProposalData extends BasicProposal, Pick<ProposalMetadata, 'title'> {
    payloads: Payload[];
    votingMachineState: VotingMachineProposalState;
}
declare type BlockHash = string;
export declare type Balance = {
    blockHash: string;
    tokenName: string;
    underlyingAsset: string;
    value: string;
    basicValue: string;
    userBalance: string;
    isWithDelegatedPower: boolean;
};
export declare type VotingBalance = Record<BlockHash, Balance[]>;
export interface ProposalWithoutState {
    data: ProposalData;
    precisionDivider: string;
    config: VotingConfig;
    timings: {
        cooldownPeriod: number;
        expirationTime: number;
        executionPayloadTime: number;
    };
    balances: Balance[];
}
export interface Proposal extends ProposalWithoutState {
    state: ProposalState;
}
export interface ProposalWithLoadings {
    loading: boolean;
    balanceLoading: boolean;
    proposal: Proposal;
}
export interface ProposalWithId extends ProposalWithLoadings {
    id: number;
}
export declare enum ProposalStateWithName {
    Created = "Created",
    Active = "Voting",
    Succeed = "Passed",
    Failed = "Failed",
    Defeated = "Failed",
    Executed = "Executed",
    Expired = "Expired",
    Canceled = "Canceled",
    ActiveAll = "Active"
}
export declare enum ProposalEstimatedState {
    Active = "Will open for voting",
    Succeed = "Will pass",
    Defeated = "Will fail",
    ProposalExecuted = "Proposal will be executed",
    PayloadsExecuted = "Payloads will start being executed",
    Expired = "Will expire"
}
export declare enum ProposalWaitForState {
    WaitForActivateVoting = "Pending voting activation",
    WaitForCloseVoting = "Pending voting closure",
    WaitForQueueProposal = "Proposal is time-locked",
    WaitForExecuteProposal = "Pending proposal execution",
    WaitForQueuePayloads = "Payloads are time-locked",
    WaitForExecutePayloads = "Pending payloads execution"
}
export declare type ProposalMetadata = {
    title: string;
    description: string;
    shortDescription: string;
    ipfsHash: string;
    originalIpfsHash: string;
    aip: number;
    discussions: string;
    author: string;
};
export interface FinishedProposalForList extends Pick<ProposalMetadata, 'title'> {
    id: number;
    state: ProposalState;
    finishedTimestamp: number;
    ipfsHash: string;
}
export interface CachedProposalDataItem {
    proposal: {
        data: {
            id: number;
            finishedTimestamp: number;
            title: string;
            ipfsHash: string;
        };
        state: ProposalState;
    };
}
export interface CachedProposalDataItemWithId extends CachedProposalDataItem {
    id: number;
}
export interface CachedDetails {
    payloads: Payload[];
    ipfs: ProposalMetadata;
    proposal: BasicProposal;
}
export {};
