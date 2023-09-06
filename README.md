# Repository with cache and helpers for aave governance v3

This repository saves and updates the cache for finished proposals, also includes helper functions connected to Aave governance version 3.

## How to use

for lowdb initial:
```sh
yarn build:populate-cache && yarn cache:update && yarn cache:parse
```

for lowdb update:
```sh
yarn cache:update && yarn cache:parse
```

## License

Copyright © 2023, [BGD Labs](https://bgdlabs.com/). Released under the [MIT License](./LICENSE).
