import { BasicProposal as ProposalType } from '../types';
export declare class Proposal {
    getIds(): number[];
    get(id: number): ProposalType;
    populate(id: number, proposalData: ProposalType, isVotingFailed: boolean, isProposalPayloadsFinished: boolean, isProposalCanceled: boolean, isProposalExpired: boolean): Promise<void>;
}
