# Repository with cache and helpers for aave governance v3

This repository saves and updates the cache for Aave governance, also includes helper functions connected to Aave governance UI.

### Installation like a package

#### npm
<code>npm i @bgd-labs/aave-governance-ui-helpers</code>

#### yarn
<code>yarn add @bgd-labs/aave-governance-ui-helpers</code>

## Usage examples
### Cache generator
```typescript
    import { updateCache } from '@bgd-labs/aave-governance-ui-helpers/dist/scripts/update-cache-package.ts';

    updateCache({
      govCoreChainId: govCoreChainId,
      govCoreContractAddress: govCoreContractAddress,
    });
```

### Gov core configs
```typescript
    import { getGovCoreConfigs } from '@bgd-labs/aave-governance-ui-helpers';

    const govCoreConfigs = await getGovCoreConfigs({
      client: govCoreViemClient,
      govCoreContractAddress: govCoreAddress,
      govCoreDataHelperContractAddress: govCoreDataHelperAddress,
    });
```

### Voting balances proofs
```typescript
    import { baseSlots, AssetsBalanceSlots, Asset, getVotingProofs } from '@bgd-labs/aave-governance-ui-helpers';
    import { getVotingProofs as eGetVotingProofs } from '@bgd-labs/aave-governance-ui-helpers/dist/ether-v5';
    import { AaveV3Ethereum, AaveSafetyModule, GovernanceV3Ethereum } from '@bgd-labs/aave-address-book';

    const assets = {
        aaveAddress: AaveV3Ethereum.ASSETS.AAVE.UNDERLYING,
        aAaveAddress: AaveV3Ethereum.ASSETS.AAVE.A_TOKEN,
        stkAAVEAddress: AaveSafetyModule.STK_AAVE,
        contractAddress: GovernanceV3Ethereum.GOVERNANCE,
    }

    const assetsBalanceSlots: AssetsBalanceSlots = {
        [assets.stkAAVEAddress.toLowerCase()]: {
            ...baseSlots[Asset.STKAAVE],
        },
        [assets.aAaveAddress.toLowerCase()]: {
            ...baseSlots[Asset.AAAVE],
        },
        [assets.aaveAddress.toLowerCase()]: {
            ...baseSlots[Asset.AAVE],
        },
        [assets.contractAddress.toLowerCase()]: {
            ...baseSlots[Asset.GOVCORE],
        },
    };

    const formattedBalances = [{
        underlyingAsset: assets.aaveAddress, // address of voting asset
        value: "100", // total balance (user balance + delegated voting power) on voting block
        userBalance: "100", // should be real user balance on voting block (not current))
        isWithDelegatedPower: false, // value !== userBalance (on voting block)
    }]

    // getting balance proofs for voting viem
    const proofs = await getVotingProofs({
        client: govCoreViemClient, // viem client
        blockHash: proposal.snapshotBlockHash, // from proposal data
        balances: formattedBalances,
        address: voterAddress, // signer or representation address
        aAaveAddress: assets.aAaveAddress,
        slots: assetsBalanceSlots,
    });
    
    // getting balance proofs for voting ether js v5
    const proofsEtherJs = await eGetVotingProofs({
        provider: govCoreRPCProvider, // ether js v5 provider
        blockHash: proposal.snapshotBlockHash, // from proposal data
        balances: formattedBalances,
        address: voterAddress, // signer or representation address
        aAaveAddress: assets.aAaveAddress,
        slots: assetsBalanceSlots,
    });
```

## How to update cache

The cache is updated automatically every 3 hours, but you can do this locally:

- Clone project from github
- Create an env file with network name, here is an example [env](./.env.example)

after

```sh
yarn cache:update && yarn cache:parse
```

## License

Copyright © 2024, [BGD Labs](https://bgdlabs.com/). Released under the [MIT License](./LICENSE).
