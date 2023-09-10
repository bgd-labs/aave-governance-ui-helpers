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

  let averageBlockTime = getAverageBlockTime(chainId);

  const currentBlockNumber = await provider.getBlockNumber();
  let block = await provider.getBlock(currentBlockNumber);
  let isAverageBlockTimeFinal = false;
  let prevBlock = undefined;

  let blockNumber = currentBlockNumber;

  while (block?.timestamp > targetTimestamp) {
    if (typeof prevBlock !== 'undefined' && !isAverageBlockTimeFinal) {
      averageBlockTime = Math.ceil(
        (prevBlock.timestamp - block.timestamp) /
          (prevBlock.number - block.number),
      );
      isAverageBlockTimeFinal = true;
    }

    const decreaseBlocks = Math.floor(
      (block.timestamp - targetTimestamp) / averageBlockTime,
    );

    if (decreaseBlocks <= blocksDiff) {
      break;
    }

    blockNumber -= decreaseBlocks;
    if (typeof prevBlock === 'undefined') {
      prevBlock = block;
    }
    block = await provider.getBlock(blockNumber);
  }

  if (block?.timestamp < targetTimestamp) {
    while (block.timestamp <= targetTimestamp) {
      const increaseBlocks = Math.floor(
        (targetTimestamp - block.timestamp) / averageBlockTime,
      );

      if (increaseBlocks <= blocksDiff) {
        break;
      }

      blockNumber += increaseBlocks;
      block = await provider.getBlock(blockNumber);
    }
  }

  return {
    minBlockNumber: (block?.number || currentBlockNumber) - blocksDiff * 2,
    blockNumber: block?.number || currentBlockNumber,
    maxBlockNumber:
      (block?.number || currentBlockNumber - blocksDiff * 2) + blocksDiff * 2,
  };
}
