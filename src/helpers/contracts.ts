import {
  IDataWarehouse_ABI,
  IERC20_ABI,
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IMetaDelegateHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI,
} from '@bgd-labs/aave-address-book';
import { getContract } from 'viem';

import { IAaveTokenV3_ABI } from '../abis/IAaveTokenV3';
import { IATokenWithDelegation_ABI } from '../abis/IATokenWithDelegation';
import { IBaseVotingStrategy_ABI } from '../abis/IBaseVotingStrategy';
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

export function erc20Contract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IERC20_ABI,
    publicClient: client,
    walletClient,
  });
}

export function aaveTokenV3Contract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IAaveTokenV3_ABI,
    publicClient: client,
    walletClient,
  });
}

export function aTokenWithDelegationContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IATokenWithDelegation_ABI,
    publicClient: client,
    walletClient,
  });
}

export function baseVotingStrategyContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IBaseVotingStrategy_ABI,
    publicClient: client,
    walletClient,
  });
}
