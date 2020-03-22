const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 실습1
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
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
  ],
  mode: 'production',
};

// 실습2
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: '[name].[chunkhash].js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/dist/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             configFile: path.resolve(__dirname, '.babelrc.client.js'),
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './template/index.html',
//     }),
//   ],
//   mode: 'production',
// };
