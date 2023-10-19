import { Hex } from 'viem';

export const HashZero: Hex =
  '0x0000000000000000000000000000000000000000000000000000000000000000';

export function checkHash(hash: string) {
  return {
    notZero: hash !== HashZero,
    zero: hash === HashZero,
  };
}
