import { FinishedProposalForList } from '../types';
export declare class ListViewProposal {
    getTotalCount(): number;
    getIds(): number[];
    getListViewProposalsData(): FinishedProposalForList[];
    populate(id: number, proposalData: FinishedProposalForList, isVotingFailed: boolean, isProposalPayloadsFinished: boolean, isProposalCanceled: boolean, isProposalExpired: boolean, proposalsCount: number): Promise<void>;
}
