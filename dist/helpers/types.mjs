// src/helpers/types.ts
var BasicProposalState = /* @__PURE__ */ ((BasicProposalState2) => {
  BasicProposalState2[BasicProposalState2["Null"] = 0] = "Null";
  BasicProposalState2[BasicProposalState2["Created"] = 1] = "Created";
  BasicProposalState2[BasicProposalState2["Active"] = 2] = "Active";
  BasicProposalState2[BasicProposalState2["Queued"] = 3] = "Queued";
  BasicProposalState2[BasicProposalState2["Executed"] = 4] = "Executed";
  BasicProposalState2[BasicProposalState2["Failed"] = 5] = "Failed";
  BasicProposalState2[BasicProposalState2["Cancelled"] = 6] = "Cancelled";
  BasicProposalState2[BasicProposalState2["Expired"] = 7] = "Expired";
  return BasicProposalState2;
})(BasicProposalState || {});
var VotingMachineProposalState = /* @__PURE__ */ ((VotingMachineProposalState2) => {
  VotingMachineProposalState2[VotingMachineProposalState2["NotCreated"] = 0] = "NotCreated";
  VotingMachineProposalState2[VotingMachineProposalState2["Active"] = 1] = "Active";
  VotingMachineProposalState2[VotingMachineProposalState2["Finished"] = 2] = "Finished";
  VotingMachineProposalState2[VotingMachineProposalState2["SentToGovernance"] = 3] = "SentToGovernance";
  return VotingMachineProposalState2;
})(VotingMachineProposalState || {});
var PayloadState = /* @__PURE__ */ ((PayloadState2) => {
  PayloadState2[PayloadState2["None"] = 0] = "None";
  PayloadState2[PayloadState2["Created"] = 1] = "Created";
  PayloadState2[PayloadState2["Queued"] = 2] = "Queued";
  PayloadState2[PayloadState2["Executed"] = 3] = "Executed";
  PayloadState2[PayloadState2["Cancelled"] = 4] = "Cancelled";
  PayloadState2[PayloadState2["Expired"] = 5] = "Expired";
  return PayloadState2;
})(PayloadState || {});
var ProposalState = /* @__PURE__ */ ((ProposalState2) => {
  ProposalState2[ProposalState2["Created"] = 0] = "Created";
  ProposalState2[ProposalState2["Active"] = 1] = "Active";
  ProposalState2[ProposalState2["Succeed"] = 2] = "Succeed";
  ProposalState2[ProposalState2["Defeated"] = 3] = "Defeated";
  ProposalState2[ProposalState2["Executed"] = 4] = "Executed";
  ProposalState2[ProposalState2["Expired"] = 5] = "Expired";
  ProposalState2[ProposalState2["Canceled"] = 6] = "Canceled";
  return ProposalState2;
})(ProposalState || {});
var ProposalStateWithName = /* @__PURE__ */ ((ProposalStateWithName2) => {
  ProposalStateWithName2["Created"] = "Created";
  ProposalStateWithName2["Active"] = "Voting";
  ProposalStateWithName2["Succeed"] = "Passed";
  ProposalStateWithName2["Failed"] = "Failed";
  ProposalStateWithName2["Defeated"] = "Failed";
  ProposalStateWithName2["Executed"] = "Executed";
  ProposalStateWithName2["Expired"] = "Expired";
  ProposalStateWithName2["Canceled"] = "Canceled";
  ProposalStateWithName2["ActiveAll"] = "Active";
  return ProposalStateWithName2;
})(ProposalStateWithName || {});
var ProposalEstimatedState = /* @__PURE__ */ ((ProposalEstimatedState2) => {
  ProposalEstimatedState2["Active"] = "Will open for voting";
  ProposalEstimatedState2["Succeed"] = "Will pass";
  ProposalEstimatedState2["Defeated"] = "Will fail";
  ProposalEstimatedState2["ProposalExecuted"] = "Proposal will be executed";
  ProposalEstimatedState2["PayloadsExecuted"] = "Payloads will start being executed";
  ProposalEstimatedState2["Expired"] = "Will expire";
  return ProposalEstimatedState2;
})(ProposalEstimatedState || {});
var ProposalWaitForState = /* @__PURE__ */ ((ProposalWaitForState2) => {
  ProposalWaitForState2["WaitForActivateVoting"] = "Pending voting activation";
  ProposalWaitForState2["WaitForCloseVoting"] = "Pending voting closure";
  ProposalWaitForState2["WaitForQueueProposal"] = "Proposal is time-locked";
  ProposalWaitForState2["WaitForExecuteProposal"] = "Pending proposal execution";
  ProposalWaitForState2["WaitForQueuePayloads"] = "Payloads are time-locked";
  ProposalWaitForState2["WaitForExecutePayloads"] = "Pending payloads execution";
  return ProposalWaitForState2;
})(ProposalWaitForState || {});
export {
  BasicProposalState,
  PayloadState,
  ProposalEstimatedState,
  ProposalState,
  ProposalStateWithName,
  ProposalWaitForState,
  VotingMachineProposalState
};
//# sourceMappingURL=types.mjs.map