"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/helpers/getProposalData.ts
var getProposalData_exports = {};
__export(getProposalData_exports, {
  formatVotingMachineData: () => formatVotingMachineData,
  getDetailedProposalsData: () => getDetailedProposalsData,
  getVotingMachineProposalState: () => getVotingMachineProposalState,
  updateVotingMachineData: () => updateVotingMachineData
});
module.exports = __toCommonJS(getProposalData_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_checkHash = require("./checkHash.js");
var import_types = require("./types.js");
function getVotingMachineProposalState(proposal) {
  const now = (0, import_dayjs.default)().unix();
  if (proposal.votingMachineData.startTime === 0) {
    return import_types.VotingMachineProposalState.NotCreated;
  } else if (now <= proposal.votingMachineData.endTime) {
    return import_types.VotingMachineProposalState.Active;
  } else if (proposal.votingMachineData.votingClosedAndSentBlockNumber === 0) {
    return import_types.VotingMachineProposalState.Finished;
  } else {
    return import_types.VotingMachineProposalState.SentToGovernance;
  }
}
function formatVotingMachineData(id, votingMachineData) {
  return {
    id,
    forVotes: votingMachineData.proposalData.forVotes.toString(),
    againstVotes: votingMachineData.proposalData.againstVotes.toString(),
    startTime: votingMachineData.proposalData.startTime,
    endTime: votingMachineData.proposalData.endTime,
    votingClosedAndSentBlockNumber: Number(
      votingMachineData.proposalData.votingClosedAndSentBlockNumber
    ),
    votingClosedAndSentTimestamp: votingMachineData.proposalData.votingClosedAndSentTimestamp,
    l1BlockHash: (votingMachineData == null ? void 0 : votingMachineData.voteConfig.l1ProposalBlockHash) || import_checkHash.HashZero,
    strategy: votingMachineData.strategy,
    sentToGovernance: votingMachineData.proposalData.sentToGovernance,
    createdBlock: Number(votingMachineData.proposalData.creationBlockNumber),
    votedInfo: {
      support: votingMachineData.votedInfo.support,
      votingPower: votingMachineData.votedInfo.votingPower.toString()
    },
    votingAssets: votingMachineData.votingAssets,
    hasRequiredRoots: votingMachineData.hasRequiredRoots
  };
}
function updateVotingMachineData(proposals, votingMachineDataHelperData, ids) {
  const proposalsData = [];
  ids.forEach((id) => {
    const govData = proposals.find((proposal) => (proposal == null ? void 0 : proposal.id) === id);
    if (govData) {
      const votingMachineData = votingMachineDataHelperData.find(
        (proposal) => Number(proposal.proposalData.id) === govData.id
      ) || votingMachineDataHelperData[0];
      const proposalData = {
        id: govData.id,
        votingDuration: +(votingMachineData == null ? void 0 : votingMachineData.voteConfig.votingDuration) || govData.votingDuration,
        creationTime: govData.creationTime,
        accessLevel: govData.accessLevel,
        basicState: govData.basicState,
        queuingTime: govData.queuingTime,
        ipfsHash: govData.ipfsHash,
        initialPayloads: govData.initialPayloads,
        snapshotBlockHash: govData.snapshotBlockHash,
        creator: govData.creator,
        canceledAt: govData.canceledAt,
        votingActivationTime: govData.votingActivationTime,
        votingChainId: govData.votingChainId,
        votingMachineData: formatVotingMachineData(
          govData.id,
          votingMachineData
        ),
        prerender: govData.prerender
      };
      proposalsData.push(proposalData);
    }
  });
  return proposalsData;
}
function getDetailedProposalsData(govCoreDataHelperData, votingMachineDataHelperData, ids, prerender) {
  const proposalsData = [];
  for (let i = 0; i < ids.length; i++) {
    const govData = govCoreDataHelperData[i];
    const votingMachineData = votingMachineDataHelperData.find(
      (proposal) => Number(proposal.proposalData.id) === Number(govData.id)
    ) || votingMachineDataHelperData[i];
    const proposalData = {
      id: Number(govData.id),
      votingDuration: +(votingMachineData == null ? void 0 : votingMachineData.voteConfig.votingDuration) || +govData.proposalData.votingDuration,
      creationTime: +govData.proposalData.creationTime,
      accessLevel: +govData.proposalData.accessLevel,
      basicState: +govData.proposalData.state,
      queuingTime: +govData.proposalData.queuingTime,
      ipfsHash: govData.proposalData.ipfsHash,
      initialPayloads: govData.proposalData.payloads.map((payload) => {
        return {
          id: payload.payloadId,
          chainId: Number(payload.chain),
          payloadsController: payload.payloadsController
        };
      }),
      snapshotBlockHash: govData.proposalData.snapshotBlockHash,
      creator: govData.proposalData.creator,
      canceledAt: govData.proposalData.cancelTimestamp,
      votingActivationTime: govData.proposalData.votingActivationTime,
      votingChainId: Number(govData.votingChainId),
      votingMachineData: formatVotingMachineData(
        Number(govData.id),
        votingMachineData
      ),
      prerender: !!prerender
    };
    proposalsData.push(proposalData);
  }
  return proposalsData;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  formatVotingMachineData,
  getDetailedProposalsData,
  getVotingMachineProposalState,
  updateVotingMachineData
});
//# sourceMappingURL=getProposalData.js.map