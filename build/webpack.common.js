const path = require('path');
module.exports = (env) => {
  let config = {
    entry: path.resolve(__dirname, '../src/App.js'),
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, '../src'),
          use: [
            'babel-loader',
            'eslint-loader'
          ],
          exclude: [/node_modules/]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: env.production ? false: true
              }
            }
          ]
        }
      ]
    }
  }; 
  return config;
}