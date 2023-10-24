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

// src/helpers/clients.ts
var clients_exports = {};
__export(clients_exports, {
  clients: () => clients
});
module.exports = __toCommonJS(clients_exports);
var import_viem = require("viem");
var import_chains = require("viem/chains");
function initPublicClient(chain) {
  return (0, import_viem.createPublicClient)({
    batch: {
      multicall: true
    },
    chain,
    transport: (0, import_viem.http)()
  });
}
var clients = {
  [import_chains.mainnet.id]: initPublicClient(import_chains.mainnet),
  [import_chains.polygon.id]: initPublicClient(import_chains.polygon),
  [import_chains.avalanche.id]: initPublicClient(import_chains.avalanche),
  [import_chains.bsc.id]: initPublicClient(import_chains.bsc),
  [import_chains.base.id]: initPublicClient(import_chains.base),
  [import_chains.arbitrum.id]: initPublicClient(import_chains.arbitrum),
  [import_chains.metis.id]: initPublicClient(import_chains.metis),
  [import_chains.optimism.id]: initPublicClient(import_chains.optimism),
  // testnets
  [import_chains.avalancheFuji.id]: initPublicClient(import_chains.avalancheFuji),
  [import_chains.goerli.id]: initPublicClient(import_chains.goerli),
  [import_chains.sepolia.id]: initPublicClient(import_chains.sepolia)
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clients
});
//# sourceMappingURL=clients.js.map