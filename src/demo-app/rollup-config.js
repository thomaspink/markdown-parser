export default {
  entry: 'dist/_tmp/index.js',
  dest: 'dist/demo.bundle.js',
  format: 'umd',
  moduleName: 'demo',
  external: ['markdown-parser'],
  sourceMap: true,
  globals: {
    'markdown-parser': 'markdown-parser',
  }
}
