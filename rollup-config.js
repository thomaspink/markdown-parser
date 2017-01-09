import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'dist/lib/index.js',
  dest: 'dist/markdown-parser.bundle.js',
  format: 'umd',
  moduleName: 'markdown-parser',
  plugins: [
    nodeResolve({ jsnext: true, main: true })
  ],
  sourceMap: true
}
