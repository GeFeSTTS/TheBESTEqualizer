const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputDirectory = 'dist';
const srcClientPath = path.resolve('./', 'src/client');

module.exports = {
  entry: ['babel-polyfill', './src/client/app.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader')
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|img|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      src: srcClientPath
    },
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
    disableHostCheck: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png'
    })
  ]
};
