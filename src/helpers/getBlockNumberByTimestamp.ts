import { ethers } from 'ethers';

import { ChainIdByName } from './chains';

// TODO: need added mainnets
const getAverageBlockTime = (chainId: number) => {
  switch (chainId) {
    case ChainIdByName.Sepolia:
      return 15;
    case ChainIdByName.AvalancheFuji:
      return 5;
    case ChainIdByName.Mumbai:
      return 3;
    case ChainIdByName.BnbTest:
      return 3;
    default:
      return 15;
  }
};

export async function getBlockNumberByTimestamp(
  chainId: number,
  targetTimestamp: number,
  provider: ethers.providers.JsonRpcBatchProvider,
) {
  const BLOCKS_DIFF = 100;
  const MAX_ITERATIONS = 10;

  let iterationCount = 0;
  let averageBlockTime = getAverageBlockTime(chainId);

  const currentBlockNumber = await provider.getBlockNumber();
  let currentBlock = await provider.getBlock(currentBlockNumber);

  if (targetTimestamp > currentBlock.timestamp) {
    throw new Error('Target timestamp is in the future.');
  }

  // initial guess
  let estimatedBlockNumber = Math.max(
    0,
    currentBlockNumber -
      Math.floor((currentBlock.timestamp - targetTimestamp) / averageBlockTime),
  );

  let estimatedBlock = await provider.getBlock(estimatedBlockNumber);

  let previousBlockTimestamp = currentBlock.timestamp;
  let previousBlockNumber = currentBlockNumber;

  // until difference is less that blocks diff
  while (
    Math.abs(estimatedBlock.timestamp - targetTimestamp) >
      BLOCKS_DIFF * averageBlockTime &&
    iterationCount < MAX_ITERATIONS
  ) {
    // Calculate a new average block time based on the difference of the timestamps
    averageBlockTime =
      (estimatedBlock.timestamp - previousBlockTimestamp) /
      (estimatedBlockNumber - previousBlockNumber);

    previousBlockTimestamp = estimatedBlock.timestamp;
    previousBlockNumber = estimatedBlock.number;

    // Make a new guess
    estimatedBlockNumber = Math.max(
      0,
      estimatedBlockNumber -
        Math.floor(
          (estimatedBlock.timestamp - targetTimestamp) / averageBlockTime,
        ),
    );

    // Get block data
    estimatedBlock = await provider.getBlock(estimatedBlockNumber);

    iterationCount++;
  }

  if (iterationCount === MAX_ITERATIONS) {
    throw new Error('Maximum iterations reached without converging.');
  }

  // if estimated block timestamp <= target
  let minBlockNumber = estimatedBlock.number - 1;
  let maxBlockNumber = estimatedBlock.number + BLOCKS_DIFF * 2;

  // if estimated block timestamp > target
  if (estimatedBlock.timestamp > targetTimestamp) {
    minBlockNumber = estimatedBlock.number - BLOCKS_DIFF * 2;
    maxBlockNumber = estimatedBlock.number;
  }

  return {
    minBlockNumber,
    maxBlockNumber,
  };
}
