"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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
var getGovCoreConfigs_exports = {};
__export(getGovCoreConfigs_exports, {
  getGovCoreConfigs: () => getGovCoreConfigs
});
module.exports = __toCommonJS(getGovCoreConfigs_exports);
var import_contracts = require("./contracts.js");
function getGovCoreConfigs(client, govCoreContractAddress, govCoreDataHelperContractAddress) {
  return __async(this, null, function* () {
    const govCoreDataHelper = (0, import_contracts.govCoreDataHelperContract)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getGovCoreConfigs
});
//# sourceMappingURL=getGovCoreConfigs.js.map