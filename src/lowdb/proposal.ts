import lodash from 'lodash';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

import { BasicProposal as ProposalType } from '../types';
import { baseDirName } from './helpers';

class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data');
}

// Use JSON file for storage
const file = join(process.cwd(), baseDirName, 'proposals.json');
const adapter = new JSONFile<ProposalType[]>(file);
const db = new LowWithLodash(adapter, []);
db.read();

export class Proposal {
  getIds() {
    return db.data.map((proposal) => proposal.id) || [];
  }

  get(id: number) {
    const value = db.chain.find({ id }).value();
    if (!value) throw new Error('trying to fetch proposal cache, but failed');
    return value;
  }

  async populate(
    id: number,
    proposalData: ProposalType,
    isVotingFailed: boolean,
    isProposalPayloadsFinished: boolean,
    isProposalCanceled: boolean,
    isProposalExpired: boolean,
  ) {
    // seed
    // fallback to empty array
    db.data ||= [];

    const value = db.chain.find({ id }).value();
    if (
      !isProposalPayloadsFinished &&
      !isVotingFailed &&
      !isProposalCanceled &&
      !isProposalExpired
    )
      return;

    if (value) {
      // update
      const index = db.data.findIndex((p) => p.id === id);
      db.data[index] = proposalData;
    } else {
      db.data.push(proposalData);
    }

    db.write();
  }
}
