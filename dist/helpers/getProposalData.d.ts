import { IGovernanceDataHelper } from '../contracts/IGovernanceDataHelper';
import { IVotingMachineDataHelper } from '../contracts/IVotingMachineDataHelper';
import { BasicProposal, ProposalData, VotingMachineProposalState } from '../types';
export declare function getVotingMachineProposalState(proposal: BasicProposal): VotingMachineProposalState;
export declare function formatVotingMachineData(id: number, votingMachineData: IVotingMachineDataHelper.ProposalStructOutput): {
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
export declare function updateVotingMachineData(proposals: ProposalData[], votingMachineDataHelperData: IVotingMachineDataHelper.ProposalStructOutput[], ids: number[]): BasicProposal[];
export declare function getDetailedProposalsData(govCoreDataHelperData: IGovernanceDataHelper.ProposalStructOutput[], votingMachineDataHelperData: IVotingMachineDataHelper.ProposalStructOutput[], ids: number[], prerender?: boolean): BasicProposal[];
