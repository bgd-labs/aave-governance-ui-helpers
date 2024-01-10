import lodash from 'lodash';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

import { FinishedProposalForList } from '../helpers/types';
import { baseDirName } from './helpers';

class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data');
}

// Use JSON file for storage
const file = join(process.cwd(), baseDirName, 'list_view_proposals.json');
const adapter = new JSONFile<{
  totalProposalCount: number;
  proposals: FinishedProposalForList[];
}>(file);
const db = new LowWithLodash(adapter, { totalProposalCount: 0, proposals: [] });
db.read();

export class ListViewProposal {
  getTotalCount() {
    return db.data.totalProposalCount || 0;
  }

  getIds() {
    return db.data.proposals.map((proposal) => proposal.id) || [];
  }

  getListViewProposalsData() {
    return db.data.proposals || [];
  }
  async populate(
    id: number,
    proposalData: FinishedProposalForList,
    isVotingFailed: boolean,
    isProposalPayloadsFinished: boolean,
    isProposalCanceled: boolean,
    isProposalExpired: boolean,
    proposalsCount: number,
  ) {
    // seed
    // fallback to empty array
    db.data ||= { totalProposalCount: 0, proposals: [] };
    db.data.totalProposalCount = proposalsCount;
    db.write();

    const value = db.chain.get('proposals').find({ id }).value();
    if (
      !isProposalPayloadsFinished &&
      !isVotingFailed &&
      !isProposalCanceled &&
      !isProposalExpired
    )
      return;

    if (value) {
      // update
      const index = db.data.proposals.findIndex((p) => p.id === id);
      db.data.proposals[index] = proposalData;
    } else {
      db.data.proposals.push(proposalData);
    }

    db.write();
  }
}
