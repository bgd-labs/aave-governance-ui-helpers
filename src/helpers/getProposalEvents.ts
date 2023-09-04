import { IVotingMachineWithProofs } from '../contracts/IVotingMachineWithProofs';
import { normalizeBN } from './bignumber';
import { getEventsBySteps } from './eventsHelpres';

async function getVoteEvents(
  votingMachine: IVotingMachineWithProofs,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const events = await votingMachine.queryFilter(
    votingMachine.filters.VoteEmitted(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      proposalId: event.args.proposalId.toNumber(),
      address: event.args.voter.toString(),
      support: event.args.support,
      votingPower: normalizeBN(
        event.args.votingPower.toString(),
        18,
      ).toNumber(),
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
      chainId,
    }));
}

export async function getVoters(
  endBlock: number,
  startBlock: number,
  blockLimit: number,
  votingMachine: IVotingMachineWithProofs,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getVoteEvents(
      votingMachine,
      startBlockNumber,
      endBlockNumber,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}
