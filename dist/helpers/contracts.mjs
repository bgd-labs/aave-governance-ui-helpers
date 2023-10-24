// src/helpers/contracts.ts
import {
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI
} from "@bgd-labs/aave-address-book";
import { getContract } from "viem";
function govCoreContract(contractAddress, client) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceCore_ABI,
    publicClient: client
  });
}
function govCoreDataHelperContract(contractAddress, client) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceDataHelper_ABI,
    publicClient: client
  });
}
function votingMachineContract(contractAddress, client) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineWithProofs_ABI,
    publicClient: client
  });
}
function votingMachineDataHelperContract(contractAddress, client) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineDataHelper_ABI,
    publicClient: client
  });
}
function payloadsControllerContract(contractAddress, client) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerCore_ABI,
    publicClient: client
  });
}
function payloadsControllerDataHelperContract(contractAddress, client) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerDataHelper_ABI,
    publicClient: client
  });
}
export {
  govCoreContract,
  govCoreDataHelperContract,
  payloadsControllerContract,
  payloadsControllerDataHelperContract,
  votingMachineContract,
  votingMachineDataHelperContract
};
//# sourceMappingURL=contracts.mjs.map