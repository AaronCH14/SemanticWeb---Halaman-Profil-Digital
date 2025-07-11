const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './src',
    port: 8080,
    open: true,
    hot: true,
  }
});
