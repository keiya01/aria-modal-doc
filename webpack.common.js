const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { output } = require('./webpack.config');

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';
const polyfills = [
  {
    from: `${webcomponentsjs}/webcomponents-loader.js`,
    to: path.join(output, 'vendor'),
    flatten: true
  },
  {
    from: `${webcomponentsjs}/bundles/*.js`,
    to: path.join(output, 'vendor', 'bundles'),
    flatten: true
  },
  {
    from: `${webcomponentsjs}/custom-elements-es5-adapter.js`,
    to: path.join(output, 'vendor'),
    flatten: true
  }
];

module.exports = {
  entry: './src/app-page.ts',
  output: {
    path: output,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(polyfills)
  ]
};
