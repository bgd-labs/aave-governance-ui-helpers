import { Hex, PublicClient } from 'viem';

declare function getVoters(contractAddress: Hex, client: PublicClient, endBlock: number, startBlock: number, blockLimit: number, chainId: number): Promise<{
    proposalId: number;
    address: `0x${string}`;
    support: boolean;
    votingPower: number;
    transactionHash: `0x${string}`;
    blockNumber: number;
    chainId: number;
}[]>;

export { getVoters };
