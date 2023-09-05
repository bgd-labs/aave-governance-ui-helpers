import { ethers } from 'ethers';

import { ChainIdByName } from './chains';

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

  const averageBlockTime = getAverageBlockTime(chainId);
  const lowerLimitStamp = targetTimestamp - blocksDiff * averageBlockTime;

  const currentBlockNumber = await provider.getBlockNumber();
  let block = await provider.getBlock(currentBlockNumber);

  let blockNumber = currentBlockNumber;

  while (block?.timestamp > targetTimestamp) {
    let decreaseBlocks = (block.timestamp - targetTimestamp) / averageBlockTime;
    decreaseBlocks = Math.floor(decreaseBlocks);
    if (decreaseBlocks <= blocksDiff) {
      break;
    }
    blockNumber -= decreaseBlocks;
    block = await provider.getBlock(blockNumber);
  }

  if (block?.timestamp < lowerLimitStamp) {
    while (block.timestamp <= lowerLimitStamp) {
      blockNumber += blocksDiff;
      block = await provider.getBlock(blockNumber);
    }
  }

  return {
    minBlockNumber: block.number - blocksDiff * 2,
    blockNumber: block.number,
    maxBlockNumber: block.number + blocksDiff * 2,
  };
}
