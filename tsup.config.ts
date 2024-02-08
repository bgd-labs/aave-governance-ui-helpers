import { Options } from 'tsup';

const config: Options = {
  entry: [
    'src/abis/*.ts',
    'src/scripts/update-cache-package.ts',
    'src/utils/viem/**/*.ts',
    'src/utils/ether-v5/**/*.ts',
    'src/utils/generic/*.ts',

    'src/index.ts',
  ],
  sourcemap: true,
  format: ['iife', 'cjs', 'esm'],
  dts: {
    compilerOptions: {
      moduleResolution: 'node',
      allowSyntheticDefaultImports: true,
      strict: true,
    },
  },
  // otherwise .env is ordered wrongly
  // https://github.com/evanw/esbuild/issues/399
  splitting: false,
};

export default config;
