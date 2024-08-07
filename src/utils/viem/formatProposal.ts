import dayjs from 'dayjs';
import { formatUnits } from 'viem';

import {
  CombineProposalState,
  isHashNotZero,
  PayloadState,
  ProposalEstimatedState,
  ProposalState,
  ProposalWaitForState,
  VotingMachineProposalState,
} from '../generic';
import { Proposal, ProposalData as BasicProposal } from './types';

export const HUMAN_READABLE_PAYLOAD_STATE = {
  [PayloadState.None]: 'None',
  [PayloadState.Created]: 'Created',
  [PayloadState.Queued]: 'Queued',
  [PayloadState.Executed]: 'Executed',
  [PayloadState.Cancelled]: 'Cancelled',
  [PayloadState.Expired]: 'Expired',
};

export function isProposalFinal(state: ProposalState) {
  return [
    ProposalState.Executed,
    ProposalState.Failed,
    ProposalState.Cancelled,
    ProposalState.Expired,
  ].includes(state);
}

export function isPayloadFinal(state: number) {
  return [
    PayloadState.Cancelled,
    PayloadState.Executed,
    PayloadState.Expired,
    // -1, // error
  ].includes(state);
}

export function normalizeVotes(forVotes: string, againstVotes: string) {
  const forVotesN = +formatUnits(BigInt(forVotes), 18);
  const againstVotesN = +formatUnits(BigInt(againstVotes), 18);
  return { forVotes: forVotesN, againstVotes: againstVotesN };
}

export function formatQuorum(
  forVotes: string,
  quorum: number,
  precisionDivider: string,
) {
  const minQuorumVotes = +(
    BigInt(quorum) * BigInt(precisionDivider)
  ).toString();
  const normalizeMinQuorumVotes = +formatUnits(BigInt(minQuorumVotes), 18);
  let quorumReached = false;
  if (BigInt(forVotes) >= BigInt(minQuorumVotes)) {
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
  const diff = +(BigInt(forVotes) - BigInt(againstVotes)).toString();
  const requiredDiff = +(
    BigInt(differential) * BigInt(precisionDivider)
  ).toString();
  const normalizeRequiredDiff = +formatUnits(BigInt(requiredDiff), 18);
  return { diff, requiredDiff, normalizeRequiredDiff };
}

interface BasicProposalWithConfigsData {
  proposalData: BasicProposal;
  quorum: number;
  differential: number;
  precisionDivider: string;
  cooldownPeriod: number;
  executionDelay: number;
}

export function getProposalStepsAndAmounts({
  proposalData,
  quorum,
  differential,
  precisionDivider,
  cooldownPeriod,
  executionDelay,
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
    0,
    proposalData.payloads.map((payload) => payload?.queuedAt),
  );
  const firstPayloadQueuedAt = Math.min.apply(
    Math.min.apply(
      0,
      proposalData.payloads.map((payload) => payload?.queuedAt),
    ),
    proposalData.payloads.map((payload) => payload?.queuedAt),
  );
  const lastPayloadExecutedAt = Math.max.apply(
    0,
    proposalData.payloads.map((payload) => payload?.executedAt),
  );
  const lastPayloadCanceledAt = Math.max.apply(
    0,
    proposalData.payloads.map((payload) => payload?.cancelledAt),
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
    proposalData.state === ProposalState.Cancelled || allPayloadsCanceled;

  const isExpired =
    proposalData.state === ProposalState.Expired || allPayloadsExpired;

  const isVotingActive = isVotingStarted && !isVotingEnded && !isCanceled;

  const isVotingFailed =
    isVotingEnded &&
    (againstVotes >= forVotes ||
      (againstVotes === 0 && forVotes === 0) ||
      !quorumReached ||
      forVotes < againstVotes + normalizeRequiredDiff);

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
    proposalData.state === ProposalState.Executed &&
    !isCanceled;

  const isPayloadsQueued =
    isProposalExecuted && now > lastPayloadQueuedAt + executionDelay;

  const isPayloadsExecuted =
    isVotingEnded &&
    isVotingClosed &&
    !isVotingFailed &&
    proposalData.state === ProposalState.Executed &&
    !isCanceled &&
    allPayloadsExecuted &&
    !isExpired;

  let isProposalActive = true;
  if (
    proposalData.state === ProposalState.Null ||
    proposalData.state === ProposalState.Created
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
    firstPayloadQueuedAt,
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
    data.proposalData.state <= ProposalState.Active
  ) {
    return CombineProposalState.Created;
  } else if (
    isVotingActive &&
    isHashNotZero(data.proposalData.snapshotBlockHash)
  ) {
    return CombineProposalState.Active;
  } else if (
    isVotingEnded &&
    !isCanceled &&
    forVotes > againstVotes + normalizeRequiredDiff &&
    quorumReached &&
    !allPayloadsExecuted &&
    !isExpired
  ) {
    return CombineProposalState.Succeed;
  } else if (isVotingFailed && !isCanceled) {
    return CombineProposalState.Failed;
  } else if (isCanceled) {
    return CombineProposalState.Canceled;
  } else if (isPayloadsExecuted) {
    return CombineProposalState.Executed;
  } else {
    return CombineProposalState.Expired;
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
    executionDelay: proposal.timings.executionDelay,
  });

  if (
    proposal.combineState === CombineProposalState.Created &&
    !isExpired &&
    !isCanceled
  ) {
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
    isHashNotZero(proposal.data.snapshotBlockHash) &&
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
    proposal.combineState !== CombineProposalState.Executed &&
    !isExpired &&
    !isCanceled
  ) {
    return proposal.data.votingMachineData.endTime > 0
      ? proposal.data.votingMachineData.endTime
      : proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart;
  } else if (proposal.combineState === CombineProposalState.Failed) {
    return proposal.data.votingMachineData.endTime;
  } else if (proposal.combineState === CombineProposalState.Executed) {
    return lastPayloadExecutedAt;
  } else if (proposal.combineState === CombineProposalState.Canceled) {
    return lastPayloadCanceledAt > proposal.data.canceledAt
      ? lastPayloadCanceledAt
      : proposal.data.canceledAt;
  } else if (
    proposal.data.state === ProposalState.Executed &&
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
    firstPayloadQueuedAt,
    predictPayloadExpiredTime,
  } = getProposalStepsAndAmounts({
    proposalData: proposal.data,
    quorum: proposal.config.quorum,
    differential: proposal.config.differential,
    precisionDivider: proposal.precisionDivider,
    cooldownPeriod: proposal.timings.cooldownPeriod,
    executionDelay: proposal.timings.executionDelay,
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
    proposal.data.state === ProposalState.Executed &&
    now < firstPayloadQueuedAt + proposal.timings.executionDelay;

  const executedTimestamp =
    proposal.data.queuingTime > 0 && firstPayloadQueuedAt === 0
      ? proposal.data.queuingTime + proposal.timings.cooldownPeriod
      : proposal.data.queuingTime > 0 && firstPayloadQueuedAt > 0
        ? firstPayloadQueuedAt + proposal.timings.executionDelay
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
      estimatedState: ProposalEstimatedState.Failed,
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
        proposal.data.state === ProposalState.Executed
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
    executionDelay: proposal.timings.executionDelay,
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
      proposal.data.state !== ProposalState.Executed
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
    executionDelay: proposal.timings.executionDelay,
  });

  const stateTimestamp = getStateTimestamp(proposal);
  const { estimatedState, timestampForEstimatedState } = getEstimatedState(
    proposal,
    proposal.data.votingMachineData.forVotes,
    proposal.data.votingMachineData.againstVotes,
  );
  const waitForState = getWaitForState(proposal);

  const allVotes = +(
    BigInt(proposal.data.votingMachineData.forVotes) +
    BigInt(proposal.data.votingMachineData.againstVotes)
  ).toString();
  const votingPowerBasic = proposal.balances
    .map((balance) => +balance.basicValue)
    .reduce((sum, value) => sum + value, 0);
  const votingPower = proposal.balances
    .map((balance) => +balance.value)
    .reduce((sum, value) => sum + value, 0);

  const votingTokens = proposal.balances;

  const requiredForVotes =
    againstVotes + normalizeRequiredDiff < normalizeMinQuorumVotes
      ? normalizeMinQuorumVotes
      : againstVotes + normalizeRequiredDiff;
  const requiredAgainstVotes =
    forVotes === 0 ||
    forVotes - normalizeRequiredDiff <= 0 ||
    forVotes < normalizeMinQuorumVotes
      ? normalizeMinQuorumVotes
      : forVotes - normalizeRequiredDiff;

  const forPercent =
    allVotes > 0
      ? +(
          (BigInt(forVotes) / BigInt(requiredForVotes)) *
          BigInt(100)
        ).toString()
      : 0;
  const againstPercent =
    allVotes > 0
      ? +(
          (BigInt(againstVotes) /
            BigInt(requiredAgainstVotes > 0 ? requiredAgainstVotes : 1)) *
          BigInt(100)
        ).toString()
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
    votedPower: +formatUnits(
      BigInt(proposal.data.votingMachineData.votedInfo.votingPower),
      18,
    ),
    votingTokens,
  };
}
