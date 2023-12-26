import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { defineConfig } from 'tsup';

// https://github.com/egoist/tsup/issues/953
export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['src/helpers/*.ts', 'src/index.ts', 'src/abis/*.ts'],
  outDir: './dist',
  bundle: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  dts: true,
  esbuildPlugins: [esbuildPluginFilePathExtensions({ cjsExtension: 'js' })],
});
