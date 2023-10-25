import {
  IDataWarehouse_ABI,
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IMetaDelegateHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI,
} from '@bgd-labs/aave-address-book';
import { getContract } from 'viem';

import { InitContract } from './types';

// main contracts
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
// end

// additional contracts
export function metaDelegateHelperContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IMetaDelegateHelper_ABI,
    publicClient: client,
    walletClient,
  });
}

export function dataWarehouseContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IDataWarehouse_ABI,
    publicClient: client,
    walletClient,
  });
}
