const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/index1.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 2,
          name: 'venders',
        },
        default: {
          minChunks: 1,
          priority: 1,
          name: 'default',
        },
      },
    },
  },
};
