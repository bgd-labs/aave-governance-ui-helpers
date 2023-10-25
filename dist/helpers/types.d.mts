import { PublicClient, WalletClient } from '@wagmi/core';
import { Hex } from 'viem';

type ClientsRecord = Record<number, PublicClient>;
type InitContract = {
    contractAddress: Hex;
    client: PublicClient;
    walletClient?: WalletClient;
};
type InitEvent = {
    contractAddress: Hex;
    client: PublicClient;
    startBlock: number;
    endBlock: number;
};
type InitEventWithChainId = InitEvent & {
    chainId: number;
};
type PayloadStructOutput = {
    chain: bigint;
    accessLevel: number;
    payloadsController: Hex;
    payloadId: number;
};
type ProposalStructOutput = {
    id: bigint;
    votingChainId: bigint;
    proposalData: {
        state: number;
        accessLevel: number;
        creationTime: number;
        votingDuration: number;
        votingActivationTime: number;
        queuingTime: number;
        cancelTimestamp: number;
        creator: Hex;
        votingPortal: Hex;
        snapshotBlockHash: Hex;
        ipfsHash: Hex;
        forVotes: bigint;
        againstVotes: bigint;
        cancellationFee: bigint;
        payloads: Readonly<PayloadStructOutput[]>;
    };
};
type VMProposalWithoutVotesStructOutput = {
    id: bigint;
    sentToGovernance: boolean;
    startTime: number;
    endTime: number;
    votingClosedAndSentTimestamp: number;
    forVotes: bigint;
    againstVotes: bigint;
    creationBlockNumber: bigint;
    votingClosedAndSentBlockNumber: bigint;
};
type VMProposalStructOutput = {
    proposalData: Readonly<VMProposalWithoutVotesStructOutput>;
    votedInfo: Readonly<{
        support: boolean;
        votingPower: bigint;
    }>;
    strategy: Hex;
    dataWarehouse: Hex;
    votingAssets: Readonly<Hex[]>;
    hasRequiredRoots: boolean;
    voteConfig: Readonly<{
        votingDuration: number;
        l1ProposalBlockHash: Hex;
    }>;
    state: number;
};
interface PayloadForCreation {
    chain: number;
    accessLevel: number;
    payloadsController: string;
    payloadId: number;
}
declare enum BasicProposalState {
    Null = 0,
    Created = 1,
    Active = 2,
    Queued = 3,
    Executed = 4,
    Failed = 5,
    Cancelled = 6,
    Expired = 7
}
declare enum VotingMachineProposalState {
    NotCreated = 0,
    Active = 1,
    Finished = 2,
    SentToGovernance = 3
}
declare enum PayloadState {
    None = 0,
    Created = 1,
    Queued = 2,
    Executed = 3,
    Cancelled = 4,
    Expired = 5
}
declare enum ProposalState {
    Created = 0,
    Active = 1,
    Succeed = 2,
    Defeated = 3,
    Executed = 4,
    Expired = 5,
    Canceled = 6
}
type VotersData = {
    proposalId: number;
    address: Hex;
    support: boolean;
    votingPower: number;
    transactionHash: Hex;
    blockNumber: number;
    chainId: number;
    ensName?: string;
};
type InitialProposal = {
    id: bigint;
    votingChainId: number;
    snapshotBlockHash: Hex;
};
type VotingMachineData = {
    id: number;
    forVotes: string;
    againstVotes: string;
    startTime: number;
    endTime: number;
    votingClosedAndSentBlockNumber: number;
    votingClosedAndSentTimestamp: number;
    l1BlockHash: Hex;
    strategy: Hex;
    sentToGovernance: boolean;
    createdBlock: number;
    votedInfo: {
        support: boolean;
        votingPower: string;
    };
    votingAssets: Readonly<Hex[]>;
    hasRequiredRoots: boolean;
};
type Payload = {
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
    payloadsController: Hex;
    actionAddresses: Hex[];
};
type PayloadAction = {
    payloadAddress: Hex;
    withDelegateCall: boolean;
    accessLevel: number;
    value: number;
    signature: string;
    callData?: string;
};
type VotingConfig = {
    accessLevel: number;
    quorum: number;
    differential: number;
    minPropositionPower: number;
    coolDownBeforeVotingStart: number;
    votingDuration: number;
};
type ContractsConstants = {
    precisionDivider: string;
    cooldownPeriod: number;
    expirationTime: number;
    cancellationFee: string;
};
type InitialPayload = {
    id: number;
    chainId: number;
    payloadsController: Hex;
};
interface BasicProposal {
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
interface ProposalData extends BasicProposal, Pick<ProposalMetadata, 'title'> {
    payloads: Payload[];
    votingMachineState: VotingMachineProposalState;
}
type BlockHash = string;
type Balance = {
    blockHash: string;
    tokenName: string;
    underlyingAsset: string;
    value: string;
    basicValue: string;
    userBalance: string;
    isWithDelegatedPower: boolean;
};
type VotingBalance = Record<BlockHash, Balance[]>;
interface ProposalWithoutState {
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
interface Proposal extends ProposalWithoutState {
    state: ProposalState;
}
interface ProposalWithLoadings {
    loading: boolean;
    balanceLoading: boolean;
    proposal: Proposal;
}
interface ProposalWithId extends ProposalWithLoadings {
    id: number;
}
declare enum ProposalStateWithName {
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
declare enum ProposalEstimatedState {
    Active = "Will open for voting",
    Succeed = "Will pass",
    Defeated = "Will fail",
    ProposalExecuted = "Proposal will be executed",
    PayloadsExecuted = "Payloads will start being executed",
    Expired = "Will expire"
}
declare enum ProposalWaitForState {
    WaitForActivateVoting = "Pending voting activation",
    WaitForCloseVoting = "Pending voting closure",
    WaitForQueueProposal = "Proposal is time-locked",
    WaitForExecuteProposal = "Pending proposal execution",
    WaitForQueuePayloads = "Payloads are time-locked",
    WaitForExecutePayloads = "Pending payloads execution"
}
type ProposalMetadata = {
    title: string;
    description: string;
    shortDescription: string;
    ipfsHash: string;
    originalIpfsHash: string;
    aip: number;
    discussions: string;
    author: string;
};
interface FinishedProposalForList extends Pick<ProposalMetadata, 'title'> {
    id: number;
    state: ProposalState;
    finishedTimestamp: number;
    ipfsHash: string;
}
interface CachedProposalDataItem {
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
interface CachedProposalDataItemWithId extends CachedProposalDataItem {
    id: number;
}
interface CachedDetails {
    payloads: Payload[];
    ipfs: ProposalMetadata;
    proposal: BasicProposal;
}

export { Balance, BasicProposal, BasicProposalState, CachedDetails, CachedProposalDataItem, CachedProposalDataItemWithId, ClientsRecord, ContractsConstants, FinishedProposalForList, InitContract, InitEvent, InitEventWithChainId, InitialPayload, InitialProposal, Payload, PayloadAction, PayloadForCreation, PayloadState, Proposal, ProposalData, ProposalEstimatedState, ProposalMetadata, ProposalState, ProposalStateWithName, ProposalStructOutput, ProposalWaitForState, ProposalWithId, ProposalWithLoadings, ProposalWithoutState, VMProposalStructOutput, VotersData, VotingBalance, VotingConfig, VotingMachineData, VotingMachineProposalState };
