// src/helpers/contracts.ts
import {
  IDataWarehouse_ABI,
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IMetaDelegateHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI
} from "@bgd-labs/aave-address-book";
import { getContract } from "viem";
function govCoreContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceCore_ABI,
    publicClient: client,
    walletClient
  });
}
function govCoreDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function votingMachineContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineWithProofs_ABI,
    publicClient: client,
    walletClient
  });
}
function votingMachineDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function payloadsControllerContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerCore_ABI,
    publicClient: client,
    walletClient
  });
}
function payloadsControllerDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function metaDelegateHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IMetaDelegateHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function dataWarehouseContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IDataWarehouse_ABI,
    publicClient: client,
    walletClient
  });
}
export {
  dataWarehouseContract,
  govCoreContract,
  govCoreDataHelperContract,
  metaDelegateHelperContract,
  payloadsControllerContract,
  payloadsControllerDataHelperContract,
  votingMachineContract,
  votingMachineDataHelperContract
};
//# sourceMappingURL=contracts.mjs.map