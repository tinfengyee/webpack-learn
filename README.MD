# webpack-learn

## 重点内容

[生产环境](https://webpack.docschina.org/guides/production/#setup)

## 文章

[webpack易混淆术语@卤蛋实验室/掘金](https://webpack.docschina.org/guides/production/#setup)
> webpack 中，module，chunk 和 bundle 的区别是什么？
> webpack 中，filename 和 chunkFilename 的区别是什么？
> webpack 中，webpackPrefetch、webpackPreload 和 webpackChunkName 的区别是什么？
> webpack 中，hash、chunkhash、contenthash 的区别是什么？
> webpack 的 sourse-map 中 eval、cheap、inline 和 module 各是什么意思？
> 你真的需要 Webpack DllPlugin 吗？

## 链接

> [bundle 分析(bundle analysis)](https://webpack.docschina.org/guides/code-splitting/#bundle-analysis)
> [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)`推荐`
> [官方术语](https://www.webpackjs.com/glossary/) , 在网站底部.

## 其他

**预获取/预加载模块(prefetch/preload module)**

> 浏览器控制台 -> performance -> (ctrl + shift + p) -> >coverage -> 查看代码覆盖率
> 某些界面 利用异步组件通过`懒加载`, 更容易提升性能(如vue路由),
> 缓存带来的性能有限, 
> prefetch/preload 提前下载好(缓存),推荐用prefect
> prefect 核心代码下载完才执行(空闲时间),
> preload 并行方式开始加载
> --懒加载肯能会有用户体验, 所以通过prefect先加载好,注意prefect有兼容性
> **前端性能优化, 缓存并不是最重要的点, 应该转到code coverage代码覆盖率上面**

**eslint**
CLI
```shell
npx eslint --init
npx eslint src --fix
```
(eslint-CLI)[https://eslint.bootcss.com/docs/user-guide/command-line-interface]