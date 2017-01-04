const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    // must be absolute path, that's why we use path module
    // be sure that work on any os
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    // resolve problem about the img with a var name
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader', // don't forget .babelrc
        test: /\.js$/
      },
      {
        // need to be in this order cause this is from
        // the right to the left
        // this make the css inline in the head
        // use: ['style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader' // first one append
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;