import {
  IGovernanceCore_ABI,
  IPayloadsControllerCore_ABI,
  IVotingMachineWithProofs_ABI,
} from '@bgd-labs/aave-address-book';
import { strategicGetLogs } from '@bgd-labs/js-utils';
import type { ExtractAbiEvent } from 'abitype';
import { Address, Client, getAbiItem } from 'viem';

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
export type ProposalResultsSentEvent = ExtractAbiEvent<
  typeof IVotingMachineWithProofs_ABI,
  'ProposalResultsSent'
>;
export type VoteEmittedEvent = ExtractAbiEvent<
  typeof IVotingMachineWithProofs_ABI,
  'VoteEmitted'
>;
export type ProposalVoteConfigurationBridgedEvent = ExtractAbiEvent<
  typeof IVotingMachineWithProofs_ABI,
  'ProposalVoteConfigurationBridged'
>;
export type ProposalVoteStartedEvent = ExtractAbiEvent<
  typeof IVotingMachineWithProofs_ABI,
  'ProposalVoteStarted'
>;
export type PayloadCreatedEvent = ExtractAbiEvent<
  typeof IPayloadsControllerCore_ABI,
  'PayloadCreated'
>;
export type PayloadQueuedEvent = ExtractAbiEvent<
  typeof IPayloadsControllerCore_ABI,
  'PayloadQueued'
>;
export type PayloadExecutedEvent = ExtractAbiEvent<
  typeof IPayloadsControllerCore_ABI,
  'PayloadExecuted'
>;

export async function getGovernanceEvents(
  governanceAddress: Address,
  client: Client,
  fromBlockNumber: bigint,
  toBlockNumber: bigint,
) {
  return await strategicGetLogs({
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
