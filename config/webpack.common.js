const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally')
const webpack = require('webpack')

const paths = require('./webpack.paths.js')

module.exports = {
    entry: {
        // CSS-only
        core: paths.src + '/core.js',
        postmark: paths.src + '/postmark.js',
        blog: paths.src + '/blog.js',

        // JS + CSS

        apiExplorer: paths.src + '/api-explorer.js',
        comic: paths.src + '/comic.js',
        developerDocs: paths.src + '/developer-docs.js',
        labs: paths.src + '/labs.js',
        landing: paths.src + '/landing.js'
    },

    output: {
        path: paths.build,
        publicPath: '/dist/',
        filename: '[name].bundle.js',
        clean: true,
    },

    plugins: [
        // Generates a manifest.json file for use in Craft CMS with Twigpack
        new WebpackManifestPlugin(),

        // Support jQuery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),

        // Support Swagger UI bundle
        new MergeIntoSingleFilePlugin({
            files: {
                'swagger-ui-bundle.js': [
                    paths.src + '/javascripts/vendor/api-explorer/jquery-1.8.0.min.js',
                    paths.src + '/javascripts/vendor/api-explorer/jquery.slideto.min.js',
                    paths.src + '/javascripts/vendor/api-explorer/jquery.wiggle.min.js',
                    paths.src + '/javascripts/vendor/api-explorer/jquery.ba-bbq.min.js',
                    paths.src + '/javascripts/vendor/api-explorer/handlebars-2.0.0.js',
                    paths.src + '/javascripts/vendor/api-explorer/underscore.min.js',
                    paths.src + '/javascripts/vendor/api-explorer/backbone.min.js',
                    paths.src + '/javascripts/vendor/api-explorer/swagger-ui.js',
                    paths.src + '/javascripts/vendor/api-explorer/swagger-oauth.js',
                    paths.src + '/javascripts/vendor/api-explorer/marked.js',
                    paths.src + '/javascripts/vendor/api-explorer/highlight.pack.js',
                ]
            }
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: [
                    // ** A chain of loaders is executed in reverse order. **

                    // Injects CSS into the DOM (only in development)
                    'style-loader',

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
            {
                test: /\.(svg|png|jpg|webp|jpeg|gif|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
}

