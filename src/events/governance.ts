import { IGovernanceCore_ABI } from '@bgd-labs/aave-address-book';
import { strategicGetLogs } from '@bgd-labs/js-utils';
import type { ExtractAbiEvent } from 'abitype';
import { Address, Client, getAbiItem } from 'viem';

import { ProposalState } from '../helpers/types';

export type ProposalCreatedEvent = ExtractAbiEvent<
  typeof IGovernanceCore_ABI,
  'ProposalCreated'
>;
export type ProposalQueuedEvent = ExtractAbiEvent<
  typeof IGovernanceCore_ABI,
  'ProposalQueued'
>;
export type ProposalCanceledEvent = ExtractAbiEvent<
  typeof IGovernanceCore_ABI,
  'ProposalCanceled'
>;
export type ProposalExecutedEvent = ExtractAbiEvent<
  typeof IGovernanceCore_ABI,
  'ProposalExecuted'
>;
export type ProposalPayloadSentEvent = ExtractAbiEvent<
  typeof IGovernanceCore_ABI,
  'PayloadSent'
>;
export type ProposalVotingActivatedEvent = ExtractAbiEvent<
  typeof IGovernanceCore_ABI,
  'VotingActivated'
>;

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
  client: Client,
  fromBlockNumber: bigint,
  toBlockNumber: bigint,
) {
  const logs = await strategicGetLogs({
    client,
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
