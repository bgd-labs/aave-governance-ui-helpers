import { BigNumber } from 'bignumber.js';
import dayjs from 'dayjs';

import {
  BasicProposalState,
  PayloadState,
  Proposal,
  ProposalData as BasicProposal,
  ProposalEstimatedState,
  ProposalState,
  ProposalWaitForState,
  VotingMachineProposalState,
} from '../types';
import { normalizeBN, valueToBigNumber } from './bignumber';
import { checkHash } from './checkHash';

export function normalizeVotes(forVotes: string, againstVotes: string) {
  const forVotesN = normalizeBN(forVotes, 18).toNumber();
  const againstVotesN = normalizeBN(againstVotes, 18).toNumber();

  return { forVotes: forVotesN, againstVotes: againstVotesN };
}

export function formatQuorum(
  forVotes: string,
  quorum: number,
  precisionDivider: string,
) {
  const minQuorumVotes =
    valueToBigNumber(quorum).multipliedBy(precisionDivider);
  const normalizeMinQuorumVotes = normalizeBN(minQuorumVotes, 18).toNumber();

  let quorumReached = false;
  if (valueToBigNumber(forVotes).gte(minQuorumVotes)) {
    quorumReached = true;
  }

  return {
    minQuorumVotes,
    normalizeMinQuorumVotes,
    quorumReached,
  };
}

export function formatDiff(
  forVotes: string,
  againstVotes: string,
  differential: number,
  precisionDivider: string,
) {
  const diff = valueToBigNumber(forVotes).minus(againstVotes);
  const requiredDiff =
    valueToBigNumber(differential).multipliedBy(precisionDivider);
  const normalizeRequiredDiff = normalizeBN(requiredDiff, 18).toNumber();

  return { diff, requiredDiff, normalizeRequiredDiff };
}

interface BasicProposalWithConfigsData {
  proposalData: BasicProposal;
  quorum: number;
  differential: number;
  precisionDivider: string;
  cooldownPeriod: number;
  executionPayloadTime: number;
}

export function getProposalStepsAndAmounts({
  proposalData,
  quorum,
  differential,
  precisionDivider,
  cooldownPeriod,
  executionPayloadTime,
}: BasicProposalWithConfigsData) {
  const now = dayjs().unix();

  const isVotingStarted =
    proposalData.votingMachineState > VotingMachineProposalState.NotCreated;
  const isVotingEnded =
    proposalData.votingMachineData.endTime > 0 &&
    now > proposalData.votingMachineData.endTime;

  const isVotingClosed =
    proposalData.votingMachineData.votingClosedAndSentTimestamp > 0 &&
    now > proposalData.votingMachineData.votingClosedAndSentTimestamp;

  const { forVotes, againstVotes } = normalizeVotes(
    proposalData.votingMachineData.forVotes,
    proposalData.votingMachineData.againstVotes,
  );
  const { normalizeMinQuorumVotes, quorumReached } = formatQuorum(
    proposalData.votingMachineData.forVotes,
    quorum,
    precisionDivider,
  );
  const { normalizeRequiredDiff } = formatDiff(
    proposalData.votingMachineData.forVotes,
    proposalData.votingMachineData.againstVotes,
    differential,
    precisionDivider,
  );

  const lastPayloadQueuedAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => payload?.queuedAt || 0),
  );
  const lastPayloadExecutedAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => payload?.executedAt || 0),
  );
  const lastPayloadCanceledAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => payload?.cancelledAt || 0),
  );
  const lastPayloadExpiredAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => {
      if (payload.queuedAt <= 0 && payload.state === PayloadState.Expired) {
        return payload.expirationTime;
      } else if (
        payload.queuedAt > 0 &&
        payload.state === PayloadState.Expired
      ) {
        return payload.queuedAt + payload.delay + payload.gracePeriod;
      } else {
        return 0;
      }
    }),
  );

  const predictPayloadExpiredTime = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => {
      if (payload?.state && payload.state === PayloadState.Created) {
        return payload.expirationTime;
      } else if (payload?.state && payload.state === PayloadState.Queued) {
        return payload.queuedAt + payload.delay + payload.gracePeriod;
      } else {
        return 0;
      }
    }),
  );

  const allPayloadsExecuted = proposalData.payloads.every(
    (payload) => payload?.state && payload.state === PayloadState.Executed,
  );
  const allPayloadsCanceled = proposalData.payloads.every(
    (payload) => payload?.state && payload.state === PayloadState.Cancelled,
  );
  const allPayloadsExpired = proposalData.payloads.every(
    (payload) => payload?.state && payload.state === PayloadState.Expired,
  );

  const isCanceled =
    proposalData.basicState === BasicProposalState.Cancelled ||
    allPayloadsCanceled;

  const isExpired =
    proposalData.basicState === BasicProposalState.Expired ||
    allPayloadsExpired;

  const isVotingActive = isVotingStarted && !isVotingEnded && !isCanceled;

  const isVotingFailed =
    isVotingEnded &&
    (againstVotes >= forVotes || (againstVotes === 0 && forVotes === 0));

  const isProposalQueued =
    isVotingStarted &&
    isVotingEnded &&
    isVotingClosed &&
    proposalData.votingMachineData.sentToGovernance &&
    proposalData.queuingTime > 0 &&
    now > proposalData.queuingTime + cooldownPeriod;

  const isProposalExecuted =
    isVotingEnded &&
    isVotingClosed &&
    !isVotingFailed &&
    proposalData.basicState === BasicProposalState.Executed &&
    !isCanceled;

  const isPayloadsQueued =
    isProposalExecuted && now > lastPayloadQueuedAt + executionPayloadTime;

  const isPayloadsExecuted =
    isVotingEnded &&
    isVotingClosed &&
    !isVotingFailed &&
    proposalData.basicState === BasicProposalState.Executed &&
    !isCanceled &&
    allPayloadsExecuted &&
    !isExpired;

  let isProposalActive = true;
  if (
    proposalData.basicState === BasicProposalState.Null ||
    proposalData.basicState === BasicProposalState.Created
  ) {
    isProposalActive = false;
  } else if (isCanceled) {
    isProposalActive = false;
  } else if (isVotingFailed) {
    isProposalActive = false;
  } else if (isPayloadsExecuted) {
    isProposalActive = false;
  } else if (isExpired) {
    isProposalActive = false;
  }

  return {
    forVotes,
    againstVotes,
    normalizeMinQuorumVotes,
    quorumReached,
    normalizeRequiredDiff,
    isVotingStarted,
    isVotingActive,
    isVotingEnded,
    isVotingClosed,
    isVotingFailed,
    lastPayloadQueuedAt,
    lastPayloadCanceledAt,
    lastPayloadExecutedAt,
    lastPayloadExpiredAt,
    predictPayloadExpiredTime,
    allPayloadsExecuted,
    allPayloadsCanceled,
    allPayloadsExpired,
    isCanceled,
    isExpired,
    isProposalActive,
    isProposalQueued,
    isProposalExecuted,
    isPayloadsQueued,
    isPayloadsExecuted,
  };
}

export function getProposalState({ ...data }: BasicProposalWithConfigsData) {
  const {
    forVotes,
    againstVotes,
    quorumReached,
    normalizeRequiredDiff,
    isVotingActive,
    isVotingEnded,
    isVotingFailed,
    isExpired,
    allPayloadsExecuted,
    isCanceled,
    isPayloadsExecuted,
  } = getProposalStepsAndAmounts(data);

  if (
    !isCanceled &&
    data.proposalData.votingMachineState ===
      VotingMachineProposalState.NotCreated &&
    data.proposalData.basicState <= BasicProposalState.Active
  ) {
    return ProposalState.Created;
  } else if (
    isVotingActive &&
    checkHash(data.proposalData.snapshotBlockHash).notZero
  ) {
    return ProposalState.Active;
  } else if (
    isVotingEnded &&
    !isCanceled &&
    forVotes > againstVotes + normalizeRequiredDiff &&
    quorumReached &&
    !allPayloadsExecuted &&
    !isExpired
  ) {
    return ProposalState.Succeed;
  } else if (isVotingFailed && !isCanceled) {
    return ProposalState.Defeated;
  } else if (isCanceled) {
    return ProposalState.Canceled;
  } else if (isPayloadsExecuted) {
    return ProposalState.Executed;
  } else {
    return ProposalState.Expired;
  }
}

function getStateTimestamp(proposal: Proposal) {
  const {
    isVotingEnded,
    isVotingStarted,
    isExpired,
    lastPayloadExecutedAt,
    lastPayloadCanceledAt,
    lastPayloadExpiredAt,
    allPayloadsExpired,
    isCanceled,
  } = getProposalStepsAndAmounts({
    proposalData: proposal.data,
    quorum: proposal.config.quorum,
    differential: proposal.config.differential,
    precisionDivider: proposal.precisionDivider,
    cooldownPeriod: proposal.timings.cooldownPeriod,
    executionPayloadTime: proposal.timings.executionPayloadTime,
  });

  if (proposal.state === ProposalState.Created && !isExpired && !isCanceled) {
    return proposal.data.creationTime;
  } else if (
    proposal.data.votingMachineState ===
      VotingMachineProposalState.NotCreated &&
    !isExpired &&
    !isCanceled
  ) {
    return (
      proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart
    );
  } else if (
    checkHash(proposal.data.snapshotBlockHash).notZero &&
    !isVotingStarted &&
    !isExpired &&
    !isCanceled
  ) {
    return proposal.data.votingActivationTime;
  } else if (!isVotingEnded && isVotingStarted && !isExpired && !isCanceled) {
    return proposal.data.votingMachineData.startTime;
  } else if (
    isVotingStarted &&
    isVotingEnded &&
    proposal.state !== ProposalState.Executed &&
    !isExpired &&
    !isCanceled
  ) {
    return proposal.data.votingMachineData.endTime > 0
      ? proposal.data.votingMachineData.endTime
      : proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart;
  } else if (proposal.state === ProposalState.Defeated) {
    return proposal.data.votingMachineData.endTime;
  } else if (proposal.state === ProposalState.Executed) {
    return lastPayloadExecutedAt;
  } else if (proposal.state === ProposalState.Canceled) {
    return lastPayloadCanceledAt > proposal.data.canceledAt
      ? lastPayloadCanceledAt
      : proposal.data.canceledAt;
  } else if (
    proposal.data.basicState === BasicProposalState.Executed &&
    allPayloadsExpired
  ) {
    return lastPayloadExpiredAt;
  } else {
    return proposal.data.creationTime + proposal.timings.expirationTime;
  }
}

export function getEstimatedState(
  proposal: Proposal,
  forVotesS: string,
  againstVotesS: string,
) {
  const now = dayjs().unix();

  const {
    isVotingStarted,
    isVotingEnded,
    isVotingClosed,
    lastPayloadQueuedAt,
    predictPayloadExpiredTime,
  } = getProposalStepsAndAmounts({
    proposalData: proposal.data,
    quorum: proposal.config.quorum,
    differential: proposal.config.differential,
    precisionDivider: proposal.precisionDivider,
    cooldownPeriod: proposal.timings.cooldownPeriod,
    executionPayloadTime: proposal.timings.executionPayloadTime,
  });

  const { forVotes, againstVotes } = normalizeVotes(forVotesS, againstVotesS);
  const { quorumReached } = formatQuorum(
    forVotesS,
    proposal.config.quorum,
    proposal.precisionDivider,
  );
  const { normalizeRequiredDiff } = formatDiff(
    forVotesS,
    againstVotesS,
    proposal.config.differential,
    proposal.precisionDivider,
  );

  const isVotingDefeated =
    againstVotes >= forVotes ||
    (againstVotes === 0 && forVotes === 0) ||
    !quorumReached;

  const isProposalWaitForQueued =
    isVotingStarted &&
    isVotingEnded &&
    isVotingClosed &&
    !isVotingDefeated &&
    proposal.data.votingMachineData.sentToGovernance &&
    proposal.data.queuingTime > 0 &&
    now < proposal.data.queuingTime + proposal.timings.cooldownPeriod;

  const isPayloadsWaitForQueued =
    proposal.data.basicState === BasicProposalState.Executed &&
    now < lastPayloadQueuedAt + proposal.timings.executionPayloadTime;

  const executedTimestamp =
    proposal.data.queuingTime > 0 && lastPayloadQueuedAt === 0
      ? proposal.data.queuingTime + proposal.timings.cooldownPeriod
      : proposal.data.queuingTime > 0 && lastPayloadQueuedAt > 0
      ? lastPayloadQueuedAt + proposal.timings.executionPayloadTime
      : 0;

  if (
    now <=
    proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart
  ) {
    return {
      estimatedState: ProposalEstimatedState.Active,
      timestampForEstimatedState:
        proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart,
    };
  } else if (
    isVotingStarted &&
    !isVotingEnded &&
    forVotes > againstVotes + normalizeRequiredDiff &&
    quorumReached
  ) {
    return {
      estimatedState: ProposalEstimatedState.Succeed,
      timestampForEstimatedState: proposal.data.votingMachineData.endTime,
    };
  } else if (isVotingDefeated && isVotingStarted && !isVotingEnded) {
    return {
      estimatedState: ProposalEstimatedState.Defeated,
      timestampForEstimatedState: proposal.data.votingMachineData.endTime,
    };
  } else if (isProposalWaitForQueued && !isPayloadsWaitForQueued) {
    return {
      estimatedState: ProposalEstimatedState.ProposalExecuted,
      timestampForEstimatedState: executedTimestamp,
    };
  } else if (isPayloadsWaitForQueued) {
    return {
      estimatedState: ProposalEstimatedState.PayloadsExecuted,
      timestampForEstimatedState: executedTimestamp,
    };
  } else {
    return {
      estimatedState: ProposalEstimatedState.Expired,
      timestampForEstimatedState:
        proposal.data.basicState === BasicProposalState.Executed
          ? predictPayloadExpiredTime
          : proposal.data.creationTime + proposal.timings.expirationTime,
    };
  }
}

export function getWaitForState(proposal: Proposal) {
  const now = dayjs().unix();

  const {
    isVotingStarted,
    isVotingEnded,
    isVotingClosed,
    isVotingFailed,
    isProposalExecuted,
    isProposalQueued,
    isPayloadsQueued,
    lastPayloadQueuedAt,
  } = getProposalStepsAndAmounts({
    proposalData: proposal.data,
    quorum: proposal.config.quorum,
    differential: proposal.config.differential,
    precisionDivider: proposal.precisionDivider,
    cooldownPeriod: proposal.timings.cooldownPeriod,
    executionPayloadTime: proposal.timings.executionPayloadTime,
  });

  if (!isVotingFailed) {
    if (
      now >
        proposal.data.creationTime +
          proposal.config.coolDownBeforeVotingStart &&
      !isVotingStarted &&
      !isVotingEnded &&
      !isVotingClosed
    ) {
      return ProposalWaitForState.WaitForActivateVoting;
    } else if (isVotingStarted && isVotingEnded && !isVotingClosed) {
      return ProposalWaitForState.WaitForCloseVoting;
    } else if (
      isVotingStarted &&
      isVotingEnded &&
      isVotingClosed &&
      proposal.data.votingMachineData.sentToGovernance &&
      proposal.data.queuingTime <= 0
    ) {
      return ProposalWaitForState.WaitForQueueProposal;
    } else if (
      isProposalQueued &&
      proposal.data.basicState !== BasicProposalState.Executed
    ) {
      return ProposalWaitForState.WaitForExecuteProposal;
    } else if (isProposalExecuted && lastPayloadQueuedAt === 0) {
      return ProposalWaitForState.WaitForQueuePayloads;
    } else if (isPayloadsQueued) {
      return ProposalWaitForState.WaitForExecutePayloads;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function formatProposal(proposal: Proposal) {
  const {
    forVotes,
    normalizeMinQuorumVotes,
    againstVotes,
    normalizeRequiredDiff,
  } = getProposalStepsAndAmounts({
    proposalData: proposal.data,
    quorum: proposal.config.quorum,
    differential: proposal.config.differential,
    precisionDivider: proposal.precisionDivider,
    cooldownPeriod: proposal.timings.cooldownPeriod,
    executionPayloadTime: proposal.timings.executionPayloadTime,
  });

  const stateTimestamp = getStateTimestamp(proposal);
  const { estimatedState, timestampForEstimatedState } = getEstimatedState(
    proposal,
    proposal.data.votingMachineData.forVotes,
    proposal.data.votingMachineData.againstVotes,
  );
  const waitForState = getWaitForState(proposal);

  const allVotes = new BigNumber(proposal.data.votingMachineData.forVotes).plus(
    proposal.data.votingMachineData.againstVotes,
  );

  const votingPowerBasic = proposal.balances
    .map((balance) => valueToBigNumber(balance.basicValue).toNumber())
    .reduce((sum, value) => sum + value, 0);

  const votingPower = proposal.balances
    .map((balance) => valueToBigNumber(balance.value).toNumber())
    .reduce((sum, value) => sum + value, 0);

  const votingTokens = proposal.balances;

  const requiredForVotes =
    normalizeMinQuorumVotes - againstVotes > normalizeRequiredDiff
      ? normalizeMinQuorumVotes - againstVotes
      : againstVotes + normalizeRequiredDiff;
  const requiredAgainstVotes =
    forVotes === 0 ? 0 : forVotes + normalizeRequiredDiff;

  const forPercent = allVotes.gt(0)
    ? new BigNumber(forVotes)
        .dividedBy(requiredForVotes)
        .multipliedBy(100)
        .toNumber()
    : 0;
  const againstPercent = allVotes.gt(0)
    ? new BigNumber(againstVotes)
        .dividedBy(requiredAgainstVotes > 0 ? requiredAgainstVotes : 1)
        .multipliedBy(100)
        .toNumber()
    : 0;

  return {
    forPercent,
    forVotes,
    againstPercent,
    againstVotes,
    minQuorumVotes: normalizeMinQuorumVotes,
    requiredDiff: normalizeRequiredDiff,
    requiredForVotes,
    requiredAgainstVotes,
    stateTimestamp,
    estimatedState,
    timestampForEstimatedState,
    waitForState,
    votingPowerBasic,
    votingPower,
    votedPower: normalizeBN(
      proposal.data.votingMachineData.votedInfo.votingPower,
      18,
    ).toNumber(),
    votingTokens,
  };
}
