const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WEBPACK_COMMON_CONFIG = require('../config').WEBPACK_COMMON_CONFIG;

module.exports = (env) => {
  const config = {
    entry: WEBPACK_COMMON_CONFIG.entry,
    resolve: {
      extensions: ['.js'],
      alias: {
        assets: path.resolve(__dirname, '../src/assets'),
        coms: path.resolve(__dirname, '../src/components'),
        api: path.resolve(__dirname, '../src/api')
      }
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      }
    },
    plugins: [
      new CleanWebpackPlugin([
        `${WEBPACK_COMMON_CONFIG.assetsDirectory}/`,
        `${WEBPACK_COMMON_CONFIG.assetsDirectory}/js/`,
        `${WEBPACK_COMMON_CONFIG.assetsDirectory}/css/`,
        `${WEBPACK_COMMON_CONFIG.assetsDirectory}/img/`
      ], {
        root: WEBPACK_COMMON_CONFIG.projectRoot
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
          include: WEBPACK_COMMON_CONFIG.sourceCode,
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
                resources: [path.resolve(__dirname, '../src/assets/vars.scss'), path.resolve(__dirname, '../src/assets/mixins.scss')]
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
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 2048,
                name: env.production ? 'fonts/[name].[hash:7].[ext]' : 'fonts/[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  };
  return config;
};
