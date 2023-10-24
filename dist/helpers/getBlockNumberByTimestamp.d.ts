import { PublicClient } from 'viem';

declare function getBlockNumberByTimestamp(chainId: number, targetTimestamp: number, client: PublicClient): Promise<{
    minBlockNumber: number;
    maxBlockNumber: number;
}>;

export { getBlockNumberByTimestamp };
