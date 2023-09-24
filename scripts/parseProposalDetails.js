require('dotenv').config();
const fs = require('fs');

const coreDirName = process.env.CORE_NETWORK || 'mainnet';
const cacheBuildDir = `src/generated-cache/${coreDirName}`;

function pathToWrite(dir, name, id) {
  return `${cacheBuildDir}/${dir}/${name}_${id}.json`;
}

const listViewProposalsJson = `${cacheBuildDir}/list_view_proposals.json`;
const payloadsJson = `${cacheBuildDir}/payloads.json`;
const ipfsJson = `${cacheBuildDir}/ipfs.json`;
const proposalsJson = `${cacheBuildDir}/proposals.json`;
const votesJson = `${cacheBuildDir}/votes.json`;

function getDataFromDb() {
  const listViewProposals = JSON.parse(fs.readFileSync(listViewProposalsJson).toString());
  const payloadsData = JSON.parse(fs.readFileSync(payloadsJson).toString());
  const ipfsData = JSON.parse(fs.readFileSync(ipfsJson).toString());
  const proposalsData = JSON.parse(fs.readFileSync(proposalsJson).toString());
  const votesData = JSON.parse(fs.readFileSync(votesJson).toString());

  return {
    totalProposalCount: listViewProposals.totalProposalCount,
    payloadsData: payloadsData.payloads,
    ipfsData: ipfsData.ipfs,
    proposalsData,
    votesData: votesData.voters,
  };
}

function formatData() {
  const { payloadsData, ipfsData, proposalsData, totalProposalCount } = getDataFromDb();

  const detailedPayloadsData = {};
  payloadsData.forEach((payload) => {
    detailedPayloadsData[`${payload.payloadsController}_${payload.id}`] =
      payload;
  });

  const objectIpfsData = {};
  ipfsData.forEach((ipfs) => {
    objectIpfsData[ipfs.originalIpfsHash] = ipfs;
  });

  const proposalPayloadsData = proposalsData.map((proposal) => {
    const payloads = proposal.initialPayloads.map((payload) => {
      return detailedPayloadsData[
        `${payload.payloadsController}_${payload.id}`
      ];
    });

    return {
      proposalId: proposal.id,
      payloads: payloads,
    };
  });

  return {
    totalProposalsIds: Array.from(Array(totalProposalCount).keys()),
    cachedProposalsIds: proposalsData.map((proposal) => proposal.id),
    data: proposalsData.map((proposal) => {
      return {
        payloads:
          proposalPayloadsData.find(
            (payload) => payload.proposalId === proposal.id,
          )?.payloads || [],
        ipfs: objectIpfsData[proposal.ipfsHash],
        proposal,
      };
    }),
  };
}

const proposalsDirName = 'proposals';
const votesDirName = 'votes';

const writeProposalData = (data) => {
  return {
    path: pathToWrite(proposalsDirName, 'proposal', data.proposal.id),
    data: JSON.stringify({
      payloads: data.payloads,
      ipfs: data.ipfs,
      proposal: data.proposal,
    }),
  };
};

const writeVotesData = (proposalId) => {
  const { votesData } = getDataFromDb();

  return {
    path: pathToWrite(votesDirName, 'vote_for_proposal', proposalId),
    data: JSON.stringify({ votes: votesData.filter((vote) => vote.proposalId === proposalId) }),
  };
};

function writeData() {
  const formattedData = formatData();

  if (!!formattedData.cachedProposalsIds.length) {
    fs.writeFileSync(
      `${cacheBuildDir}/cached_proposals_ids.json`,
      JSON.stringify({ cachedProposalsIds: formattedData.cachedProposalsIds }),
    );
  }

  formattedData.data.forEach((data) => {
    fs.writeFile(
      writeProposalData(data).path,
      writeProposalData(data).data,
      (error) => {
        if (error) {
          console.error('Error when create proposal file', error);
          if (error.message.includes('no such file or directory')) {
            fs.mkdir(`${cacheBuildDir}/${proposalsDirName}`, (err) => {
              if (err) {
                console.log(`dir ${proposalsDirName} exists already`);
                fs.writeFileSync(
                  writeProposalData(data).path,
                  writeProposalData(data).data,
                );
              } else {
                fs.writeFileSync(
                  writeProposalData(data).path,
                  writeProposalData(data).data,
                );
              }
            });
          }
        } else {
          console.log(`Proposal #${data.proposal.id} details file created`);
        }
      },
    );
  });

  if (!!formattedData.totalProposalsIds.length) {
    formattedData.totalProposalsIds.forEach((proposalId) => {
      fs.writeFile(
        writeVotesData(proposalId).path,
        writeVotesData(proposalId).data,
        (error) => {
          if (error) {
            console.error('Error when create votes file', error);
            if (error.message.includes('no such file or directory')) {
              fs.mkdir(`${cacheBuildDir}/${votesDirName}`, (err) => {
                if (err) {
                  console.log(`dir ${votesDirName} exists already`);
                  fs.writeFileSync(
                    writeVotesData(proposalId).path,
                    writeVotesData(proposalId).data,
                  );
                } else {
                  fs.writeFileSync(
                    writeVotesData(proposalId).path,
                    writeVotesData(proposalId).data,
                  );
                }
              });
            }
          } else {
            console.log(`Votes for proposal #${proposalId} file created`);
          }
        },
      );
    })
  }
}

writeData();
