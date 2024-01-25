import {
  getProposalMetadata as getProposalMetadataInit,
  ProposalMetadata as ProposalMetadataInit,
} from '@bgd-labs/js-utils';
import { zeroHash } from 'viem';

export type ProposalMetadata = ProposalMetadataInit & {
  originalIpfsHash: string;
};

export const ipfsGateway = 'https://cloudflare-ipfs.com/ipfs';

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
      const metadata = await getProposalMetadataInit(hash, gateway);
      return {
        ...metadata,
        originalIpfsHash: hash,
      };
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
