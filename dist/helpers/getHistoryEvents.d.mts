import { InitEventWithChainId, InitEvent } from './types.mjs';
import '@wagmi/core';
import 'viem';

declare function getPayloadsCreated({ contractAddress, client, startBlock, endBlock, chainId, }: InitEventWithChainId): Promise<{
    payloadId: number | undefined;
    chainId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    payloadsController: `0x${string}`;
}[]>;
declare function getProposalCreated({ contractAddress, client, startBlock, endBlock, }: InitEvent): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalActivated({ contractAddress, client, startBlock, endBlock, }: InitEvent): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalActivatedOnVM({ contractAddress, client, startBlock, endBlock, }: InitEvent): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalVotingClosed({ contractAddress, client, startBlock, endBlock, }: InitEvent): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getProposalQueued({ contractAddress, client, startBlock, endBlock, }: InitEvent): Promise<{
    proposalId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
}[]>;
declare function getPayloadsQueued({ contractAddress, client, startBlock, endBlock, chainId, }: InitEventWithChainId): Promise<{
    payloadId: number | undefined;
    chainId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    payloadsController: `0x${string}`;
}[]>;
declare function getPayloadsExecuted({ contractAddress, client, startBlock, endBlock, chainId, }: InitEventWithChainId): Promise<{
    payloadId: number | undefined;
    chainId: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    payloadsController: `0x${string}`;
}[]>;

export { getPayloadsCreated, getPayloadsExecuted, getPayloadsQueued, getProposalActivated, getProposalActivatedOnVM, getProposalCreated, getProposalQueued, getProposalVotingClosed };
