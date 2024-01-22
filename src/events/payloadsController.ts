import { IPayloadsControllerCore_ABI } from '@bgd-labs/aave-address-book';
import { strategicGetLogs } from '@bgd-labs/js-utils';
import { Address, Client, getAbiItem } from 'viem';

import { PayloadState } from '../helpers/types';

export function isPayloadFinal(state: number) {
  return [
    PayloadState.Cancelled,
    PayloadState.Executed,
    PayloadState.Expired,
    // -1, // error
  ].includes(state);
}

export async function getPayloadsControllerEvents(
  payloadsControllerAddress: Address,
  client: Client,
  fromBlockNumber: bigint,
  toBlockNumber: bigint,
) {
  return await strategicGetLogs({
    client,
    events: [
      getAbiItem({ abi: IPayloadsControllerCore_ABI, name: 'PayloadCreated' }),
      getAbiItem({ abi: IPayloadsControllerCore_ABI, name: 'PayloadQueued' }),
      getAbiItem({ abi: IPayloadsControllerCore_ABI, name: 'PayloadExecuted' }),
    ],
    address: payloadsControllerAddress,
    fromBlock: fromBlockNumber,
    toBlock: toBlockNumber,
  });
}
