const path = require('path');
const resolve = (dir) => {
  return path.resolve(__dirname, '..', dir); // 函数处理路径拼接
};
//webpack common 配置
const WEBPACK_COMMON_CONFIG = {
  entry: {
    main: resolve('src/index.js')
  },
  sourceCode: resolve('src'), // 源码目录路径
  assetsDirectory: resolve('dist'),
  projectRoot: resolve('/')
};

//webpack development 配置
const WEBPACK_DEV_CONFIG = {
  env: {
    production: false
  },
  port: 7777, //端口号
  assetsPublicPath: '/', // 编译发布的根目录
  assetsDirectory: resolve('dist'),//资源路径
  assetsViews: resolve('src/index.html') //页面模板
};
// axios 默认配置
const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 20000,
  baseURL: '',
  headers: {
    Accept: 'application/json'
  },
  withCredentials: true
};
module.exports = {
  WEBPACK_COMMON_CONFIG,
  WEBPACK_DEV_CONFIG,
  AXIOS_DEFAULT_CONFIG
};
