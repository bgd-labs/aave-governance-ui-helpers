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

// src/helpers/appConfig.ts
var appConfig_exports = {};
__export(appConfig_exports, {
  appConfigInit: () => appConfigInit,
  govCoreConfig: () => govCoreConfig,
  payloadsControllerChainIds: () => payloadsControllerChainIds,
  payloadsControllerConfig: () => payloadsControllerConfig,
  votingMachineChainIds: () => votingMachineChainIds
});
module.exports = __toCommonJS(appConfig_exports);
var import_aave_address_book = require("@bgd-labs/aave-address-book");
var import_chains = require("viem/chains");
var govCoreConfig = {
  mainnet: {
    contractAddress: import_aave_address_book.GovernanceV3Ethereum.GOVERNANCE,
    dataHelperContractAddress: import_aave_address_book.GovernanceV3Ethereum.GOV_DATA_HELPER,
    votingPortals: {
      [import_chains.mainnet.id]: import_aave_address_book.GovernanceV3Ethereum.VOTING_PORTAL_ETH_ETH,
      [import_chains.polygon.id]: import_aave_address_book.GovernanceV3Ethereum.VOTING_PORTAL_ETH_POL,
      [import_chains.avalanche.id]: import_aave_address_book.GovernanceV3Ethereum.VOTING_PORTAL_ETH_AVAX
    }
  },
  // testnets
  goerli: {
    contractAddress: "0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F",
    dataHelperContractAddress: "0xB84D6c8b2cFC98191a1D6d00B38c1057252d876b",
    votingPortals: {
      [import_chains.goerli.id]: "0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF"
    }
  },
  sepolia: {
    contractAddress: "0xc4ABF658C3Dda84225cF8A07d7D5Bb6Aa41d9E59",
    dataHelperContractAddress: "0x863f9De2f82AB502612E8B7d4f4863c8535cb8cA",
    votingPortals: {
      [import_chains.sepolia.id]: "0x1079bAa48E56065d43b4344866B187a485cb0A92",
      [import_chains.avalancheFuji.id]: "0x4f47EdF2577995aBd7B875Eed75b3F28a20E696F"
    }
  }
};
var payloadsControllerConfig = {
  mainnet: {
    [import_chains.mainnet.id]: {
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Ethereum.PC_DATA_HELPER,
      contractAddresses: [import_aave_address_book.GovernanceV3Ethereum.PAYLOADS_CONTROLLER]
    },
    [import_chains.polygon.id]: {
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Polygon.PC_DATA_HELPER,
      contractAddresses: [import_aave_address_book.GovernanceV3Polygon.PAYLOADS_CONTROLLER]
    },
    [import_chains.avalanche.id]: {
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Avalanche.PC_DATA_HELPER,
      contractAddresses: [import_aave_address_book.GovernanceV3Avalanche.PAYLOADS_CONTROLLER]
    },
    [import_chains.base.id]: {
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Base.PC_DATA_HELPER,
      contractAddresses: [import_aave_address_book.GovernanceV3Base.PAYLOADS_CONTROLLER]
    },
    [import_chains.arbitrum.id]: {
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Arbitrum.PC_DATA_HELPER,
      contractAddresses: [import_aave_address_book.GovernanceV3Arbitrum.PAYLOADS_CONTROLLER]
    },
    [import_chains.metis.id]: {
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Metis.PC_DATA_HELPER,
      contractAddresses: [import_aave_address_book.GovernanceV3Metis.PAYLOADS_CONTROLLER]
    },
    [import_chains.optimism.id]: {
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Optimism.PC_DATA_HELPER,
      contractAddresses: [import_aave_address_book.GovernanceV3Optimism.PAYLOADS_CONTROLLER]
    }
  },
  // testnets
  goerli: {
    [import_chains.goerli.id]: {
      dataHelperContractAddress: "0xbd2db358f3C82F2883132A6584e22F38A979e768",
      contractAddresses: ["0x064361B3761CcDd17300146bf58a79d1E570382E"],
      payloadAddress: "0xf6b9c3fCF7f91817E7bF0efF792BA692c7bd372A"
      // only for test
    }
  },
  sepolia: {
    [import_chains.sepolia.id]: {
      dataHelperContractAddress: "0x6B9AF21B95FE20b5a878b43670c23124841ec31A",
      contractAddresses: ["0x7E314a46AA6dF79c51869967B9b8e9f8Bb20781d"],
      payloadAddress: "0xf19de078dbac9db382caf8015cb208667ec581c0"
      // only for test
    },
    [import_chains.avalancheFuji.id]: {
      dataHelperContractAddress: "0x6B9AF21B95FE20b5a878b43670c23124841ec31A",
      contractAddresses: ["0x1fad4eac642D8CAFb7fC5d38973D1C2764202da5"],
      payloadAddress: "0xdf9f39247c553485ac3bf974418947d9b2f969e5"
      // only for test
    }
  }
};
var votingMachineConfig = {
  mainnet: {
    [import_chains.mainnet.id]: {
      contractAddress: import_aave_address_book.GovernanceV3Ethereum.VOTING_MACHINE,
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Ethereum.VM_DATA_HELPER,
      dataWarehouseAddress: import_aave_address_book.GovernanceV3Ethereum.DATA_WAREHOUSE
    },
    [import_chains.polygon.id]: {
      contractAddress: import_aave_address_book.GovernanceV3Polygon.VOTING_MACHINE,
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Polygon.VM_DATA_HELPER,
      dataWarehouseAddress: import_aave_address_book.GovernanceV3Polygon.DATA_WAREHOUSE
    },
    [import_chains.avalanche.id]: {
      contractAddress: import_aave_address_book.GovernanceV3Avalanche.VOTING_MACHINE,
      dataHelperContractAddress: import_aave_address_book.GovernanceV3Avalanche.VM_DATA_HELPER,
      dataWarehouseAddress: import_aave_address_book.GovernanceV3Avalanche.DATA_WAREHOUSE
    }
  },
  // testnets
  goerli: {
    [import_chains.goerli.id]: {
      contractAddress: "0xE8AD5ab6295c16D04257BC6Cd6D447ff4018FF89",
      dataHelperContractAddress: "0xe10617A1ea760E174E82fBeb38a540d8ACe566f5",
      dataWarehouseAddress: "0xC946cc6bb934bAf2A539BaB62c647aff09D2e2D8"
    }
  },
  sepolia: {
    [import_chains.sepolia.id]: {
      contractAddress: "0xA1995F1d5A8A247c064a76F336E1C2ecD24Ef0D9",
      dataHelperContractAddress: "0x133210F3fe2deEB34e65deB6861ee3dF87393977",
      dataWarehouseAddress: "0xACd2b1bA0B85FaF0f45D4974Ba8ee538E157fBc6"
    },
    [import_chains.avalancheFuji.id]: {
      contractAddress: "0x767AA57554690D23D1E0594E8746271C97e1A1e4",
      dataHelperContractAddress: "0x133210F3fe2deEB34e65deB6861ee3dF87393977",
      dataWarehouseAddress: "0x2F4bc3128D0D52ef954552FfEC28BC523462dc02"
    }
  }
};
var govCoreChainId = {
  mainnet: import_chains.mainnet.id,
  // testnets
  goerli: import_chains.goerli.id,
  sepolia: import_chains.sepolia.id
};
var aditionalsAddresses = {
  mainnet: {
    aaveAddress: import_aave_address_book.AaveV3Ethereum.ASSETS.AAVE.UNDERLYING,
    aAaveAddress: import_aave_address_book.AaveV3Ethereum.ASSETS.AAVE.A_TOKEN,
    stkAAVEAddress: import_aave_address_book.AaveSafetyModule.STK_AAVE,
    // for delegation
    delegationHelper: import_aave_address_book.GovernanceV3Ethereum.META_DELEGATE_HELPER
  },
  // testnets
  goerli: {
    aaveAddress: "0xb6D88BfC5b145a558b279cf7692e6F02064889d0",
    aAaveAddress: "0xD1ff82609FB63A0eee6FE7D2896d80d29491cCCd",
    stkAAVEAddress: "0x1406A9Ea2B0ec8FD4bCa4F876DAae2a70a9856Ec",
    delegationHelper: "0x1966133c190475E8385Dc1b4150B5f81c70DC578"
  },
  sepolia: {
    aaveAddress: "0xdaEcee477B931b209e8123401EA37582ACB3811d",
    aAaveAddress: "0x26aAB2aE39897338c2d91491C46c14a8c2a67919",
    stkAAVEAddress: "0x354032B31339853A3D682613749F183328d07275",
    delegationHelper: "0x7cc468E937ec7B06A2816B33AC159BC1273dF4A3"
  }
};
var payloadsControllerChainIds = {
  mainnet: [
    import_chains.mainnet.id,
    import_chains.polygon.id,
    import_chains.avalanche.id,
    import_chains.base.id,
    import_chains.arbitrum.id,
    import_chains.metis.id,
    import_chains.optimism.id
  ],
  goerli: [import_chains.goerli.id],
  sepolia: [import_chains.sepolia.id, import_chains.avalancheFuji.id]
};
var votingMachineChainIds = {
  mainnet: [import_chains.mainnet.id, import_chains.polygon.id, import_chains.avalanche.id],
  goerli: [import_chains.goerli.id],
  sepolia: [import_chains.sepolia.id, import_chains.avalancheFuji.id]
};
var gelatoApiKeys = {
  testnet: "qGvvlJMoyDKyuMxqJjDwFslpgiBKZCXNXpnSjIxsICY_",
  mainnet: "XUE_2itpitxYR_gYSvqM6q4In705QddU1Xzz2KsxrXE_"
};
var appConfigInit = (coreNetwork) => {
  return {
    govCoreChainId: govCoreChainId[coreNetwork],
    govCoreConfig: govCoreConfig[coreNetwork],
    votingMachineConfig: votingMachineConfig[coreNetwork],
    votingMachineChainIds: votingMachineChainIds[coreNetwork],
    payloadsControllerConfig: payloadsControllerConfig[coreNetwork],
    payloadsControllerChainIds: payloadsControllerChainIds[coreNetwork],
    additional: aditionalsAddresses[coreNetwork],
    gelatoApiKeys
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  appConfigInit,
  govCoreConfig,
  payloadsControllerChainIds,
  payloadsControllerConfig,
  votingMachineChainIds
});
//# sourceMappingURL=appConfig.js.map