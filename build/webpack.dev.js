const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('../config');
const devConfig = config.development;
module.exports = (env) => {
  env.production = env.production !== 'false';
  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: 'bundle.js',
      path: devConfig.assetsDirectory,
      publicPath: devConfig.assetsPublicPath
    },
    devServer: {
      contentBase: devConfig.assetsViews,
      watchContentBase: true,
      port: devConfig.port,
      compress: true,
      hot: true,
      publicPath: devConfig.assetsPublicPath,
      overlay: true,
      stats: {
        colors: true,
        modules: false,
        chunks: false
      },
      watchOptions: {
        ignored: /node_modules/
      },
      proxy: {
        '*': 'https://www.jianshu.com'
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    watch: true
  });
};
