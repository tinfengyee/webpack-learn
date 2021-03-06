const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');
// const devConfig = require('./webpack.dev');
// const prodConfig = require('./webpack.prod');

const commonConfig = {
  entry: {
    main: './src/index.js'
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
    // new webpack.ProvidePlugin({ // 垫片/ 预置依赖(自动帮你Import在头部)
    //   '$': 'jquery'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ], // 自动解析确定的扩展
  },
  optimization: {
    // 抽离runtime, 默认值是 false：每个入口 chunk 中直接嵌入 runtime。 -- 如果打包[contenthash]没改动就变化了, 可以配置这个'single/runtime',防止文件缓存了.
    runtimeChunk: { name: entrypoint => `runtime~${entrypoint.name}` }, // 运行时文件,库和业务逻辑(模块)有关联, 通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块 (https://webpack.docschina.org/concepts/manifest/)
    splitChunks: {
      chunks: 'all'
    },
    /*
      tree shaking, 去除未引用代码(dead code), dev 仅作提示,未真正去除;; prod默认配置true,并且默认开启new webpack.optimize.ModuleConcatenationPlugin();, 所以prod一般不用配置这个选项,。
      需要package.json配置sideEffects,在js引入css会被tk(因为没有导出), "sideEffects": ["**`/`*.css","**`/*``.scss",]
    */
    usedExports: true,

    /* 注意: webpack5配置略有不同 */ 
    /*
    splitChunks: {
      chunks: 'all',
      minSize: 20000, // 如lodash大于20kb才进行代码分割
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1, // (lib)lodash被引用1次及以上
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: { // 为什么叫 cacheGroups 缓存组, 如入口引入lodash和jq, webpack先把lodash缓存着, 然后接着缓存jq,打包到同一个文件
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 优先放到优先级高的
          // filename: '[name].bundle.js'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          // filename: '[name].bundle.js'
        }
      }
    }
    */
  }
}

module.exports = commonConfig;
// module.exports = (env) => {
//   if (env && env.production) {
//     return merge(commonConfig, prodConfig);
//   } else {
//     return merge(commonConfig, devConfig);
//   }
// }