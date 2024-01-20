import { zeroHash } from 'viem';

import {
  getProposalMetadata as getProposalMetadataInit,
  ProposalMetadata,
} from './parseIpfs';

const incorectedHashses = [
  '0x0000000000000000000000000000000000000000000000000000000000000020',
  zeroHash,
];

export async function getProposalMetadata(
  hash: string,
  gateway?: string,
  setIpfsError?: (hash: string, text?: string) => void,
  errorText?: string,
): Promise<ProposalMetadata | undefined> {
  if (incorectedHashses.some((h) => hash === h)) {
    if (!!setIpfsError) {
      setIpfsError(hash, errorText);
    } else {
      console.error('Fetch metadata from ipfs error:', 'incorrect ipfs hash');
      throw Error('Fetch metadata from ipfs error');
    }
  } else {
    try {
      return await getProposalMetadataInit(hash, gateway);
    } catch (e) {
      if (!!setIpfsError) {
        setIpfsError(hash);
      } else {
        console.error('Fetch metadata from ipfs error:', e);
        throw Error('Fetch metadata from ipfs error');
      }
    }
  }
}
