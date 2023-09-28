import { BigNumber } from 'bignumber.js';
import { Proposal, ProposalData as BasicProposal, ProposalEstimatedState, ProposalState, ProposalWaitForState } from '../types';
export declare function normalizeVotes(forVotes: string, againstVotes: string): {
    forVotes: number;
    againstVotes: number;
};
export declare function formatQuorum(forVotes: string, quorum: number, precisionDivider: string): {
    minQuorumVotes: BigNumber;
    normalizeMinQuorumVotes: number;
    quorumReached: boolean;
};
export declare function formatDiff(forVotes: string, againstVotes: string, differential: number, precisionDivider: string): {
    diff: BigNumber;
    requiredDiff: BigNumber;
    normalizeRequiredDiff: number;
};
interface BasicProposalWithConfigsData {
    proposalData: BasicProposal;
    quorum: number;
    differential: number;
    precisionDivider: string;
    cooldownPeriod: number;
    executionPayloadTime: number;
}
export declare function getProposalStepsAndAmounts({ proposalData, quorum, differential, precisionDivider, cooldownPeriod, executionPayloadTime, }: BasicProposalWithConfigsData): {
    forVotes: number;
    againstVotes: number;
    normalizeMinQuorumVotes: number;
    quorumReached: boolean;
    normalizeRequiredDiff: number;
    isVotingStarted: boolean;
    isVotingActive: boolean;
    isVotingEnded: boolean;
    isVotingClosed: boolean;
    isVotingFailed: boolean;
    lastPayloadQueuedAt: number;
    lastPayloadCanceledAt: number;
    lastPayloadExecutedAt: number;
    lastPayloadExpiredAt: number;
    predictPayloadExpiredTime: number;
    allPayloadsExecuted: boolean;
    allPayloadsCanceled: boolean;
    allPayloadsExpired: boolean;
    isCanceled: boolean;
    isExpired: boolean;
    isProposalActive: boolean;
    isProposalQueued: boolean;
    isProposalExecuted: boolean;
    isPayloadsQueued: boolean;
    isPayloadsExecuted: boolean;
};
export declare function getProposalState({ ...data }: BasicProposalWithConfigsData): ProposalState;
export declare function getEstimatedState(proposal: Proposal, forVotesS: string, againstVotesS: string): {
    estimatedState: ProposalEstimatedState;
    timestampForEstimatedState: number;
};
export declare function getWaitForState(proposal: Proposal): ProposalWaitForState | undefined;
export declare function formatProposal(proposal: Proposal): {
    forPercent: number;
    forVotes: number;
    againstPercent: number;
    againstVotes: number;
    minQuorumVotes: number;
    requiredDiff: number;
    requiredForVotes: number;
    requiredAgainstVotes: number;
    stateTimestamp: number;
    estimatedState: ProposalEstimatedState;
    timestampForEstimatedState: number;
    waitForState: ProposalWaitForState | undefined;
    votingPowerBasic: number;
    votingPower: number;
    votedPower: number;
    votingTokens: import("../types").Balance[];
};
export {};
