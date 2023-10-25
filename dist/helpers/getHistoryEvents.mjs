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
import {
  govCoreContract,
  payloadsControllerContract,
  votingMachineContract
} from "./contracts.mjs";
import { blockLimit, getEventsBySteps } from "./eventsHelpres.mjs";
function getPayloadsCreatedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock,
    chainId
  }) {
    const payloadsController = payloadsControllerContract({
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalCreatedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const govCore = govCoreContract({ contractAddress, client });
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalActivatedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const govCore = govCoreContract({ contractAddress, client });
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalActivatedOnVMEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const votingMachine = votingMachineContract({ contractAddress, client });
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalVotingClosedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const votingMachine = votingMachineContract({ contractAddress, client });
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalQueuedEvents(_0) {
  return __async(this, arguments, function* ({
    contractAddress,
    client,
    startBlock,
    endBlock
  }) {
    const govCore = govCoreContract({ contractAddress, client });
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
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
    const payloadsController = payloadsControllerContract({
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
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
    const payloadsController = payloadsControllerContract({
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
export {
  getPayloadsCreated,
  getPayloadsExecuted,
  getPayloadsQueued,
  getProposalActivated,
  getProposalActivatedOnVM,
  getProposalCreated,
  getProposalQueued,
  getProposalVotingClosed
};
//# sourceMappingURL=getHistoryEvents.mjs.map