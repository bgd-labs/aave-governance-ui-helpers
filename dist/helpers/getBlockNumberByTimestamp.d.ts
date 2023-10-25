import { PublicClient } from '@wagmi/core';

declare function getBlockNumberByTimestamp({ client, chainId, targetTimestamp, }: {
    client: PublicClient;
    chainId: number;
    targetTimestamp: number;
}): Promise<{
    minBlockNumber: number;
    maxBlockNumber: number;
}>;

export { getBlockNumberByTimestamp };
