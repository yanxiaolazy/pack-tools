const {merge} = require('webpack-merge');

const {resolve} = require('./utils');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8000,
    contentBase: resolve('./build'),
    compress: true,
    hot: true,
    historyApiFallback: true
  },
})