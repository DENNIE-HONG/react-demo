const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) => {
  const config = {
    entry: path.resolve(__dirname, '../src/index.js'),
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
      new CleanWebpackPlugin(['dist/*.*'], {
        root: path.resolve(__dirname, '../')
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
          include: path.resolve(__dirname, '../src'),
          use: [
            'babel-loader',
            'eslint-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
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
            }
          ]
        }
      ]
    }
  };
  return config;
};
