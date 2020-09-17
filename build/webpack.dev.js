const path = require('path');
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', // cheap 没有列映射, module第三方模块映射
  output: {
    filename: '[name].js',
		chunkFilename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    hotOnly: true, // 即使构建失败也不刷新
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
        test: /\.(c|sc)ss$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
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
  }
}

module.exports = devConfig;