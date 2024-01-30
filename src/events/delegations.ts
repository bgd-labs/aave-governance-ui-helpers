import { IAaveToken_ABI } from '@bgd-labs/aave-address-book';
import { strategicGetLogs } from '@bgd-labs/js-utils';
import { Address, Client, getAbiItem } from 'viem';

export async function getDelegationEvents(
  addresses: Address[],
  client: Client,
  fromBlockNumber: bigint,
  toBlockNumber: bigint,
) {
  return await strategicGetLogs({
    client,
    events: [
      getAbiItem({
        abi: IAaveToken_ABI,
        name: 'DelegateChanged',
      }),
    ],
    address: addresses as any, // breaking the type -> TODO: fix utils to allow multiple addresses
    fromBlock: fromBlockNumber,
    toBlock: toBlockNumber,
  });
}
