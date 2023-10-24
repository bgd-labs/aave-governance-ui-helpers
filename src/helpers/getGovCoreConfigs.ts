import { Hex, PublicClient } from 'viem';

import { govCoreDataHelperContract } from './contracts';
import { VotingConfig } from './types';

export async function getGovCoreConfigs(
  client: PublicClient,
  govCoreContractAddress: Hex,
  govCoreDataHelperContractAddress: Hex,
) {
  const govCoreDataHelper = govCoreDataHelperContract(
    govCoreDataHelperContractAddress,
    client,
  );

  const accessLevels: Readonly<number[]> = [1, 2]; // access levels that we can’t get from contracts in any way, so far there are only two of them, we need to keep an eye on that suddenly there will be more of them
  const constants = await govCoreDataHelper.read.getConstants([
    govCoreContractAddress,
    accessLevels,
  ]);

  const contractsConstants = {
    precisionDivider: constants.precisionDivider.toString(),
    cooldownPeriod: Number(constants.cooldownPeriod),
    expirationTime: Number(constants.expirationTime),
    cancellationFee: constants.cancellationFee.toString(),
  };

  const configs: VotingConfig[] = [];

  for (let i = 0; i < accessLevels.length; i++) {
    const votingConfig = constants.votingConfigs[i];

    const config: VotingConfig = {
      accessLevel: votingConfig.accessLevel,
      votingDuration: votingConfig.config.votingDuration,
      quorum: Number(votingConfig.config.yesThreshold) || 200,
      differential: Number(votingConfig.config.yesNoDifferential) || 50,
      coolDownBeforeVotingStart: votingConfig.config.coolDownBeforeVotingStart,
      minPropositionPower: Number(votingConfig.config.minPropositionPower),
    };

    configs.push(config);
  }

  return {
    contractsConstants,
    configs,
  };
}
