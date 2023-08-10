const { merge } = require('webpack-merge')
const webpack = require('webpack')

const paths = require('./webpack.paths.js')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  target: 'web',

  // Spin up a server for quick development
  devServer: {
    hot: true,
    port: 32768,
    host: '127.0.0.1',
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    devMiddleware: {
      stats: 'normal',
      writeToDisk: true,
    },
    static: {
      directory: paths.build,
      staticOptions: {},
      publicPath: "/dist/",
      serveIndex: true,
      watch: true
    }
  },
})
