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
import { normalizeBN } from "./bignumber.mjs";
import { votingMachineContract } from "./contracts.mjs";
import { getEventsBySteps } from "./eventsHelpres.mjs";
function getVoteEvents(contractAddress, client, startBlock, endBlock, chainId) {
  return __async(this, null, function* () {
    const votingMachine = votingMachineContract({
      contractAddress,
      client
    });
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
      votingPower: normalizeBN(
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
    return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
  });
}
export {
  getVoters
};
//# sourceMappingURL=getProposalEvents.mjs.map