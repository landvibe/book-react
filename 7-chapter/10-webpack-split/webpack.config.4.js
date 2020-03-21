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
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 1,
        },
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react.bundle',
          priority: 2,
          minSize: 100,
        },
      },
    },
  },
};
