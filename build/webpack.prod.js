const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.(c|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // 生产环境打开
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
          // 将 Sass 编译成 CSS
        ],
      },
    ]
  }
}

module.exports = prodConfig;