const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./common');
const constants = require('./constants');

module.exports = merge.smart(common, {
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new CleanWebpackPlugin(
      ['../dist'],
      { allowExternal: true },
    ),
    new ExtractTextPlugin('[name].[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(constants.CSS_LOADERS),
      },
    ],
  },
});
