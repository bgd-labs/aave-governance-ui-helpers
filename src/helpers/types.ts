import { Client, Hex } from 'viem';

// generic
export type ClientsRecord = Record<number, Client>;

export type InitContract = {
  contractAddress: Hex;
  client: Client;
};

export type InitEvent = {
  contractAddress: Hex;
  client: Client;
  startBlock: number;
  endBlock: number;
};

export type InitEventWithChainId = InitEvent & {
  chainId: number;
};
// end

// from contracts
type PayloadStructOutput = {
  chain: bigint;
  accessLevel: number;
  payloadsController: Hex;
  payloadId: number;
};

export type ProposalStructOutput = {
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

export type VMProposalStructOutput = {
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
// end

export interface PayloadForCreation {
  chain: bigint;
  accessLevel: number;
  payloadsController: Hex;
  payloadId: number;
}

export enum BasicProposalState {
  Null, // proposal does not exists
  Created, // created, waiting for a cooldown to initiate the balances snapshot
  Active, // balances snapshot set, voting in progress
  Queued, // voting results submitted, but proposal is under grace period when guardian can cancel it
  Executed, // results sent to the execution chain(s)
  Failed, // voting was not successful
  Cancelled, // got cancelled by guardian, or because proposition power of creator dropped below allowed minimum
  Expired,
}

export enum VotingMachineProposalState {
  NotCreated,
  Active,
  Finished,
  SentToGovernance,
}

export enum PayloadState {
  None,
  Created,
  Queued,
  Executed,
  Cancelled,
  Expired,
}

export enum ProposalState {
  Created,
  Active,
  Succeed,
  Defeated,
  Executed,
  Expired,
  Canceled,
}

export type VotersData = {
  proposalId: number;
  address: Hex;
  support: boolean;
  votingPower: number;
  transactionHash: Hex;
  blockNumber: number;
  chainId: number;
  ensName?: string;
};

export type InitialProposal = {
  id: bigint;
  votingChainId: number;
  snapshotBlockHash: Hex;
};

export type VotingMachineData = {
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

export type Payload = {
  creator: Hex;
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

// type for create payload actions
export type PayloadAction = {
  payloadAddress: Hex;
  withDelegateCall: boolean;
  accessLevel: number;
  value: number;
  signature: string;
  callData?: string;
};

export type VotingConfig = {
  accessLevel: number;
  quorum: number;
  differential: number;
  minPropositionPower: number;
  coolDownBeforeVotingStart: number;
  votingDuration: number;
};

export type ContractsConstants = {
  precisionDivider: string;
  cooldownPeriod: number;
  expirationTime: number;
  cancellationFee: string;
};

export type InitialPayload = {
  id: number;
  chainId: number;
  payloadsController: Hex;
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
  lastUpdatedTimestamp?: number;
}

export interface ProposalData
  extends BasicProposal,
    Pick<ProposalMetadata, 'title'> {
  payloads: Payload[];
  votingMachineState: VotingMachineProposalState;
}

type BlockHash = string;
export type Balance = {
  blockHash: Hex;
  tokenName: string;
  underlyingAsset: Hex;
  value: string;
  basicValue: string;
  userBalance: string;
  isWithDelegatedPower: boolean;
};

export type VotingBalance = Record<BlockHash, Balance[]>;

export interface ProposalWithoutState {
  data: ProposalData;
  precisionDivider: string;
  config: VotingConfig;
  timings: {
    cooldownPeriod: number;
    expirationTime: number;
    executionDelay: number;
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

export enum ProposalStateWithName {
  Created = 'Created',
  Active = 'Voting',
  Succeed = 'Passed',
  Failed = 'Failed',
  Defeated = 'Failed',
  Executed = 'Executed',
  Expired = 'Expired',
  Canceled = 'Canceled',
  ActiveAll = 'Active',
}

export enum ProposalEstimatedState {
  Active = 'Will open for voting',
  Succeed = 'Will pass',
  Defeated = 'Will fail',
  ProposalExecuted = 'Proposal will start executing',
  PayloadsExecuted = 'Payloads will start executing',
  Expired = 'Will expire',
}

export enum ProposalWaitForState {
  WaitForActivateVoting = 'Pending voting activation',
  WaitForCloseVoting = 'Pending voting closure',
  WaitForQueueProposal = 'Proposal is time-locked',
  WaitForExecuteProposal = 'Pending proposal execution',
  WaitForQueuePayloads = 'Payloads are time-locked',
  WaitForExecutePayloads = 'Pending payloads execution',
}

export type ProposalMetadata = {
  title: string;
  description: string;
  shortDescription: string;
  ipfsHash: string;
  originalIpfsHash: string;
  aip: number;
  discussions: string;
  author: string;
};

export interface FinishedProposalForList
  extends Pick<ProposalMetadata, 'title'> {
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
