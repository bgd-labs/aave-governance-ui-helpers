import { PublicClient } from '@wagmi/core';
import { Hex } from 'viem';

declare function getPayloadsCreated(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number, chainId: number): Promise<{
    payloadId: number | undefined;
    chainId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    payloadsController: `0x${string}`;
}[]>;
declare function getProposalCreated(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalActivated(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalActivatedOnVM(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalVotingClosed(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalQueued(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getPayloadsQueued(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number, chainId: number): Promise<{
    payloadId: number | undefined;
    chainId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    payloadsController: `0x${string}`;
}[]>;
declare function getPayloadsExecuted(contractAddress: Hex, client: PublicClient, startBlock: number, endBlock: number, chainId: number): Promise<{
    payloadId: number | undefined;
    chainId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    payloadsController: `0x${string}`;
}[]>;

export { getPayloadsCreated, getPayloadsExecuted, getPayloadsQueued, getProposalActivated, getProposalActivatedOnVM, getProposalCreated, getProposalQueued, getProposalVotingClosed };
