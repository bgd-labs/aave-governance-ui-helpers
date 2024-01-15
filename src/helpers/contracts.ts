import {
  IERC20_ABI,
  IGovernanceDataHelper_ABI,
  IMetaDelegateHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI,
} from '@bgd-labs/aave-address-book';
import { getContract } from 'viem';

import { IAaveTokenV3_ABI } from '../abis/IAaveTokenV3';
import { IBaseVotingStrategy_ABI } from '../abis/IBaseVotingStrategy';
import { InitContract } from './types';

// main contracts
export function govCoreDataHelperContract({
  contractAddress,
  client,
  walletClient,
}: InitContract) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceDataHelper_ABI,
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
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
    client: { public: client, wallet: walletClient },
  });
}
