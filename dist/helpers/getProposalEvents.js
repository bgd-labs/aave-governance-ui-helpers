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

// src/helpers/getProposalEvents.ts
var getProposalEvents_exports = {};
__export(getProposalEvents_exports, {
  getVoters: () => getVoters
});
module.exports = __toCommonJS(getProposalEvents_exports);
var import_bignumber = require("./bignumber.js");
var import_contracts = require("./contracts.js");
var import_eventsHelpres = require("./eventsHelpres.js");
function getVoteEvents(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const votingMachine = (0, import_contracts.votingMachineContract)(contractAddress, client);
    const events = yield client.getContractEvents({
      abi: votingMachine.abi,
      eventName: "VoteEmitted",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      proposalId: Number(event.args.proposalId),
      address: (event.args.voter || "").toString(),
      support: event.args.support || false,
      votingPower: (0, import_bignumber.normalizeBN)(
        (event.args.votingPower || "").toString(),
        18
      ).toNumber(),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      chainId
    }));
  });
}
function getVoters(contractAddress, client, endBlock, startBlock, blockLimit, chainId) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getVoteEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber,
        chainId
      );
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getVoters
});
//# sourceMappingURL=getProposalEvents.js.map