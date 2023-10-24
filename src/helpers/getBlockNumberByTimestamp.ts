import { PublicClient } from '@wagmi/core';
import {
  arbitrum,
  avalanche,
  avalancheFuji,
  base,
  bsc,
  bscTestnet,
  goerli,
  mainnet,
  metis,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia,
} from 'viem/chains';

const getAverageBlockTime = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return 13;
    case polygon.id:
      return 3;
    case avalanche.id:
      return 5;
    case bsc.id:
      return 4;
    case base.id:
      return 2;
    case arbitrum.id:
      return 1;
    case metis.id:
      return 2;
    case optimism.id:
      return 2;
    case sepolia.id:
      return 13;
    case goerli.id:
      return 13;
    case optimismGoerli.id:
      return 2;
    case avalancheFuji.id:
      return 5;
    case polygonMumbai.id:
      return 3;
    case bscTestnet.id:
      return 4;
    default:
      return 13;
  }
};

export async function getBlockNumberByTimestamp(
  chainId: number,
  targetTimestamp: number,
  client: PublicClient,
) {
  const blocksDiff = 100;
  const MAX_ITERATIONS = 10;

  let iterationCount = 0;
  let averageBlockTime = getAverageBlockTime(chainId);

  const currentBlock = await client.getBlock({ blockTag: 'latest' });

  if (targetTimestamp > currentBlock.timestamp) {
    throw new Error('Target timestamp is in the future.');
  }

  let previousBlockTimestamp = Number(currentBlock.timestamp);
  let previousBlockNumber = Number(currentBlock.number);
  let estimatedBlockNumber;
  let estimatedBlock;

  do {
    // Make a guess

    if (previousBlockTimestamp >= targetTimestamp) {
      // step back
      estimatedBlockNumber =
        previousBlockNumber -
        Math.floor(
          (previousBlockTimestamp - targetTimestamp) / averageBlockTime,
        );
    } else {
      // step forward
      estimatedBlockNumber =
        previousBlockNumber +
        Math.floor(
          (previousBlockTimestamp - targetTimestamp) / averageBlockTime,
        );
    }

    if (estimatedBlockNumber < 0) {
      throw new Error('Estimated block number is below zero.');
    }

    // Get block data
    estimatedBlock = await client.getBlock({
      blockNumber: BigInt(estimatedBlockNumber),
    });

    // Calculate a new average block time based on the difference of the timestamps
    averageBlockTime = Math.ceil(
      (Number(estimatedBlock.timestamp) - previousBlockTimestamp) /
        (estimatedBlockNumber - previousBlockNumber),
    );

    previousBlockTimestamp = Number(estimatedBlock.timestamp);
    previousBlockNumber = Number(estimatedBlock.number);

    iterationCount++;
  } while (
    Math.abs(Number(estimatedBlock.timestamp) - targetTimestamp) >
      blocksDiff * averageBlockTime &&
    iterationCount < MAX_ITERATIONS
  );

  if (iterationCount === MAX_ITERATIONS) {
    throw new Error('Maximum iterations reached without converging.');
  }

  // if estimated block timestamp <= target
  let minBlockNumber = Number(estimatedBlock.number) - 1;
  let maxBlockNumber = Number(estimatedBlock.number) + blocksDiff * 2;

  // if estimated block timestamp > target
  if (estimatedBlock.timestamp > targetTimestamp) {
    minBlockNumber = Number(estimatedBlock.number) - blocksDiff * 2;
    maxBlockNumber = Number(estimatedBlock.number);
  }

  return {
    minBlockNumber,
    maxBlockNumber,
  };
}
