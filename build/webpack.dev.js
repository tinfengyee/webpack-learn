const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  // devtool: 'eval-cheap-module-source-map', // cheap 没有列映射, module第三方模块映射
  output: {
    filename: '[name].js',
		chunkFilename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    // hotOnly: true, // 即使构建失败也不刷新
    open: true,
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
    new webpack.HotModuleReplacementPlugin(),
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
  },
  optimization: {
    /*
      tree shaking, 去除未引用代码(dead code), dev 仅作提示,未真正去除;; prod默认配置true,并且默认开启new webpack.optimize.ModuleConcatenationPlugin();, 所以prod一般不用配置这个选项,。
      需要package.json配置sideEffects,在js引入css会被tk(因为没有导出), "sideEffects": ["**`/`*.css","**`/*``.scss",]
    */
    // usedExports: true,
    // runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all'
    // }
                      
  }
})

// module.exports = devConfig;