import dayjs from 'dayjs';
import { zeroHash } from 'viem';

import {
  BasicProposal,
  ProposalData,
  ProposalStructOutput,
  VMProposalStructOutput,
  VotingMachineProposalState,
} from './types';

export function getVotingMachineProposalState(proposal: BasicProposal) {
  const now = dayjs().unix();
  if (proposal.votingMachineData.startTime === 0) {
    return VotingMachineProposalState.NotCreated;
  } else if (now <= proposal.votingMachineData.endTime) {
    return VotingMachineProposalState.Active;
  } else if (proposal.votingMachineData.votingClosedAndSentBlockNumber === 0) {
    return VotingMachineProposalState.Finished;
  } else {
    return VotingMachineProposalState.SentToGovernance;
  }
}

export function formatVotingMachineData(
  id: number,
  votingMachineData: Readonly<VMProposalStructOutput>,
) {
  return {
    id: id,
    forVotes: votingMachineData.proposalData.forVotes.toString(),
    againstVotes: votingMachineData.proposalData.againstVotes.toString(),
    startTime: votingMachineData.proposalData.startTime,
    endTime: votingMachineData.proposalData.endTime,
    votingClosedAndSentBlockNumber: Number(
      votingMachineData.proposalData.votingClosedAndSentBlockNumber,
    ),
    votingClosedAndSentTimestamp:
      votingMachineData.proposalData.votingClosedAndSentTimestamp,
    l1BlockHash: votingMachineData?.voteConfig.l1ProposalBlockHash || zeroHash,
    strategy: votingMachineData.strategy,
    sentToGovernance: votingMachineData.proposalData.sentToGovernance,
    createdBlock: Number(votingMachineData.proposalData.creationBlockNumber),
    votedInfo: {
      support: votingMachineData.votedInfo.support,
      votingPower: votingMachineData.votedInfo.votingPower.toString(),
    },
    votingAssets: votingMachineData.votingAssets,
    hasRequiredRoots: votingMachineData.hasRequiredRoots,
  };
}

export function updateVotingMachineData(
  proposals: ProposalData[],
  votingMachineDataHelperData: Readonly<VMProposalStructOutput[]>,
  ids: number[],
) {
  const proposalsData: BasicProposal[] = [];

  ids.forEach((id) => {
    const govData = proposals.find((proposal) => proposal?.id === id);
    if (govData) {
      const votingMachineData =
        votingMachineDataHelperData.find(
          (proposal) => Number(proposal.proposalData.id) === govData.id,
        ) || votingMachineDataHelperData[0];

      const proposalData = {
        id: govData.id,
        votingDuration:
          +votingMachineData?.voteConfig.votingDuration ||
          govData.votingDuration,
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
          votingMachineData,
        ),
        prerender: govData.prerender,
      };

      proposalsData.push(proposalData);
    }
  });

  return proposalsData;
}

export function getDetailedProposalsData(
  govCoreDataHelperData: Readonly<ProposalStructOutput[]>,
  votingMachineDataHelperData: Readonly<VMProposalStructOutput[]>,
  ids: number[],
  prerender?: boolean,
): BasicProposal[] {
  const proposalsData: BasicProposal[] = [];

  for (let i = 0; i < ids.length; i++) {
    const govData = govCoreDataHelperData[i];

    const votingMachineData =
      votingMachineDataHelperData.find(
        (proposal) => Number(proposal.proposalData.id) === Number(govData.id),
      ) || votingMachineDataHelperData[i];

    const proposalData = {
      id: Number(govData.id),
      votingDuration:
        +votingMachineData?.voteConfig.votingDuration ||
        +govData.proposalData.votingDuration,
      creationTime: +govData.proposalData.creationTime,
      accessLevel: +govData.proposalData.accessLevel,
      basicState: +govData.proposalData.state,
      queuingTime: +govData.proposalData.queuingTime,
      ipfsHash: govData.proposalData.ipfsHash,
      initialPayloads: govData.proposalData.payloads.map((payload) => {
        return {
          id: payload.payloadId,
          chainId: Number(payload.chain),
          payloadsController: payload.payloadsController,
        };
      }),
      snapshotBlockHash: govData.proposalData.snapshotBlockHash,
      creator: govData.proposalData.creator,
      canceledAt: govData.proposalData.cancelTimestamp,
      votingActivationTime: govData.proposalData.votingActivationTime,
      votingChainId: Number(govData.votingChainId),
      votingMachineData: formatVotingMachineData(
        Number(govData.id),
        votingMachineData,
      ),
      prerender: !!prerender,
    };

    proposalsData.push(proposalData);
  }

  return proposalsData;
}
