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
      filename: 'js/bundle.js',
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
        warnings: true,
        errors: true,
        colors: true,
        modules: false,
        chunks: false
      },
      watchOptions: {
        ignored: /node_modules/
      },
      proxy: {
        '/api': {
          target: 'https://www.jianshu.com',
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
        }
      },
      historyApiFallback: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    watch: true
  });
};
