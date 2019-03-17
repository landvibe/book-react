const path = require('path');
const MyPlugin = require('./my-plugin');

module.exports = {
  entry: {
    app1: './src/index1.js',
    app2: './src/index2.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MyPlugin({ showSize: true })],
  mode: 'production',
};
