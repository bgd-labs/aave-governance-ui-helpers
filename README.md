# Repository with cache and helpers for aave governance v3

This repository saves and updates the cache for Aave governance, also includes helper functions connected to Aave governance UI.

### Installation like a package

#### npm
<code>npm i @bgd-labs/aave-governance-ui-helpers</code>

#### yarn
<code>yarn add @bgd-labs/aave-governance-ui-helpers</code>

## How to update cache

- Clone project from github
- Create an env file with network name, here is an example [env](./.env.example)

after

```sh
yarn cache:update && yarn cache:parse
```

## License

Copyright © 2024, [BGD Labs](https://bgdlabs.com/). Released under the [MIT License](./LICENSE).
