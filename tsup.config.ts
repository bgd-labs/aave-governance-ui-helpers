import { Options } from 'tsup';

const config: Options = {
  entry: ['src/helpers/*.ts', 'src/index.ts', 'src/abis/*.ts'],
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
