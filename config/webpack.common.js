const {resolve} = require('./utils');
const {plugins} = require('./plugins');
const moduleConfig = require('./module');

module.exports = {
  entry: {
    'pack-tools': resolve('./src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('./build')
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    },
    extensions: ['.js', '.jsx', '.sass', '.scss', '.css']
  },
  plugins,
  module: moduleConfig.module,
}