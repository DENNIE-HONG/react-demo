const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WEBPACK_DEV_CONFIG = require('../config').WEBPACK_DEV_CONFIG;
const React = require('react');
module.exports = (env) => {
  env.production = env.production !== 'false';
  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: 'js/[name].js',
      path: WEBPACK_DEV_CONFIG.assetsDirectory,
      publicPath: WEBPACK_DEV_CONFIG.assetsPublicPath
    },
    devServer: {
      contentBase: WEBPACK_DEV_CONFIG.assetsViews,
      watchContentBase: true,
      port: WEBPACK_DEV_CONFIG.port,
      compress: true,
      hot: true,
      publicPath: WEBPACK_DEV_CONFIG.assetsPublicPath,
      overlay: true,
      stats: {
        colors: true,
        modules: false,
        chunks: false,
        children: false,
        chunkModules: false
      },
      watchOptions: {
        ignored: /node_modules/
      },
      proxy: {
        '/api': {
          target: 'https://www.jianshu.com',
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
        },
        '/zhihu': {
          target: 'https://www.zhihu.com',
          changeOrigin: true,
          pathRewrite: { '^/zhihu': '' }
        },
        '/wy': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: { '^/wy': '' }
        }
      },
      historyApiFallback: true,
      after: function () {
        const { whyDidYouUpdate } = require('why-did-you-update');
        whyDidYouUpdate(React);
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
    ],
    watch: true
  });
};
