import { IGovernanceDataHelper } from '../contracts/IGovernanceDataHelper';
import { VotingConfig } from '../types';

export async function getGovCoreConfigs(
  govCoreDataHelper: IGovernanceDataHelper,
  govCoreContractAddress: string,
) {
  const accessLevels = [1, 2]; // access levels that we can’t get from contracts in any way, so far there are only two of them, we need to keep an eye on that suddenly there will be more of them
  const constants = await govCoreDataHelper.getConstants(
    govCoreContractAddress,
    accessLevels,
  );

  const contractsConstants = {
    precisionDivider: constants.precisionDivider.toString(),
    cooldownPeriod: constants.cooldownPeriod.toNumber(),
    expirationTime: constants.expirationTime.toNumber(),
    cancellationFee: constants.cancellationFee.toString(),
  };

  const configs: VotingConfig[] = [];

  for (let i = 0; i < accessLevels.length; i++) {
    const votingConfig = constants.votingConfigs[i];

    const config: VotingConfig = {
      accessLevel: votingConfig.accessLevel,
      votingDuration: votingConfig.config.votingDuration,
      quorum: votingConfig.config.yesThreshold.toNumber() || 200,
      differential: votingConfig.config.yesNoDifferential.toNumber() || 50,
      coolDownBeforeVotingStart: votingConfig.config.coolDownBeforeVotingStart,
      minPropositionPower: votingConfig.config.minPropositionPower.toNumber(),
    };

    configs.push(config);
  }

  return {
    contractsConstants,
    configs,
  };
}
