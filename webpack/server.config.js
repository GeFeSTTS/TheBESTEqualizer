const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = 'dist';

module.exports = {
  name: "server",
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/server/app.js')],
  output: {
    path: path.resolve(__dirname, dist),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  resolve: {
    extensions: [nodeExternals()]
  },
  devServer: {
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    })
  ]
};
