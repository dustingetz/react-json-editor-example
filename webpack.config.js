var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index',

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve('./src')
    ],
    modulesDirectories: ['node_modules'],
    alias: {
      'react-json-editor': path.join(__dirname, 'vendor/react-json-editor/src/react-json-editor') // for source maps in the lib
    }
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], include: [path.resolve('./src'), path.join(__dirname, 'vendor/react-json-editor/src')]},
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
};
