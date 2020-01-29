const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

function getConfig(isServer) {
  return {
    entry: isServer
      ? { server: './src/server.js' }
      : { main: './src/index.js' },
    output: {
      filename: isServer ? '[name].bundle.js' : '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
    },
    target: isServer ? 'node' : 'web',
    externals: isServer ? [nodeExternals()] : [],
    node: {
      __dirname: false,
    },
    optimization: isServer
      ? {
          splitChunks: false,
          minimize: false,
        }
      : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(
                __dirname,
                isServer ? '.babelrc.server.js' : '.babelrc.client.js',
              ),
            },
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              emitFile: isServer ? false : true,
            },
          },
        },
      ],
    },
    plugins: isServer
      ? []
      : [
          new HtmlWebpackPlugin({
            template: './template/index.html',
          }),
        ],
    mode: 'production',
  };
}
module.exports = [getConfig(false), getConfig(true)];
