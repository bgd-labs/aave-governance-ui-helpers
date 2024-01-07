import lodash from 'lodash';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';
import { Hex } from 'viem';
import { mainnet } from 'viem/chains';

import { initialClients } from '../helpers/clients';
import { blockLimit, getBlocksForEvents } from '../helpers/eventsHelpers';
import { getVoters } from '../helpers/getProposalEvents';
import { VotersData } from '../helpers/types';
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
    contractAddress: Hex,
    startBlockNumber: number,
    endBlockNumber: number,
    chainId: number,
  ) {
    const mainnetClient = initialClients[mainnet.id];
    const votingMachineClient = initialClients[chainId];

    // fallback to empty array
    db.data ||= { voters: [], lastVoteBlockNumber: {} };

    const isCached = (db.data ||= { voters: [], lastVoteBlockNumber: {} });

    const currentBlock = await votingMachineClient.getBlockNumber();

    const { endBlock, startBlock } = getBlocksForEvents(
      Number(currentBlock),
      startBlockNumber,
      endBlockNumber,
      isCached.lastVoteBlockNumber[chainId],
    );

    const voters: VotersData[] = isCached.voters;

    if (endBlock) {
      const newVoters = await getVoters({
        contractAddress,
        client: votingMachineClient,
        endBlock,
        startBlock,
        blockLimit,
        chainId,
      });

      const fiveTopVoters = await Promise.all(
        newVoters
          .sort((a, b) => b.votingPower - a.votingPower)
          .slice(0, 5)
          .map(async (vote) => {
            try {
              const name = await mainnetClient.getEnsName({
                address: vote.address,
              });

              return {
                ...vote,
                ensName: name ? name : undefined,
              };
            } catch {
              return {
                ...vote,
                ensName: undefined,
              };
            }
          }),
      );

      fiveTopVoters.forEach((vote: VotersData) => {
        const cache = isCached.voters.find(
          (cacheVote: VotersData) =>
            vote.transactionHash === cacheVote.transactionHash &&
            vote.ensName === cacheVote.ensName,
        );

        if (!cache) {
          voters.push(vote);
        }
      });

      newVoters.forEach((vote: VotersData) => {
        const cache = isCached.voters.find(
          (cacheVote: VotersData) =>
            vote.transactionHash === cacheVote.transactionHash,
        );

        if (!cache) {
          voters.push(vote);
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
