const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
    // use full path. path.join(process.cwd(), 'build/**/*')
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      cleanStaleWebpackAssets: true
    }),
    new HtmlWebpackPlugin({
      title: 'Title',
      template: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images',
              // publicPath: '//CDN',
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
}