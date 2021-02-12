import {terser} from 'rollup-plugin-terser'
import {builtinModules} from 'module';
import {dependencies} from './package.json';
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/index.cjs',
    format: 'cjs',
    plugins: []
  },
  {
    file: 'dist/index.js',
    format: 'es',
    plugins: []
  }],
  plugins: [terser()],
  external: [...builtinModules, ...Object.keys(dependencies)]
};
