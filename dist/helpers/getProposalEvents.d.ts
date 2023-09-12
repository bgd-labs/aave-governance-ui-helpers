import { IVotingMachineWithProofs } from '../contracts/IVotingMachineWithProofs';
export declare function getVoters(endBlock: number, startBlock: number, blockLimit: number, votingMachine: IVotingMachineWithProofs, chainId: number): Promise<{
    proposalId: number;
    address: string;
    support: boolean;
    votingPower: number;
    transactionHash: string;
    blockNumber: number;
    chainId: number;
}[]>;
