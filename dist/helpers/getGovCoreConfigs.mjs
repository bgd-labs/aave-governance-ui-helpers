var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/helpers/getGovCoreConfigs.ts
import { govCoreDataHelperContract } from "./contracts.mjs";
function getGovCoreConfigs(client, govCoreContractAddress, govCoreDataHelperContractAddress) {
  return __async(this, null, function* () {
    const govCoreDataHelper = govCoreDataHelperContract(
      govCoreDataHelperContractAddress,
      client
    );
    const accessLevels = [1, 2];
    const constants = yield govCoreDataHelper.read.getConstants([
      govCoreContractAddress,
      accessLevels
    ]);
    const contractsConstants = {
      precisionDivider: constants.precisionDivider.toString(),
      cooldownPeriod: Number(constants.cooldownPeriod),
      expirationTime: Number(constants.expirationTime),
      cancellationFee: constants.cancellationFee.toString()
    };
    const configs = [];
    for (let i = 0; i < accessLevels.length; i++) {
      const votingConfig = constants.votingConfigs[i];
      const config = {
        accessLevel: votingConfig.accessLevel,
        votingDuration: votingConfig.config.votingDuration,
        quorum: Number(votingConfig.config.yesThreshold) || 200,
        differential: Number(votingConfig.config.yesNoDifferential) || 50,
        coolDownBeforeVotingStart: votingConfig.config.coolDownBeforeVotingStart,
        minPropositionPower: Number(votingConfig.config.minPropositionPower)
      };
      configs.push(config);
    }
    return {
      contractsConstants,
      configs
    };
  });
}
export {
  getGovCoreConfigs
};
//# sourceMappingURL=getGovCoreConfigs.mjs.map