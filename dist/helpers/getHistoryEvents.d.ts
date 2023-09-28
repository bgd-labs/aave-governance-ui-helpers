import { IGovernanceCore } from '../contracts/IGovernanceCore';
import { IPayloadsControllerCore } from '../contracts/IPayloadsControllerCore';
import { IVotingMachineWithProofs } from '../contracts/IVotingMachineWithProofs';
export declare function getPayloadsCreated(startBlock: number, endBlock: number, payloadsController: IPayloadsControllerCore, payloadsControllerAddress: string, chainId: number): Promise<{
    payloadId: number;
    chainId: number;
    transactionHash: string;
    blockNumber: number;
    payloadsController: string;
}[]>;
export declare function getProposalCreated(startBlock: number, endBlock: number, govCore: IGovernanceCore): Promise<{
    proposalId: number;
    transactionHash: string;
    blockNumber: number;
}[]>;
export declare function getProposalActivated(startBlock: number, endBlock: number, govCore: IGovernanceCore): Promise<{
    proposalId: number;
    transactionHash: string;
    blockNumber: number;
}[]>;
export declare function getProposalActivatedOnVM(startBlock: number, endBlock: number, votingMachine: IVotingMachineWithProofs): Promise<{
    proposalId: number;
    transactionHash: string;
    blockNumber: number;
}[]>;
export declare function getProposalVotingClosed(startBlock: number, endBlock: number, votingMachine: IVotingMachineWithProofs): Promise<{
    proposalId: number;
    transactionHash: string;
    blockNumber: number;
}[]>;
export declare function getProposalQueued(startBlock: number, endBlock: number, govCore: IGovernanceCore): Promise<{
    proposalId: number;
    transactionHash: string;
    blockNumber: number;
}[]>;
export declare function getPayloadsQueued(startBlock: number, endBlock: number, payloadsController: IPayloadsControllerCore, payloadsControllerAddress: string, chainId: number): Promise<{
    payloadId: number;
    chainId: number;
    transactionHash: string;
    blockNumber: number;
    payloadsController: string;
}[]>;
export declare function getPayloadsExecuted(startBlock: number, endBlock: number, payloadsController: IPayloadsControllerCore, payloadsControllerAddress: string, chainId: number): Promise<{
    payloadId: number;
    chainId: number;
    transactionHash: string;
    blockNumber: number;
    payloadsController: string;
}[]>;
