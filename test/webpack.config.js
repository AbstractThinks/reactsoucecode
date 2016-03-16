var webpack = require('webpack');

module.exports = {
  entry: {
       entry1: './componet/comment/commentBox.js'
  },
  output:{
		path:'./build/',
		filename: '[name].js',
		chunkFilename: '[id].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/,    loader: "jsx-loader" }
    ]
  }
};