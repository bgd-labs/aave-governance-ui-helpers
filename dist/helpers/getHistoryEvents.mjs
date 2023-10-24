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
function getPayloadsCreatedEvents(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const payloadsController = payloadsControllerContract(
      contractAddress,
      client
    );
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
function getPayloadsCreated(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getPayloadsCreatedEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber,
        chainId
      );
    });
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalCreatedEvents(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const govCore = govCoreContract(contractAddress, client);
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
function getProposalCreated(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalCreatedEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber
      );
    });
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalActivatedEvents(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const govCore = govCoreContract(contractAddress, client);
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
function getProposalActivated(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalActivatedEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber
      );
    });
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalActivatedOnVMEvents(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const votingMachine = votingMachineContract(contractAddress, client);
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
function getProposalActivatedOnVM(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalActivatedOnVMEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber
      );
    });
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalVotingClosedEvents(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const votingMachine = votingMachineContract(contractAddress, client);
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
function getProposalVotingClosed(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalVotingClosedEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber
      );
    });
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getProposalQueuedEvents(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const govCore = govCoreContract(contractAddress, client);
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
function getProposalQueued(contractAddress, client, startBlock, endBlock) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getProposalQueuedEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber
      );
    });
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getPayloadsQueuedEvents(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const payloadsController = payloadsControllerContract(
      contractAddress,
      client
    );
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
function getPayloadsQueued(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getPayloadsQueuedEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber,
        chainId
      );
    });
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
function getPayloadsExecutedEvents(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const payloadsController = payloadsControllerContract(
      contractAddress,
      client
    );
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
function getPayloadsExecuted(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const callbackFunc = (startBlockNumber, endBlockNumber) => __async(this, null, function* () {
      return yield getPayloadsExecutedEvents(
        contractAddress,
        client,
        startBlockNumber,
        endBlockNumber,
        chainId
      );
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