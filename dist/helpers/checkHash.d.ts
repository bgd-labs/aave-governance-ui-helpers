import { Hex } from 'viem';

declare const HashZero: Hex;
declare function checkHash(hash: string): {
    notZero: boolean;
    zero: boolean;
};

export { HashZero, checkHash };
