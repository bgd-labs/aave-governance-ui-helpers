import {
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI,
} from '@bgd-labs/aave-address-book';
import { getContract, Hex, PublicClient, WalletClient } from 'viem';

export function govCoreContract(
  contractAddress: Hex,
  client: PublicClient,
  walletClient?: WalletClient,
) {
  if (walletClient) {
    return getContract({
      address: contractAddress,
      abi: IGovernanceCore_ABI,
      publicClient: client,
      walletClient,
    });
  } else {
    return getContract({
      address: contractAddress,
      abi: IGovernanceCore_ABI,
      publicClient: client,
    });
  }
}

export function govCoreDataHelperContract(
  contractAddress: Hex,
  client: PublicClient,
  walletClient?: WalletClient,
) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceDataHelper_ABI,
    publicClient: client,
    walletClient,
  });
}

export function votingMachineContract(
  contractAddress: Hex,
  client: PublicClient,
  walletClient?: WalletClient,
) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineWithProofs_ABI,
    publicClient: client,
    walletClient,
  });
}

export function votingMachineDataHelperContract(
  contractAddress: Hex,
  client: PublicClient,
  walletClient?: WalletClient,
) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineDataHelper_ABI,
    publicClient: client,
    walletClient,
  });
}

export function payloadsControllerContract(
  contractAddress: Hex,
  client: PublicClient,
  walletClient?: WalletClient,
) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerCore_ABI,
    publicClient: client,
    walletClient,
  });
}

export function payloadsControllerDataHelperContract(
  contractAddress: Hex,
  client: PublicClient,
  walletClient?: WalletClient,
) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerDataHelper_ABI,
    publicClient: client,
    walletClient,
  });
}
