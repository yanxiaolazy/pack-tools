const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

const {resolve} = require('./utils');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'YanXiaoLazy',
      template: resolve('public/index.html')
    }),
    //开启HMP(热更新)
    // new webpack.HotModuleReplacementPlugin()
  ]
}