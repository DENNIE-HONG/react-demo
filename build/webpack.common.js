const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../config');
const commonConfig = config.common;

module.exports = (env) => {
  const config = {
    entry: commonConfig.entry,
    resolve: {
      extensions: ['.js'],
      alias: {
        scss: path.resolve(__dirname, '../src/scss'),
        coms: path.resolve(__dirname, '../src/components')
      }
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      }
    },
    plugins: [
      new CleanWebpackPlugin([
        `${commonConfig.assetsDirectory}/`,
        `${commonConfig.assetsDirectory}/js/`,
        `${commonConfig.assetsDirectory}/css/`
      ], {
        root: commonConfig.projectRoot
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body',
        minify: false,
        xhtml: true,
        cache: false
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: commonConfig.sourceCode,
          use: [
            'babel-loader',
            'eslint-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: !env.production
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !env.production
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !env.production
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [path.resolve(__dirname, '../src/scss/vars.scss'), path.resolve(__dirname, '../src/scss/mixins.scss')]
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: env.production ? 'img/[name].[hash:7].[ext]' : 'img/[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  };
  return config;
};
