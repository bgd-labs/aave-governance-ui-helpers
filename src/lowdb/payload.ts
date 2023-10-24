import lodash from 'lodash';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

import { InitialPayload, Payload as PayloadType } from '../helpers/types';
import { baseDirName } from './helpers';

class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data');
}

// Use JSON file for storage
const file = join(process.cwd(), baseDirName, 'payloads.json');
const adapter = new JSONFile<{ payloads: (PayloadType | InitialPayload)[] }>(
  file,
);
const db = new LowWithLodash(adapter, { payloads: [] });
db.read();

export class Payload {
  getInitialPayloads() {
    return (
      db.data?.payloads?.map((payload) => {
        return {
          id: payload.id,
          chainId: payload.chainId,
          payloadsController: payload.payloadsController,
        };
      }) || []
    );
  }

  get(id: number, payloadsController: string, chainId: number) {
    db.data ||= { payloads: [] };

    const value = db.data.payloads.find(
      (payload) =>
        payload.id === id &&
        payload.payloadsController === payloadsController &&
        payload.chainId === chainId,
    );

    if (!value) throw new Error('trying to fetch payload cache, but failed');
    return value;
  }

  async populate(
    id: number,
    payloadData: PayloadType | InitialPayload,
    isVotingFailed: boolean,
    isProposalCanceled: boolean,
    isProposalExpired: boolean,
    chainId: number,
    payloadsController: string,
  ) {
    // seed
    // fallback to empty array
    db.data ||= { payloads: [] };

    const isInDb = db.data.payloads.find(
      (payload) =>
        payload.id === id &&
        payload.payloadsController === payloadsController &&
        payload.chainId === chainId,
    );
    if (
      // @ts-ignore
      payloadData?.state &&
      // @ts-ignore
      payloadData?.state < 3 &&
      !isVotingFailed &&
      !isProposalCanceled &&
      !isProposalExpired
    )
      return;

    if (!!isInDb) {
      // update
      const index = db.data.payloads.findIndex(
        (p) => p.id === id && p.payloadsController === payloadsController,
      );
      db.data.payloads[index] = payloadData;
    } else {
      db.data.payloads.push(payloadData);
    }

    db.write();
  }
}
