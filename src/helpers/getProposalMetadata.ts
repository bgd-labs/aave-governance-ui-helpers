import base58 from 'bs58';
import matter from 'gray-matter';
import { zeroHash } from 'viem';

import { ProposalMetadata } from './types';

export const ipfsGateway = 'https://ipfs.io/ipfs';

export function getLink(hash: string, gateway: string): string {
  return `${gateway}/${hash}`;
}
type MemorizeMetadata = Record<string, ProposalMetadata>;

const MEMORIZE: MemorizeMetadata = {};

const incorectedHashses = [
  '0x0000000000000000000000000000000000000000000000000000000000000020',
  zeroHash,
];

export async function getProposalMetadata(
  hash: string,
  gateway = ipfsGateway,
  setIpfsError?: (hash: string, text?: string) => void,
  errorText?: string,
): Promise<ProposalMetadata> {
  const ipfsHash = hash.startsWith('0x')
    ? base58.encode(Buffer.from(`1220${hash.slice(2)}`, 'hex'))
    : hash;

  if (MEMORIZE[ipfsHash]) return MEMORIZE[ipfsHash];

  if (incorectedHashses.some((h) => hash === h)) {
    if (!!setIpfsError) {
      setIpfsError(hash, errorText);
    } else {
      throw Error('Fetch metadata form ipfs not working');
    }
  } else {
    const ipfsResponse: Response = await fetch(getLink(ipfsHash, gateway));

    if (!ipfsResponse.ok) {
      if (!!setIpfsError) {
        setIpfsError(hash);
      } else {
        throw Error('Fetch metadata form ipfs not working');
      }
    }

    const clone = ipfsResponse.clone();
    try {
      const response: ProposalMetadata = await ipfsResponse.json();

      const { content } = matter(response.description);

      MEMORIZE[ipfsHash] = {
        title: response.title,
        aip: response.aip,
        originalIpfsHash: hash,
        author: response.author,
        discussions: response.discussions,
        shortDescription: response.shortDescription,
        ipfsHash,
        description: content,
      };
    } catch (e) {
      const text = await clone.text();
      const { content, data } = matter(text);
      MEMORIZE[ipfsHash] = {
        title: data.title,
        aip: data.aip,
        originalIpfsHash: hash,
        author: data.author,
        discussions: data.discussions,
        shortDescription: data.shortDescription,
        ipfsHash,
        description: content,
      };
    }
  }

  return MEMORIZE[ipfsHash];
}
