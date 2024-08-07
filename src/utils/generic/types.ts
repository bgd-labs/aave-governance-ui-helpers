export enum Asset {
  AAVE = 'AAVE',
  STKAAVE = 'stkAAVE',
  AAAVE = 'aAAVE',
  GOVCORE = 'Gov core',
}

export enum ProposalState {
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

export enum CombineProposalState {
  Created,
  Active,
  Succeed,
  Failed,
  Executed,
  Expired,
  Canceled,
}

export enum ProposalStateWithName {
  Created = 'Created',
  Active = 'Voting',
  Succeed = 'Passed',
  Failed = 'Failed',
  Executed = 'Executed',
  Expired = 'Expired',
  Canceled = 'Canceled',
  ActiveAll = 'Active',
}

export enum ProposalEstimatedState {
  Active = 'Will open for voting',
  Succeed = 'Will pass',
  Failed = 'Will fail',
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

export enum HistoryItemType {
  PAYLOADS_CREATED,
  CREATED,
  PROPOSAL_ACTIVATE,
  OPEN_TO_VOTE,
  VOTING_OVER,
  VOTING_CLOSED,
  RESULTS_SENT,
  PROPOSAL_QUEUED,
  PROPOSAL_EXECUTED,
  PAYLOADS_QUEUED,
  PAYLOADS_EXECUTED,
  PROPOSAL_CANCELED,
  PAYLOADS_EXPIRED,
  PROPOSAL_EXPIRED,
}

export type BalanceForProof = {
  underlyingAsset: string;
  value: string;
  userBalance: string;
  isWithDelegatedPower: boolean;
};

export type AssetsBalanceSlots = Record<
  string,
  {
    balance: number;
    delegation?: number;
    exchangeRate?: number;
  }
>;

export type ProposalMetadata = {
  originalIpfsHash: string;
  title: string;
  description: string;
  ipfsHash: string;
  discussions: string;
  author: string;
  snapshot?: string;
};
