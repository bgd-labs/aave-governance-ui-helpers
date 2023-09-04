// payloads created
import { IGovernanceCore } from '../contracts/IGovernanceCore';
import { IPayloadsControllerCore } from '../contracts/IPayloadsControllerCore';
import { IVotingMachineWithProofs } from '../contracts/IVotingMachineWithProofs';
import { blockLimit, getEventsBySteps } from './eventsHelpres';

async function getPayloadsCreatedEvents(
  startBlock: number,
  endBlock: number,
  payloadsController: IPayloadsControllerCore,
  payloadsControllerAddress: string,
  chainId: number,
) {
  const events = await payloadsController.queryFilter(
    payloadsController.filters.PayloadCreated(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
      payloadsController: payloadsControllerAddress,
    }));
}

export async function getPayloadsCreated(
  startBlock: number,
  endBlock: number,
  payloadsController: IPayloadsControllerCore,
  payloadsControllerAddress: string,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsCreatedEvents(
      startBlockNumber,
      endBlockNumber,
      payloadsController,
      payloadsControllerAddress,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal created
async function getProposalCreatedEvents(
  startBlock: number,
  endBlock: number,
  govCore: IGovernanceCore,
) {
  const events = await govCore.queryFilter(
    govCore.filters.ProposalCreated(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      proposalId: event.args.proposalId.toNumber(),
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
    }));
}

export async function getProposalCreated(
  startBlock: number,
  endBlock: number,
  govCore: IGovernanceCore,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalCreatedEvents(
      startBlockNumber,
      endBlockNumber,
      govCore,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal activate for voting
async function getProposalActivatedEvents(
  startBlock: number,
  endBlock: number,
  govCore: IGovernanceCore,
) {
  const events = await govCore.queryFilter(
    govCore.filters.VotingActivated(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      proposalId: event.args.proposalId.toNumber(),
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
    }));
}

export async function getProposalActivated(
  startBlock: number,
  endBlock: number,
  govCore: IGovernanceCore,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalActivatedEvents(
      startBlockNumber,
      endBlockNumber,
      govCore,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// voting activate on VM
async function getProposalActivatedOnVMEvents(
  startBlock: number,
  endBlock: number,
  votingMachine: IVotingMachineWithProofs,
) {
  const events = await votingMachine.queryFilter(
    votingMachine.filters.ProposalVoteStarted(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      proposalId: event.args.proposalId.toNumber(),
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
    }));
}

export async function getProposalActivatedOnVM(
  startBlock: number,
  endBlock: number,
  votingMachine: IVotingMachineWithProofs,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalActivatedOnVMEvents(
      startBlockNumber,
      endBlockNumber,
      votingMachine,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// voting closed on VM and voting results sent
async function getProposalVotingClosedEvents(
  startBlock: number,
  endBlock: number,
  votingMachine: IVotingMachineWithProofs,
) {
  const events = await votingMachine.queryFilter(
    votingMachine.filters.ProposalResultsSent(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      proposalId: event.args.proposalId.toNumber(),
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
    }));
}

export async function getProposalVotingClosed(
  startBlock: number,
  endBlock: number,
  votingMachine: IVotingMachineWithProofs,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalVotingClosedEvents(
      startBlockNumber,
      endBlockNumber,
      votingMachine,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal queued
async function getProposalQueuedEvents(
  startBlock: number,
  endBlock: number,
  govCore: IGovernanceCore,
) {
  const events = await govCore.queryFilter(
    govCore.filters.ProposalQueued(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      proposalId: event.args.proposalId.toNumber(),
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
    }));
}

export async function getProposalQueued(
  startBlock: number,
  endBlock: number,
  govCore: IGovernanceCore,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalQueuedEvents(
      startBlockNumber,
      endBlockNumber,
      govCore,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// payloads queued
async function getPayloadsQueuedEvents(
  startBlock: number,
  endBlock: number,
  payloadsController: IPayloadsControllerCore,
  payloadsControllerAddress: string,
  chainId: number,
) {
  const events = await payloadsController.queryFilter(
    payloadsController.filters.PayloadQueued(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
      payloadsController: payloadsControllerAddress,
    }));
}

export async function getPayloadsQueued(
  startBlock: number,
  endBlock: number,
  payloadsController: IPayloadsControllerCore,
  payloadsControllerAddress: string,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsQueuedEvents(
      startBlockNumber,
      endBlockNumber,
      payloadsController,
      payloadsControllerAddress,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// payloads executed
async function getPayloadsExecutedEvents(
  startBlock: number,
  endBlock: number,
  payloadsController: IPayloadsControllerCore,
  payloadsControllerAddress: string,
  chainId: number,
) {
  const events = await payloadsController.queryFilter(
    payloadsController.filters.PayloadExecuted(),
    startBlock,
    endBlock,
  );

  return events
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
      payloadsController: payloadsControllerAddress,
    }));
}

export async function getPayloadsExecuted(
  startBlock: number,
  endBlock: number,
  payloadsController: IPayloadsControllerCore,
  payloadsControllerAddress: string,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsExecutedEvents(
      startBlockNumber,
      endBlockNumber,
      payloadsController,
      payloadsControllerAddress,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}
