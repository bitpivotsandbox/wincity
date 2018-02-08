const webpack = require('webpack');
const merge = require('webpack-merge');
const DotenvPlugin = require('webpack-dotenv-plugin');
const common = require('./common');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    port: process.env.CLIENT_PORT,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.SERVER_PORT}`,
        secure: false,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DotenvPlugin({
      sample: '../.env.example',
      path: '../.env',
    }),
  ],
});
