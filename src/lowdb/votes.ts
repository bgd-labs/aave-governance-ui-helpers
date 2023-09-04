import { providers } from 'ethers';
import lodash from 'lodash';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

import { IVotingMachineWithProofs } from '../contracts/IVotingMachineWithProofs';
import { blockLimit, getBlocksForEvents } from '../helpers/eventsHelpres';
import { getVoters } from '../helpers/getProposalEvents';
import { VotersData } from '../types';
import { baseDirName } from './helpers';

class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data');
}

// Use JSON file for storage
const file = join(process.cwd(), baseDirName, 'votes.json');
const adapter = new JSONFile<{
  voters: VotersData[];
  lastVoteBlockNumber: Record<number, number>;
}>(file);
const db = new LowWithLodash(adapter, {
  voters: [],
  lastVoteBlockNumber: {},
});
db.read();

export class Votes {
  async getAll() {
    const cache = db.data;
    if (!cache) {
      return { voters: [], lastVoteBlockNumber: {} };
    }
    return cache;
  }

  async getVotersById(id: number) {
    const cache = db.data;
    if (!cache) {
      return [];
    }
    return cache.voters.filter((voter) => voter.proposalId === id);
  }

  async populate(
    votingMachineProvider: providers.JsonRpcBatchProvider,
    votingMachine: IVotingMachineWithProofs,
    startBlockNumber: number,
    endBlockNumber: number,
    chainId: number,
  ) {
    // fallback to empty array
    db.data ||= { voters: [], lastVoteBlockNumber: {} };

    const isCached = (db.data ||= { voters: [], lastVoteBlockNumber: {} });

    const currentBlock = await votingMachineProvider.getBlockNumber();

    const { endBlock, startBlock } = getBlocksForEvents(
      currentBlock,
      startBlockNumber,
      endBlockNumber,
      isCached.lastVoteBlockNumber[chainId],
    );

    const voters: VotersData[] = isCached.voters;

    if (endBlock) {
      const newVoters = await getVoters(
        endBlock,
        startBlock,
        blockLimit,
        votingMachine,
        chainId,
      );

      newVoters.forEach((vote: VotersData) => {
        const cache = isCached.voters.find(
          (cacheVote: VotersData) =>
            vote.transactionHash === cacheVote.transactionHash,
        );

        if (!cache) {
          voters.push(...newVoters);
        }
      });
    }

    voters.forEach((vote: VotersData) => {
      const cache = isCached.voters.find(
        (cacheVote: VotersData) =>
          vote.transactionHash === cacheVote.transactionHash,
      );

      if (!cache && db.data) {
        db.data.voters.push(vote);
      }
    });

    const arrayBlockNumbers = db.data.voters
      .filter((vote) => vote.chainId === chainId)
      .map((vote) => vote.blockNumber);
    db.data.lastVoteBlockNumber[chainId] = Math.max.apply(0, arrayBlockNumbers);

    await db.write();
  }
}
