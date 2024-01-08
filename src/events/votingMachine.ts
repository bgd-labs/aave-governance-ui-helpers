import { IVotingMachineWithProofs_ABI } from '@bgd-labs/aave-address-book';
import { getLogsRecursive } from '@bgd-labs/js-utils';
import { Address, PublicClient, getAbiItem } from 'viem';

export async function getVotingMachineEvents(
  address: Address,
  publicClient: PublicClient,
  fromBlockNumber: bigint,
  toBlockNumber: bigint,
) {
  const logs = await getLogsRecursive({
    client: publicClient,
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
  return logs;
}
