import { InitEventWithChainId } from './types.js';
import '@wagmi/core';
import 'viem';

declare function getVoters({ contractAddress, client, endBlock, startBlock, blockLimit, chainId, }: InitEventWithChainId & {
    blockLimit: number;
}): Promise<{
    proposalId: number;
    address: `0x${string}`;
    support: boolean;
    votingPower: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    chainId: number;
}[]>;

export { getVoters };
