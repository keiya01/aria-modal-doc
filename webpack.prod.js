const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common');
const { TEMPLATE_PATH } = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[id].[contenthash].chunk.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          chunks: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin(), 
      new OptimizeCSSAssetsWebpackPlugin()
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].chunk.css'
    }),
    new HTMLWebpackPlugin({
      template: TEMPLATE_PATH,
      inject: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
});
