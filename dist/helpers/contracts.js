"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/helpers/contracts.ts
var contracts_exports = {};
__export(contracts_exports, {
  govCoreContract: () => govCoreContract,
  govCoreDataHelperContract: () => govCoreDataHelperContract,
  payloadsControllerContract: () => payloadsControllerContract,
  payloadsControllerDataHelperContract: () => payloadsControllerDataHelperContract,
  votingMachineContract: () => votingMachineContract,
  votingMachineDataHelperContract: () => votingMachineDataHelperContract
});
module.exports = __toCommonJS(contracts_exports);
var import_aave_address_book = require("@bgd-labs/aave-address-book");
var import_viem = require("viem");
function govCoreContract({
  contractAddress,
  client,
  walletClient
}) {
  return (0, import_viem.getContract)({
    address: contractAddress,
    abi: import_aave_address_book.IGovernanceCore_ABI,
    publicClient: client,
    walletClient
  });
}
function govCoreDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return (0, import_viem.getContract)({
    address: contractAddress,
    abi: import_aave_address_book.IGovernanceDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function votingMachineContract({
  contractAddress,
  client,
  walletClient
}) {
  return (0, import_viem.getContract)({
    address: contractAddress,
    abi: import_aave_address_book.IVotingMachineWithProofs_ABI,
    publicClient: client,
    walletClient
  });
}
function votingMachineDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return (0, import_viem.getContract)({
    address: contractAddress,
    abi: import_aave_address_book.IVotingMachineDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function payloadsControllerContract({
  contractAddress,
  client,
  walletClient
}) {
  return (0, import_viem.getContract)({
    address: contractAddress,
    abi: import_aave_address_book.IPayloadsControllerCore_ABI,
    publicClient: client,
    walletClient
  });
}
function payloadsControllerDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return (0, import_viem.getContract)({
    address: contractAddress,
    abi: import_aave_address_book.IPayloadsControllerDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  govCoreContract,
  govCoreDataHelperContract,
  payloadsControllerContract,
  payloadsControllerDataHelperContract,
  votingMachineContract,
  votingMachineDataHelperContract
});
//# sourceMappingURL=contracts.js.map