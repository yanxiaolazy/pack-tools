const {merge} = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    //模块只导出被使用的成员
    usedExports: true,
    //压缩输出结果
    // minimize: true, //当开启 OptimizeCssAssetsWebpackPlugin时， 会禁用内部的TerserWebpackPlugin
    minimizer: [
      new TerserWebpackPlugin(), //当开启OptimizeCssAssetsWebpackPlugin时， 需手动自行添加TerserWebpackPlugin
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  plugins: [
    //文件哈希值就不会意外更改
    new webpack.ids.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigestLength: 20
    }),
  ]
});