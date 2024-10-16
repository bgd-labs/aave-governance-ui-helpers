import { Options } from 'tsup';

const config: Options = {
  entry: ['src/abis/*.ts', 'src/utils/ether-v5/**/*.ts', 'src/index.ts'],
  sourcemap: true,
  format: ['iife', 'cjs', 'esm'],
  dts: {
    compilerOptions: {
      moduleResolution: 'bundler',
      allowSyntheticDefaultImports: true,
      strict: true,
    },
  },
  // otherwise .env is ordered wrongly
  // https://github.com/evanw/esbuild/issues/399
  splitting: false,
};

export default config;
