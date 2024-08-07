import { IVotingMachineWithProofs_ABI } from '@bgd-labs/aave-address-book';
import { formatUnits, Hex, zeroAddress, zeroHash } from 'viem';
import { getContractEvents } from 'viem/actions';

import { getEventsBySteps } from '../generic';
import { InitEventWithChainId } from './types';

async function getVoteEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId,
}: InitEventWithChainId) {
  const events = await getContractEvents(client, {
    address: contractAddress,
    abi: IVotingMachineWithProofs_ABI,
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
      votingPower: +formatUnits(BigInt(event.args.votingPower || ''), 18),
      transactionHash: event.transactionHash as Hex,
      blockNumber: Number(event.blockNumber),
      chainId,
    }));
}

export async function getVoters({
  contractAddress,
  client,
  endBlock,
  startBlock,
  blockLimit,
  chainId,
}: InitEventWithChainId & { blockLimit: number }) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getVoteEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
      chainId,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc, [
    {
      proposalId: -1,
      address: zeroAddress,
      support: false,
      votingPower: 0,
      transactionHash: zeroHash,
      blockNumber: startBlock,
      chainId,
    },
  ]);
}
