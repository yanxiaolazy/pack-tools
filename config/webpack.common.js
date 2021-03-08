const {resolve} = require('./utils');
const {plugins} = require('./plugins');
const moduleConfig = require('./module');

module.exports = {
  entry: resolve('./src/index.js'),
  output: {
    filename: '[name].[contenthash].js',
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
  optimization: {
    //参考 https://zhuanlan.zhihu.com/p/66212099
    splitChunks: {
      chunks: 'all', //将node_modules中的放到单独文件
      minSize: 0, //最小分离包的大小(默认 30kb)
      maxInitialRequests: Infinity, //限制并行请求的最大请求个数（默认 3个）,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        }
      }
    }
  }
}