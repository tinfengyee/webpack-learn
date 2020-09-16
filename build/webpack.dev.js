const path = require('path');
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
		chunkFilename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: false,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        secure: false, // https
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
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

module.exports = devConfig;