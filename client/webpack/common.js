const webpack = require('webpack');
const path = require('path');
const mapValues = require('lodash/mapValues');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const constants = require('./constants');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index.jsx',
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: mapValues(constants.RESOLVE_PATHS, str => (
      path.join(process.cwd(), ...str.split('/'))
    )),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: constants.JS_LOADERS.use,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          ...constants.CSS_LOADERS.use,
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: constants.FILE_LOADERS.use,
      },
    ],
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].bundle.js',
  },
};
