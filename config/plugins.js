const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {resolve} = require('./utils');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'YanXiaoLazy',
      template: resolve('public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}