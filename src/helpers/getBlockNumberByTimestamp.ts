import { providers } from 'ethers';

import { ChainIdByName } from './chains';

const getAverageBlockTime = (chainId: number) => {
  switch (chainId) {
    case ChainIdByName.EthereumMainnet:
      return 13;
    case ChainIdByName.Polygon:
      return 3;
    case ChainIdByName.Avalanche:
      return 5;
    case ChainIdByName.Binance:
      return 4;
    case ChainIdByName.Base:
      return 2;
    case ChainIdByName.Arbitrum:
      return 1;
    case ChainIdByName.Metis:
      return 2;
    case ChainIdByName.Optimism:
      return 2;
    case ChainIdByName.Sepolia:
      return 13;
    case ChainIdByName.Goerli:
      return 13;
    case ChainIdByName.GoerliOptimism:
      return 2;
    case ChainIdByName.AvalancheFuji:
      return 5;
    case ChainIdByName.Mumbai:
      return 3;
    case ChainIdByName.BnbTest:
      return 4;
    default:
      return 13;
  }
};

export async function getBlockNumberByTimestamp(
  chainId: number,
  targetTimestamp: number,
  provider: providers.JsonRpcBatchProvider | providers.JsonRpcProvider,
) {
  const blocksDiff = 100;
  const MAX_ITERATIONS = 10;

  let iterationCount = 0;
  let averageBlockTime = getAverageBlockTime(chainId);

  const currentBlock = await provider.getBlock('latest');

  if (targetTimestamp > currentBlock.timestamp) {
    throw new Error('Target timestamp is in the future.');
  }

  let previousBlockTimestamp = currentBlock.timestamp;
  let previousBlockNumber = currentBlock.number;
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
    estimatedBlock = await provider.getBlock(estimatedBlockNumber);

    // Calculate a new average block time based on the difference of the timestamps
    averageBlockTime = Math.ceil(
      (estimatedBlock.timestamp - previousBlockTimestamp) /
        (estimatedBlockNumber - previousBlockNumber),
    );

    previousBlockTimestamp = estimatedBlock.timestamp;
    previousBlockNumber = estimatedBlock.number;

    iterationCount++;
  } while (
    Math.abs(estimatedBlock.timestamp - targetTimestamp) >
      blocksDiff * averageBlockTime &&
    iterationCount < MAX_ITERATIONS
  );

  if (iterationCount === MAX_ITERATIONS) {
    throw new Error('Maximum iterations reached without converging.');
  }

  // if estimated block timestamp <= target
  let minBlockNumber = estimatedBlock.number - 1;
  let maxBlockNumber = estimatedBlock.number + blocksDiff * 2;

  // if estimated block timestamp > target
  if (estimatedBlock.timestamp > targetTimestamp) {
    minBlockNumber = estimatedBlock.number - blocksDiff * 2;
    maxBlockNumber = estimatedBlock.number;
  }

  return {
    minBlockNumber,
    maxBlockNumber,
  };
}
