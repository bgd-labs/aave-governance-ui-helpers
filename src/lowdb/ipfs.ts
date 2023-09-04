import lodash from 'lodash';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

import { ProposalMetadata } from '../types';
import { baseDirName } from './helpers';

class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data');
}

// Use JSON file for storage
const file = join(process.cwd(), baseDirName, 'ipfs.json');
const adapter = new JSONFile<{ ipfs: ProposalMetadata[] }>(file);
const db = new LowWithLodash(adapter, { ipfs: [] });
db.read();

export class Ipfs {
  getIpfsData() {
    return db.data?.ipfs || [];
  }

  get(originalIpfsHash: string) {
    const value = db.chain.get('ipfs').find({ originalIpfsHash }).value();
    if (!value) throw new Error('trying to fetch ipfs cache, but failed');
    return value;
  }

  async populate(originalIpfsHash: string, ipfsData: ProposalMetadata) {
    // seed
    // fallback to empty array
    db.data ||= { ipfs: [] };

    const value = db.chain.get('ipfs').find({ originalIpfsHash }).value();

    if (value) {
      // update
      const index = db.data.ipfs.findIndex(
        (data) => data.originalIpfsHash === originalIpfsHash,
      );
      db.data.ipfs[index] = ipfsData;
    } else {
      db.data.ipfs.push(ipfsData);
    }

    db.write();
  }
}
