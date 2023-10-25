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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/helpers/getBlockNumberByTimestamp.ts
var getBlockNumberByTimestamp_exports = {};
__export(getBlockNumberByTimestamp_exports, {
  getBlockNumberByTimestamp: () => getBlockNumberByTimestamp
});
module.exports = __toCommonJS(getBlockNumberByTimestamp_exports);
var import_chains = require("viem/chains");
var getAverageBlockTime = (chainId) => {
  switch (chainId) {
    case import_chains.mainnet.id:
      return 13;
    case import_chains.polygon.id:
      return 3;
    case import_chains.avalanche.id:
      return 5;
    case import_chains.bsc.id:
      return 4;
    case import_chains.base.id:
      return 2;
    case import_chains.arbitrum.id:
      return 1;
    case import_chains.metis.id:
      return 2;
    case import_chains.optimism.id:
      return 2;
    case import_chains.sepolia.id:
      return 13;
    case import_chains.goerli.id:
      return 13;
    case import_chains.optimismGoerli.id:
      return 2;
    case import_chains.avalancheFuji.id:
      return 5;
    case import_chains.polygonMumbai.id:
      return 3;
    case import_chains.bscTestnet.id:
      return 4;
    default:
      return 13;
  }
};
function getBlockNumberByTimestamp(_0) {
  return __async(this, arguments, function* ({
    client,
    chainId,
    targetTimestamp
  }) {
    const blocksDiff = 100;
    const MAX_ITERATIONS = 10;
    let iterationCount = 0;
    let averageBlockTime = getAverageBlockTime(chainId);
    const currentBlock = yield client.getBlock({ blockTag: "latest" });
    if (targetTimestamp > currentBlock.timestamp) {
      throw new Error("Target timestamp is in the future.");
    }
    let previousBlockTimestamp = Number(currentBlock.timestamp);
    let previousBlockNumber = Number(currentBlock.number);
    let estimatedBlockNumber;
    let estimatedBlock;
    do {
      if (previousBlockTimestamp >= targetTimestamp) {
        estimatedBlockNumber = previousBlockNumber - Math.floor(
          (previousBlockTimestamp - targetTimestamp) / averageBlockTime
        );
      } else {
        estimatedBlockNumber = previousBlockNumber + Math.floor(
          (previousBlockTimestamp - targetTimestamp) / averageBlockTime
        );
      }
      if (estimatedBlockNumber < 0) {
        throw new Error("Estimated block number is below zero.");
      }
      estimatedBlock = yield client.getBlock({
        blockNumber: BigInt(estimatedBlockNumber)
      });
      averageBlockTime = Math.ceil(
        (Number(estimatedBlock.timestamp) - previousBlockTimestamp) / (estimatedBlockNumber - previousBlockNumber)
      );
      previousBlockTimestamp = Number(estimatedBlock.timestamp);
      previousBlockNumber = Number(estimatedBlock.number);
      iterationCount++;
    } while (Math.abs(Number(estimatedBlock.timestamp) - targetTimestamp) > blocksDiff * averageBlockTime && iterationCount < MAX_ITERATIONS);
    if (iterationCount === MAX_ITERATIONS) {
      throw new Error("Maximum iterations reached without converging.");
    }
    let minBlockNumber = Number(estimatedBlock.number) - 1;
    let maxBlockNumber = Number(estimatedBlock.number) + blocksDiff * 2;
    if (estimatedBlock.timestamp > targetTimestamp) {
      minBlockNumber = Number(estimatedBlock.number) - blocksDiff * 2;
      maxBlockNumber = Number(estimatedBlock.number);
    }
    return {
      minBlockNumber,
      maxBlockNumber
    };
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBlockNumberByTimestamp
});
//# sourceMappingURL=getBlockNumberByTimestamp.js.map