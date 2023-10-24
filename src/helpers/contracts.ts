import {
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI,
} from '@bgd-labs/aave-address-book';
import { PublicClient, WalletClient } from '@wagmi/core';
import { getContract, Hex } from 'viem';

export type InitContract = {
  contractAddress: Hex;
  client: PublicClient;
  walletClient?: WalletClient;
};

export function govCoreContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceCore_ABI,
    publicClient: client,
    walletClient,
  });
}

export function govCoreDataHelperContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceDataHelper_ABI,
    publicClient: client,
    walletClient,
  });
}

export function votingMachineContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineWithProofs_ABI,
    publicClient: client,
    walletClient,
  });
}

export function votingMachineDataHelperContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineDataHelper_ABI,
    publicClient: client,
    walletClient,
  });
}

export function payloadsControllerContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerCore_ABI,
    publicClient: client,
    walletClient,
  });
}

export function payloadsControllerDataHelperContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerDataHelper_ABI,
    publicClient: client,
    walletClient,
  });
}
