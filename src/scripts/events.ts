import {
  IGovernanceCore_ABI,
  IPayloadsControllerCore_ABI,
  IVotingMachineWithProofs_ABI,
} from '@bgd-labs/aave-address-book';
import { strategicGetLogs } from '@bgd-labs/js-utils';
import { Address, Client, getAbiItem } from 'viem';

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
