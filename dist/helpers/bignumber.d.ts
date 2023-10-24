import { BigNumber } from 'bignumber.js';

type BigNumberValue = string | number | BigNumber;
declare function valueToBigNumber(amount: BigNumberValue): BigNumber;
declare function normalize(n: BigNumberValue, decimals: number): string;
declare function normalizeBN(n: BigNumberValue, decimals: number): BigNumber;

export { BigNumberValue, normalize, normalizeBN, valueToBigNumber };
