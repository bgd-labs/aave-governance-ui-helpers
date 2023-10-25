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

// src/helpers/getHistoryEvents.ts
var getHistoryEvents_exports = {};
__export(getHistoryEvents_exports, {
  getPayloadsCreated: () => getPayloadsCreated,
  getPayloadsExecuted: () => getPayloadsExecuted,
  getPayloadsQueued: () => getPayloadsQueued,
  getProposalActivated: () => getProposalActivated,
  getProposalActivatedOnVM: () => getProposalActivatedOnVM,
  getProposalCreated: () => getProposalCreated,
  getProposalQueued: () => getProposalQueued,
  getProposalVotingClosed: () => getProposalVotingClosed
});
module.exports = __toCommonJS(getHistoryEvents_exports);
var import_contracts = require("./contracts.js");
var import_eventsHelpres = require("./eventsHelpres.js");
function getPayloadsCreatedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock,
    chainId
  }) {
    const payloadsController = (0, import_contracts.payloadsControllerContract)({
      contractAddress,
      client
    });
    const events = yield client.getContractEvents({
      abi: payloadsController.abi,
      eventName: "PayloadCreated",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      payloadsController: contractAddress
    }));
  });
}
function getPayloadsCreated(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock,
    chainId
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getPayloadsCreatedEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber,
        chainId
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
function getProposalCreatedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const govCore = (0, import_contracts.govCoreContract)({ contractAddress, client });
    const events = yield client.getContractEvents({
      abi: govCore.abi,
      eventName: "ProposalCreated",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber)
    }));
  });
}
function getProposalCreated(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalCreatedEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
function getProposalActivatedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const govCore = (0, import_contracts.govCoreContract)({ contractAddress, client });
    const events = yield client.getContractEvents({
      abi: govCore.abi,
      eventName: "VotingActivated",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber)
    }));
  });
}
function getProposalActivated(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalActivatedEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
function getProposalActivatedOnVMEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const votingMachine = (0, import_contracts.votingMachineContract)({ contractAddress, client });
    const events = yield client.getContractEvents({
      abi: votingMachine.abi,
      eventName: "ProposalVoteStarted",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber)
    }));
  });
}
function getProposalActivatedOnVM(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalActivatedOnVMEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
function getProposalVotingClosedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const votingMachine = (0, import_contracts.votingMachineContract)({ contractAddress, client });
    const events = yield client.getContractEvents({
      abi: votingMachine.abi,
      eventName: "ProposalResultsSent",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber)
    }));
  });
}
function getProposalVotingClosed(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalVotingClosedEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
function getProposalQueuedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const govCore = (0, import_contracts.govCoreContract)({ contractAddress, client });
    const events = yield client.getContractEvents({
      abi: govCore.abi,
      eventName: "ProposalQueued",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber)
    }));
  });
}
function getProposalQueued(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalQueuedEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
function getPayloadsQueuedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock,
    chainId
  }) {
    const payloadsController = (0, import_contracts.payloadsControllerContract)({
      contractAddress,
      client
    });
    const events = yield client.getContractEvents({
      abi: payloadsController.abi,
      eventName: "PayloadQueued",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      payloadsController: contractAddress
    }));
  });
}
function getPayloadsQueued(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock,
    chainId
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getPayloadsQueuedEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber,
        chainId
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
function getPayloadsExecutedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock,
    chainId
  }) {
    const payloadsController = (0, import_contracts.payloadsControllerContract)({
      contractAddress,
      client
    });
    const events = yield client.getContractEvents({
      abi: payloadsController.abi,
      eventName: "PayloadExecuted",
      fromBlock: BigInt(startBlock),
      toBlock: BigInt(endBlock)
    });
    return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      payloadsController: contractAddress
    }));
  });
}
function getPayloadsExecuted(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock,
    chainId
  }) {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getPayloadsExecutedEvents({
        contractAddress,
        client,
        startBlock: startBlockNumber,
        endBlock: endBlockNumber,
        chainId
      });
    });
    return (0, import_eventsHelpres.getEventsBySteps)(startBlock, endBlock, import_eventsHelpres.blockLimit, callbackFunc);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPayloadsCreated,
  getPayloadsExecuted,
  getPayloadsQueued,
  getProposalActivated,
  getProposalActivatedOnVM,
  getProposalCreated,
  getProposalQueued,
  getProposalVotingClosed
});
//# sourceMappingURL=getHistoryEvents.js.map