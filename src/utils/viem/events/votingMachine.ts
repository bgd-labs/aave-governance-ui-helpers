import { IVotingMachineWithProofs_ABI } from '@bgd-labs/aave-address-book/abis';
import { strategicGetLogs } from '@bgd-labs/js-utils';
import { Address, Client, getAbiItem } from 'viem';

export async function getVotingMachineEvents(
  address: Address,
  client: Client,
  fromBlockNumber: bigint,
  toBlockNumber: bigint,
) {
  return await strategicGetLogs({
    client,
    events: [
      getAbiItem({
        abi: IVotingMachineWithProofs_ABI,
        name: 'ProposalResultsSent',
      }),
      getAbiItem({ abi: IVotingMachineWithProofs_ABI, name: 'VoteEmitted' }),
      getAbiItem({
        abi: IVotingMachineWithProofs_ABI,
        name: 'ProposalVoteConfigurationBridged',
      }),
      getAbiItem({
        abi: IVotingMachineWithProofs_ABI,
        name: 'ProposalVoteStarted',
      }),
    ],
    address: address,
    fromBlock: fromBlockNumber,
    toBlock: toBlockNumber,
  });
}
