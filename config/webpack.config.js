const {resolve} = require('./utils');
const {plugins} = require('./plugins');
const moduleConfig = require('./module');

// const definePlugin = new webpack.DefinePlugin({
//   PRODUCTION
// });

const isDev = process.env.NODE_ENV !== 'production'; 

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    'pack-tools': resolve('./src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('./build')
  },
  devtool: isDev ? 'eval-cheap-module-source-map' : 'nosources-source-map',
  devServer: {
    port: 8000,
    contentBase: resolve('./build'),
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  resolve: {
    fallback: { 
      "path": require.resolve("path-browserify") 
    },
    extensions: ['.js', '.jsx', '.sass', '.scss', '.css']
  },
  module: moduleConfig.module,
  plugins,
  optimization: {
    //模块只导出被使用的成员
    usedExports: true,
    //压缩输出结果
    minimize: !isDev
  }
}