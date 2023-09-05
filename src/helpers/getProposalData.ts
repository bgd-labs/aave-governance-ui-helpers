import dayjs from 'dayjs';
import { ethers } from 'ethers';

import { IGovernanceDataHelper } from '../contracts/IGovernanceDataHelper';
import { IVotingMachineDataHelper } from '../contracts/IVotingMachineDataHelper';
import {
  BasicProposal,
  ProposalData,
  VotingMachineProposalState,
} from '../types';

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
  votingMachineData: IVotingMachineDataHelper.ProposalStructOutput,
) {
  return {
    id: id,
    forVotes: votingMachineData.proposalData.forVotes.toString(),
    againstVotes: votingMachineData.proposalData.againstVotes.toString(),
    startTime: votingMachineData.proposalData.startTime,
    endTime: votingMachineData.proposalData.endTime,
    votingClosedAndSentBlockNumber:
      votingMachineData.proposalData.votingClosedAndSentBlockNumber.toNumber(),
    votingClosedAndSentTimestamp:
      votingMachineData.proposalData.votingClosedAndSentTimestamp,
    l1BlockHash:
      votingMachineData?.voteConfig.l1ProposalBlockHash ||
      ethers.constants.HashZero,
    strategy: votingMachineData.strategy,
    sentToGovernance: votingMachineData.proposalData.sentToGovernance,
    createdBlock: votingMachineData.proposalData.creationBlockNumber.toNumber(),
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
  votingMachineDataHelperData: IVotingMachineDataHelper.ProposalStructOutput[],
  ids: number[],
) {
  const proposalsData: BasicProposal[] = [];

  ids.forEach((id) => {
    const govData = proposals.find((proposal) => proposal?.id === id);
    if (govData) {
      const votingMachineData =
        votingMachineDataHelperData.find(
          (proposal) => proposal.proposalData.id.toNumber() === govData.id,
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
  govCoreDataHelperData: IGovernanceDataHelper.ProposalStructOutput[],
  votingMachineDataHelperData: IVotingMachineDataHelper.ProposalStructOutput[],
  ids: number[],
  prerender?: boolean,
): BasicProposal[] {
  const proposalsData: BasicProposal[] = [];

  for (let i = 0; i < ids.length; i++) {
    const govData = govCoreDataHelperData[i];

    const votingMachineData =
      votingMachineDataHelperData.find(
        (proposal) =>
          proposal.proposalData.id.toNumber() === govData.id.toNumber(),
      ) || votingMachineDataHelperData[i];

    const proposalData = {
      id: govData.id.toNumber(),
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
          chainId: payload.chain.toNumber(),
          payloadsController: payload.payloadsController,
        };
      }),
      snapshotBlockHash: govData.proposalData.snapshotBlockHash,
      creator: govData.proposalData.creator,
      canceledAt: govData.proposalData.cancelTimestamp,
      votingActivationTime: govData.proposalData.votingActivationTime,
      votingChainId: govData.votingChainId.toNumber(),
      votingMachineData: formatVotingMachineData(
        govData.id.toNumber(),
        votingMachineData,
      ),
      prerender: !!prerender,
    };

    proposalsData.push(proposalData);
  }

  return proposalsData;
}
