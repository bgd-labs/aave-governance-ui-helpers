import { BasicProposal, VotingMachineProposalState, VMProposalStructOutput, ProposalData, ProposalStructOutput } from './types.js';
import '@wagmi/core';
import 'viem';

declare function getVotingMachineProposalState(proposal: BasicProposal): VotingMachineProposalState;
declare function formatVotingMachineData(id: number, votingMachineData: Readonly<VMProposalStructOutput>): {
    id: number;
    forVotes: string;
    againstVotes: string;
    startTime: number;
    endTime: number;
    votingClosedAndSentBlockNumber: number;
    votingClosedAndSentTimestamp: number;
    l1BlockHash: `0x${string}`;
    strategy: `0x${string}`;
    sentToGovernance: boolean;
    createdBlock: number;
    votedInfo: {
        support: boolean;
        votingPower: string;
    };
    votingAssets: readonly `0x${string}`[];
    hasRequiredRoots: boolean;
};
declare function updateVotingMachineData(proposals: ProposalData[], votingMachineDataHelperData: Readonly<VMProposalStructOutput[]>, ids: number[]): BasicProposal[];
declare function getDetailedProposalsData(govCoreDataHelperData: Readonly<ProposalStructOutput[]>, votingMachineDataHelperData: Readonly<VMProposalStructOutput[]>, ids: number[], prerender?: boolean): BasicProposal[];

export { formatVotingMachineData, getDetailedProposalsData, getVotingMachineProposalState, updateVotingMachineData };
