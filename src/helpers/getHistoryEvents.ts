import { Hex, PublicClient } from 'viem';

import {
  govCoreContract,
  payloadsControllerContract,
  votingMachineContract,
} from './contracts';
import { blockLimit, getEventsBySteps } from './eventsHelpres';

// payloads created
async function getPayloadsCreatedEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const payloadsController = payloadsControllerContract(
    contractAddress,
    client,
  );

  const events = await client.getContractEvents({
    abi: payloadsController.abi,
    eventName: 'PayloadCreated',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      payloadsController: contractAddress,
    }));
}

export async function getPayloadsCreated(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsCreatedEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal created
async function getProposalCreatedEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const govCore = govCoreContract(contractAddress, client);

  const events = await client.getContractEvents({
    abi: govCore.abi,
    eventName: 'ProposalCreated',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
    }));
}

export async function getProposalCreated(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalCreatedEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal activate for voting
async function getProposalActivatedEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const govCore = govCoreContract(contractAddress, client);

  const events = await client.getContractEvents({
    abi: govCore.abi,
    eventName: 'VotingActivated',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
    }));
}

export async function getProposalActivated(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalActivatedEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// voting activate on VM
async function getProposalActivatedOnVMEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const votingMachine = votingMachineContract(contractAddress, client);

  const events = await client.getContractEvents({
    abi: votingMachine.abi,
    eventName: 'ProposalVoteStarted',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
    }));
}

export async function getProposalActivatedOnVM(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalActivatedOnVMEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// voting closed on VM and voting results sent
async function getProposalVotingClosedEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const votingMachine = votingMachineContract(contractAddress, client);

  const events = await client.getContractEvents({
    abi: votingMachine.abi,
    eventName: 'ProposalResultsSent',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
    }));
}

export async function getProposalVotingClosed(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalVotingClosedEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal queued
async function getProposalQueuedEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const govCore = govCoreContract(contractAddress, client);

  const events = await client.getContractEvents({
    abi: govCore.abi,
    eventName: 'ProposalQueued',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      proposalId: Number(event.args.proposalId),
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
    }));
}

export async function getProposalQueued(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalQueuedEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// payloads queued
async function getPayloadsQueuedEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const payloadsController = payloadsControllerContract(
    contractAddress,
    client,
  );

  const events = await client.getContractEvents({
    abi: payloadsController.abi,
    eventName: 'PayloadQueued',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      payloadsController: contractAddress,
    }));
}

export async function getPayloadsQueued(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsQueuedEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// payloads executed
async function getPayloadsExecutedEvents(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const payloadsController = payloadsControllerContract(
    contractAddress,
    client,
  );

  const events = await client.getContractEvents({
    abi: payloadsController.abi,
    eventName: 'PayloadExecuted',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      payloadsController: contractAddress,
    }));
}

export async function getPayloadsExecuted(
  contractAddress: Hex,
  client: PublicClient,
  startBlock: number,
  endBlock: number,
  chainId: number,
) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsExecutedEvents(
      contractAddress,
      client,
      startBlockNumber,
      endBlockNumber,
      chainId,
    );
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}
