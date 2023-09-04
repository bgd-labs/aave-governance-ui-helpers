import { ethers } from 'ethers';

export function checkHash(hash: string) {
  return {
    notZero: hash !== ethers.constants.HashZero,
    zero: hash === ethers.constants.HashZero,
  };
}
