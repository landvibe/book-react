const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new webpack.DefinePlugin({
      APP_VERSION: '"1.2.3"', // 또는 JSON.stringify('1.2.3'),
      TEN: '10',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      $: 'jquery',
    }),
  ],
  mode: 'production',
};
