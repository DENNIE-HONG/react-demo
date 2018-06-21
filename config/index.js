const path = require('path');
const resolve = (dir) => {
  return path.resolve(__dirname, '..', dir); // 函数处理路径拼接
};
module.exports = {
  common: {
    entry: resolve('src/index.js'),
    sourceCode: resolve('src'), // 源码目录路径
    assetsDirectory: resolve('dist'),
    projectRoot: resolve('/')
  },
  development: {
    env: {
      production: false
    },
    port: 7777, //端口号
    assetsPublicPath: '/', // 编译发布的根目录
    assetsDirectory: resolve('dist'),//资源路径
    assetsViews: resolve('src/index.html') //页面模板
  }
};
