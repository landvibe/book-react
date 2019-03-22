const config = require('./.babelrc.common.js');
config.plugins.push('@babel/plugin-transform-modules-commonjs');
module.exports = config;
