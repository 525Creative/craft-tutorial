const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const paths = require('./webpack.paths.js')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',

  devtool: false,

  output: {
    filename: 'js/[name].[contenthash].js',
  },

  plugins: [
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          // ** A chain of loaders is executed in reverse order. **

          // Note: style-loader is for development, MiniCssExtractPlugin is for production
          MiniCssExtractPlugin.loader,

          // Resolves @import and url() in CSS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin()
    ],
  },
})
