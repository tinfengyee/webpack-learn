const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].c_[contenthash].js',
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
        test: /\.(c|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // 提取CSS文件
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // modules: true /* 使用 import style from './style.scss'; el.classList.add(style.red);*/
            }
          },
          'postcss-loader',
          'sass-loader'
          // 将 Sass 编译成 CSS
        ],
      },
    ]
  },
  optimization: {
    /*
      tree shaking, 去除未引用代码(dead code), dev 仅作提示,未真正去除;; prod默认配置true,并且默认开启new webpack.optimize.ModuleConcatenationPlugin();, 所以prod一般不用配置这个选项,。
      需要package.json配置sideEffects,在js引入css会被tk(因为没有导出), "sideEffects": ["**`/`*.css","**`/*``.scss",]
    */
    // usedExports: true,
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  }
})
