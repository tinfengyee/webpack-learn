const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    // use full path. path.join(process.cwd(), 'build/**/*')
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
    new CleanWebpackPlugin({
      verbose: false,
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}