var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
       app: './component/reactTransitionGroup2.js'
  },
  output:{
		path:'./build',
		filename: '/[name].min.js',
		chunkFilename: '[id].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react','es2015']
        }
      },
      {
        test: /\.scss$/,
        loader:ExtractTextPlugin.extract("css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./style/[name].css"),
  ]
};
