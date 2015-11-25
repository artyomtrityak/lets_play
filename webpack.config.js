'use strict';

var webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  path = require('path');

var VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-router',
  'bluebird',
  'classnames',
  'lodash',
  'history'//,
  /*'leaflet',*/
  /*'jquery',*/
  /*'spin.js'*/
];

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8090',
      './app/javascript/index.js'
    ],
    vendor: VENDOR_LIBS
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?stage=1&optional=runtime']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    path: path.join('./app/build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/app/build/'
  },
  eslint: {
    configFile: '.eslintrc',
    emitError: true
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor', /* filename= */'vendor.bundle.js'
    )
  ],
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    inline: true,
    hot: true
  },
  devtool: 'source-map' // source maps with debugging, slow
  //devtool: 'eval-source-map'
};
