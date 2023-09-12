import { providers } from 'ethers';
import { IVotingMachineWithProofs } from '../contracts/IVotingMachineWithProofs';
import { VotersData } from '../types';
export declare class Votes {
    getAll(): Promise<{
        voters: VotersData[];
        lastVoteBlockNumber: Record<number, number>;
    }>;
    getVotersById(id: number): Promise<VotersData[]>;
    populate(votingMachineProvider: providers.JsonRpcBatchProvider, votingMachine: IVotingMachineWithProofs, startBlockNumber: number, endBlockNumber: number, chainId: number): Promise<void>;
}
