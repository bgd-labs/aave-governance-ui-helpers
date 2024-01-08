import { IGovernanceCore_ABI } from '@bgd-labs/aave-address-book';
import { getLogsRecursive } from '@bgd-labs/js-utils';
import { Address, PublicClient, getAbiItem, getContract } from 'viem';

export enum ProposalState {
  Null, // proposal does not exists
  Created, // created, waiting for a cooldown to initiate the balances snapshot
  Active, // balances snapshot set, voting in progress
  Queued, // voting results submitted, but proposal is under grace period when guardian can cancel it
  Executed, // results sent to the execution chain(s)
  Failed, // voting was not successful
  Cancelled, // got cancelled by guardian, or because proposition power of creator dropped below allowed minimum
  Expired,
}

export function isProposalFinal(state: ProposalState) {
  return [
    ProposalState.Executed,
    ProposalState.Failed,
    ProposalState.Cancelled,
    ProposalState.Expired,
  ].includes(state);
}

export async function getGovernanceEvents(
  governanceAddress: Address,
  publicClient: PublicClient,
  fromBlockNumber: bigint,
  toBlockNumber: bigint,
) {
  console.log(fromBlockNumber, toBlockNumber);
  const logs = await getLogsRecursive({
    client: publicClient,
    events: [
      getAbiItem({ abi: IGovernanceCore_ABI, name: 'ProposalCreated' }),
      getAbiItem({ abi: IGovernanceCore_ABI, name: 'ProposalQueued' }),
      getAbiItem({ abi: IGovernanceCore_ABI, name: 'ProposalExecuted' }),
      getAbiItem({ abi: IGovernanceCore_ABI, name: 'PayloadSent' }),
      getAbiItem({ abi: IGovernanceCore_ABI, name: 'VotingActivated' }),
      getAbiItem({ abi: IGovernanceCore_ABI, name: 'ProposalCanceled' }),
    ],
    address: governanceAddress,
    fromBlock: fromBlockNumber,
    toBlock: toBlockNumber,
  });
  return logs;
}
