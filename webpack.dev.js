const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');
const { TEMPLATE_PATH, output } = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: output,
    compress: true,
    historyApiFallback: true,
    port: process.env.PORT || '3000'
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].chunk.css'
    }),
    new HTMLWebpackPlugin({ 
      template: TEMPLATE_PATH,
      inject: false
    })
  ]
});
