import {
  govCoreContract,
  payloadsControllerContract,
  votingMachineContract,
} from './contracts';
import { blockLimit, getEventsBySteps } from './eventsHelpres';
import { InitEvent, InitEventWithChainId } from './types';

// payloads created
async function getPayloadsCreatedEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId,
}: InitEventWithChainId) {
  const payloadsController = payloadsControllerContract({
    contractAddress,
    client,
  });

  const events = await client.getContractEvents({
    address: payloadsController.address,
    abi: payloadsController.abi,
    eventName: 'PayloadCreated',
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock),
  });

  return events
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
    .map((event) => ({
      creator: event.args.creator,
      payloadId: event.args.payloadId,
      chainId,
      transactionHash: event.transactionHash,
      blockNumber: Number(event.blockNumber),
      payloadsController: contractAddress,
    }));
}

export async function getPayloadsCreated({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId,
}: InitEventWithChainId) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsCreatedEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
      chainId,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal created
async function getProposalCreatedEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const govCore = govCoreContract({ contractAddress, client });

  const events = await client.getContractEvents({
    address: govCore.address,
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

export async function getProposalCreated({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalCreatedEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal activate for voting
async function getProposalActivatedEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const govCore = govCoreContract({ contractAddress, client });

  const events = await client.getContractEvents({
    address: govCore.address,
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

export async function getProposalActivated({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalActivatedEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// voting activate on VM
async function getProposalActivatedOnVMEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const votingMachine = votingMachineContract({ contractAddress, client });

  const events = await client.getContractEvents({
    address: votingMachine.address,
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

export async function getProposalActivatedOnVM({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalActivatedOnVMEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// voting closed on VM and voting results sent
async function getProposalVotingClosedEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const votingMachine = votingMachineContract({ contractAddress, client });

  const events = await client.getContractEvents({
    address: votingMachine.address,
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

export async function getProposalVotingClosed({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalVotingClosedEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// proposal queued
async function getProposalQueuedEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const govCore = govCoreContract({ contractAddress, client });

  const events = await client.getContractEvents({
    address: govCore.address,
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

export async function getProposalQueued({
  contractAddress,
  client,
  startBlock,
  endBlock,
}: InitEvent) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getProposalQueuedEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// payloads queued
async function getPayloadsQueuedEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId,
}: InitEventWithChainId) {
  const payloadsController = payloadsControllerContract({
    contractAddress,
    client,
  });

  const events = await client.getContractEvents({
    address: payloadsController.address,
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

export async function getPayloadsQueued({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId,
}: InitEventWithChainId) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsQueuedEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
      chainId,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}

// payloads executed
async function getPayloadsExecutedEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId,
}: InitEventWithChainId) {
  const payloadsController = payloadsControllerContract({
    contractAddress,
    client,
  });

  const events = await client.getContractEvents({
    address: payloadsController.address,
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

export async function getPayloadsExecuted({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId,
}: InitEventWithChainId) {
  const callbackFunc = async (
    startBlockNumber: number,
    endBlockNumber: number,
  ) => {
    return await getPayloadsExecutedEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
      chainId,
    });
  };

  return getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc);
}
