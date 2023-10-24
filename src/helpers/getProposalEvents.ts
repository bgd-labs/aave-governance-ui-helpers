import { PublicClient } from '@wagmi/core';
import { Hex } from 'viem';

import { normalizeBN } from './bignumber';
import { votingMachineContract } from './contracts';
import { getEventsBySteps } from './eventsHelpres';

async function getVoteEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const votingMachine = votingMachineContract({
    contractAddress,
    client,
  });

  const events = await client.getContractEvents({
    abi: votingMachine.abi,
    eventName: 'VoteEmitted',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      proposalId: Number(event.args.proposalId),
      address: (event.args.voter || '').toString() as Hex,
      support: event.args.support || false,
      votingPower: normalizeBN(
        (event.args.votingPower || '').toString(),
        18,
      ).toNumber(),
      transactionHash: event.transactionHash as Hex,
      blockNumber: Number(event.blockNumber),
      chainId,
    }));
}

export async function getVoters(
  contractAddress: Hex,
  client: PublicClient,
  endBlock: number,
  startBlock: number,
  blockLimit: number,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getVoteEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}
