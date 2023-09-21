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
  const blocksDiff = 100;
  const MAX_ITERATIONS = 10;

  let iterationCount = 0;
  let averageBlockTime = getAverageBlockTime(chainId);

  const currentBlock = await provider.getBlock('latest');
  iterationCount++;

  if (targetTimestamp > currentBlock.timestamp) {
    throw new Error('Target timestamp is in the future.');
  }

  const currentBlockNumber = currentBlock.number;
  let estimatedBlock = currentBlock;
  let isAverageBlockTimeFinal = false;
  let prevBlock = undefined;

  let workingBlockNumber = currentBlockNumber;

  // if estimated block timestamp > target (if everything is correct, then the estimatedBlock timestamp will always be larger than the one we need, since it's current block at first)
  while (estimatedBlock?.timestamp > targetTimestamp) {
    if (iterationCount === MAX_ITERATIONS) {
      throw new Error('Maximum iterations reached without converging.');
    }

    // only once we correct the averageBlockTime after first iteration
    if (typeof prevBlock !== 'undefined' && !isAverageBlockTimeFinal) {
      averageBlockTime = Math.ceil(
        (prevBlock.timestamp - estimatedBlock.timestamp) /
          (prevBlock.number - estimatedBlock.number),
      );
      isAverageBlockTimeFinal = true;
    }

    // calculate how many blocks we will move down from the estimatedBlock based on averageBlockTime
    const decreaseBlocks = Math.floor(
      (estimatedBlock.timestamp - targetTimestamp) / averageBlockTime,
    );

    // if we go down less than we need, we leave this cycle
    if (decreaseBlocks <= blocksDiff) {
      break;
    }

    workingBlockNumber -= decreaseBlocks;

    if (typeof prevBlock === 'undefined') {
      prevBlock = estimatedBlock;
    }

    // we set the estimatedBlock taking into account how far we have gone down
    estimatedBlock = await provider.getBlock(workingBlockNumber);
    iterationCount++;
  }

  // if we go too low in the first cycle, we go to the second
  if (estimatedBlock?.timestamp < targetTimestamp) {
    while (estimatedBlock.timestamp <= targetTimestamp) {
      if (iterationCount === MAX_ITERATIONS) {
        throw new Error('Maximum iterations reached without converging.');
      }

      // calculate how many blocks we will move up from the estimatedBlock based on averageBlockTime
      const increaseBlocks = Math.floor(
        (targetTimestamp - estimatedBlock.timestamp) / averageBlockTime,
      );

      // if we rise more than we need, then we are already at the goal, we can leave this cycle
      if (increaseBlocks <= blocksDiff) {
        break;
      }

      workingBlockNumber += increaseBlocks;

      // we set the estimatedBlock taking into account how far we have gone up
      estimatedBlock = await provider.getBlock(workingBlockNumber);
      iterationCount++;
    }
  }

  return {
    minBlockNumber: estimatedBlock.number - blocksDiff * 2,
    blockNumber: estimatedBlock.number,
    maxBlockNumber: estimatedBlock.number + blocksDiff * 2,
  };
}
