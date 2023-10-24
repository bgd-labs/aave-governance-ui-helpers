import { PublicClient } from '@wagmi/core';

declare function getBlockNumberByTimestamp(chainId: number, targetTimestamp: number, client: PublicClient): Promise<{
    minBlockNumber: number;
    maxBlockNumber: number;
}>;

export { getBlockNumberByTimestamp };
