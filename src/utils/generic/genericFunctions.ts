import { BigNumber } from 'bignumber.js';
import bs58 from 'bs58';
import matter from 'gray-matter';

import {
  BigNumberValue,
  blockLimit,
  ProposalMetadata,
  zeroHash,
} from './index.ts';
import { AssetsBalanceSlots } from './types.ts';

export function baseToCidv0(hash: string) {
  return bs58.encode(Buffer.from(`1220${hash.slice(2)}`, 'hex'));
}
export function getLink(hash: string, gateway: string): string {
  return `${gateway}/${hash}`;
}

export async function getProposalMetadataInit(
  hash: string,
  gateway: string = 'https://cloudflare-ipfs.com/ipfs',
): Promise<Omit<ProposalMetadata, 'originalIpfsHash'>> {
  const ipfsHash = hash.startsWith('0x') ? baseToCidv0(hash) : hash;
  const ipfsPath = getLink(ipfsHash, gateway);
  const ipfsResponse = await fetch(ipfsPath, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!ipfsResponse.ok) throw Error(`IPFS: error fetching ${ipfsPath}`);
  const clone = await ipfsResponse.clone();

  try {
    const response = await ipfsResponse.json();
    const { content, data } = matter(response.description);
    return {
      ...response,
      ipfsHash,
      description: content,
      ...data,
    };
    // matter will error in case the proposal is not valid yaml (like on proposal 0)
    // therefore in the case of an error we just inline the complete ipfs content
  } catch (e) {
    const data = matter(await clone.text());
    return {
      ...ipfsResponse,
      ipfsHash,
      description: data.content,
      ...(data.data as { title: string; discussions: string; author: string }),
    };
  }
}

export async function getProposalMetadata(
  hash: string,
  gateway?: string,
  setIpfsError?: (hash: string, text?: string) => void,
  errorText?: string,
): Promise<ProposalMetadata | undefined> {
  const incorectedHashses = [
    '0x0000000000000000000000000000000000000000000000000000000000000020',
    zeroHash,
  ];

  if (incorectedHashses.some((h) => hash === h)) {
    if (!!setIpfsError) {
      setIpfsError(hash, errorText);
    } else {
      console.error('Fetch metadata from ipfs error:', 'incorrect ipfs hash');
      throw Error('Fetch metadata from ipfs error');
    }
  } else {
    try {
      const metadata: Omit<ProposalMetadata, 'originalIpfsHash'> =
        await getProposalMetadataInit(hash, gateway);
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

export function getVoteBalanceSlot(
  underlyingAsset: string,
  isWithDelegatedPower: boolean,
  aAaveAddress: string,
  slots: AssetsBalanceSlots,
) {
  return underlyingAsset.toLowerCase() === aAaveAddress.toLowerCase() &&
    isWithDelegatedPower
    ? slots[underlyingAsset.toLowerCase()].delegation || 64
    : slots[underlyingAsset.toLowerCase()].balance || 0;
}

export async function fetchWithTimeout(resource: string, timeout?: number) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout || 10000);
  const response = await fetch(resource, {
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}

// events helpers
export function getBlocksForEvents(
  currentBlock: number,
  startBlockNumber: number,
  endBlockNumber: number | undefined,
  lastBlockNumber: number | undefined,
): { startBlock: number; endBlock: number } {
  const endBlock =
    endBlockNumber && endBlockNumber > 0 && endBlockNumber < currentBlock
      ? endBlockNumber
      : currentBlock;

  const startBlock =
    !!lastBlockNumber &&
    isFinite(lastBlockNumber) &&
    lastBlockNumber > startBlockNumber &&
    lastBlockNumber < currentBlock &&
    lastBlockNumber < endBlock
      ? lastBlockNumber
      : startBlockNumber < currentBlock
        ? startBlockNumber
        : currentBlock - blockLimit;

  return { startBlock, endBlock };
}

export async function getEventsBySteps<T>(
  startBlock: number,
  endBlock: number,
  blockLimit: number,
  callbackFunc: (startBlock: number, endBlock: number) => Promise<T>,
  defaultValue: T,
) {
  const blockSteps = Math.ceil((endBlock - startBlock) / blockLimit);

  const eventsCountArray = new Array(blockSteps);
  for (let i = 0; i < blockSteps; i++) {
    eventsCountArray[i] = i;
  }

  const results = await Promise.allSettled(
    eventsCountArray.map(async (count) => {
      const startBlockNumber = startBlock + blockLimit * count;
      const endBlockNumber = startBlock + (blockLimit * count + blockLimit);

      return await callbackFunc(
        startBlockNumber,
        endBlock > endBlockNumber ? endBlockNumber : endBlock,
      );
    }),
  );

  const formattedResults = results.map((item) =>
    item.status === 'fulfilled' ? item.value : defaultValue,
  );

  return formattedResults.flat();
}

// universal
export function checkHash(hash: string) {
  return {
    notZero: hash !== zeroHash,
    zero: hash === zeroHash,
  };
}

export function valueToBigNumber(amount: BigNumberValue): BigNumber {
  if (amount instanceof BigNumber) {
    return amount;
  }

  return new BigNumber(amount);
}

export function normalize(n: BigNumberValue, decimals: number): string {
  return normalizeBN(n, decimals).toString(10);
}

export function normalizeBN(n: BigNumberValue, decimals: number): BigNumber {
  return valueToBigNumber(n).shiftedBy(decimals * -1);
}
