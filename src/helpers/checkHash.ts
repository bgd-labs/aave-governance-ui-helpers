import { zeroHash } from 'viem';

export function checkHash(hash: string) {
  return {
    notZero: hash !== zeroHash,
    zero: hash === zeroHash,
  };
}
