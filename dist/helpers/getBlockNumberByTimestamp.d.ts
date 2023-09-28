import { ethers } from 'ethers';
export declare function getBlockNumberByTimestamp(chainId: number, targetTimestamp: number, provider: ethers.providers.JsonRpcBatchProvider): Promise<{
    minBlockNumber: number;
    maxBlockNumber: number;
}>;
