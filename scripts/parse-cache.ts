import { readJSONCache, writeJSONCache } from '@bgd-labs/js-utils';
import { Hex } from 'viem';

import { isProposalFinal } from '../src/events/governance.ts';
import { getVotingMachineEvents } from '../src/events/votingMachine.ts';
import { appConfig, coreName } from '../src/helpers/config.ts';
import { ProposalMetadata } from '../src/helpers/parseIpfs.ts';
import { BasicProposal, Payload, VotersData, normalizeBN } from '../src';

const initDirName = `ui/${coreName}`;

function parseCache() {
  const ipfsCache: Record<string, ProposalMetadata> =
    readJSONCache('web3', 'ipfs') || {};

  const proposalsPath = `${appConfig.govCoreChainId}/proposals`;
  const proposalsCache =
    readJSONCache<Record<number, BasicProposal>>(
      proposalsPath,
      appConfig.govCoreConfig.contractAddress,
    ) || {};

  Object.values(proposalsCache).forEach((proposal) => {
    const proposalIpfsData = ipfsCache[proposal.ipfsHash];

    const path = `${proposal.votingChainId}/events`;
    const votesCache =
      readJSONCache<Awaited<ReturnType<typeof getVotingMachineEvents>>>(
        path,
        appConfig.votingMachineConfig[proposal.votingChainId].contractAddress,
      ) || [];

    const proposalVoters: VotersData[] = votesCache
      .filter(
        (data) =>
          data.eventName === 'VoteEmitted' &&
          Number(data.args.proposalId) === proposal.id,
      )
      .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber))
      .map((event) => ({
        proposalId: Number(event.args.proposalId),
        address: (
          (event.eventName === 'VoteEmitted' && event.args.voter) ||
          ''
        ).toString() as Hex,
        support:
          (event.eventName === 'VoteEmitted' && event.args.support) || false,
        votingPower: normalizeBN(
          (
            (event.eventName === 'VoteEmitted' && event.args.votingPower) ||
            ''
          ).toString(),
          18,
        ).toNumber(),
        transactionHash: event.transactionHash,
        blockNumber: Number(event.blockNumber),
        chainId: proposal.votingChainId,
      }));

    const proposalPayloadsData = proposal.initialPayloads.map((payload) => {
      const payloadsPath = `${payload.chainId}/payloads`;
      const payloadsCache =
        readJSONCache<Record<number, Payload>>(
          payloadsPath,
          payload.payloadsController,
        ) || {};

      return payloadsCache[payload.id];
    });

    const dataToWrite = {
      payloads: proposalPayloadsData,
      ipfs: proposalIpfsData,
      proposal: proposal,
    };

    const proposalCache =
      readJSONCache<{
        payloads: Payload[];
        ipfs: ProposalMetadata;
        proposal: BasicProposal;
      }>(`${initDirName}/proposals`, `proposal_${proposal.id}`) || undefined;
    if (!proposalCache || !proposalCache?.proposal.prerender) {
      writeJSONCache(
        `${initDirName}/proposals`,
        `proposal_${proposal.id}`,
        dataToWrite,
      );
      console.log(`Proposal ${proposal.id} data cached.`);
    }

    const proposalVotersCache =
      readJSONCache<{
        votes: VotersData[];
      }>(`${initDirName}/votes`, `vote_for_proposal_${proposal.id}`) ||
      undefined;
    if (
      !proposalVotersCache ||
      !isProposalFinal(proposalCache ? proposalCache.proposal.state : 0)
    ) {
      writeJSONCache(
        `${initDirName}/votes`,
        `vote_for_proposal_${proposal.id}`,
        {
          votes: proposalVoters,
        },
      );
      console.log(`Proposal ${proposal.id} voters data cached.`);
    }
  });

  const proposalIds = Object.values(proposalsCache)
    .filter((proposal) => proposal.prerender)
    .map((proposal) => proposal.id);
  writeJSONCache(`${initDirName}`, 'cached_proposals_ids', {
    cachedProposalsIds: proposalIds,
  });
  console.log('Proposals ids updated.');
}

parseCache();
