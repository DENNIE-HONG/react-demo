const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
module.exports = (env) => {
  env.production = env.production !== 'false';
  return merge(common(env), {
    mode: 'development',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
    devServer: {
      contentBase: path.resolve(__dirname, '../'),
      watchContentBase: true,
      port: 7777,
      compress: true,
      hot: true,
      publicPath: '/',
      overlay: true,
      stats: {
        colors: true
      }
    }
  });
}