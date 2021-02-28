const {resolve} = require('./utils');

module.exports = {
  module: {
    rules: [
      //解析react
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
        include: resolve('./src')
      },
      //解析css, sass
      {
        test: /\.s?[ca]ss/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          }
        ]
      },
      //解析image
      {
        test: /\.(png|jepg|svg|jpg|gif)$/i,
        type: 'asset/resource'
      },
      //解析字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
}