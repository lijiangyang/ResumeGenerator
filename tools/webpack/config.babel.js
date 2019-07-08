"use strict"; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
// const MinifyPlugin = require('babel-minify-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
  require('./WIT.config')
).development(isDev);

// Disable CSSModules here
const CSSModules = true;
// Enable build process terminated while there's an eslint error
const eslint = false;
// Enable build process terminated while there's an stylelint error
const stylelint = false;
// Register vendors here
const vendor = [
  // Allows you to use the full set of ES6 features on client-side (place it before anything else)
  'core-js/es6/map',
  'core-js/es6/set',
  'react',
  'react-dom',
  'react-hot-loader',
  'history',
  'react-helmet',
  'axios',
  'redbox-react',
  'lodash'
];

// Setting the plugins for development/prodcution
const getPlugins = () => {
  // Common
  const plugins = [
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true,
      disable: isDev, // Disable css extracting on development
      ignoreOrder: CSSModules
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        // Javascript lint
        eslint: { failOnError: eslint },
        debug: isDev,
        minimize: !isDev
      }
    }),
    // Style lint
    new StyleLintPlugin({ failOnError: stylelint }),
    // Setup enviorment variables for client
    new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeEnv) }),
    // Setup global variables for client
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    webpackIsomorphicToolsPlugin
  ];

  if (isDev) {
    // For development
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      // Prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/)
    );
  } else {
    plugins.push(
      // For production
      // new MinifyPlugin({}, { test: /\.jsx?$/, comments: false }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),
      // new UglifyJsPlugin(),
      new ParallelUglifyPlugin({
        uglifyJS: {
          output: {
            comments: false
          },
        }
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      // new CompressionPlugin({
      //   asset: '[path].gz[query]',
      //   algorithm: 'gzip',
      //   test: /\.jsx?$|\.css$|\.less$|\.html$/,
      //   threshold: 10240,
      //   minRatio: 0.8
      // })
    );
  }

  return plugins;
};

// Setting the entry for development/prodcution
const getEntry = () => {
  // For development
  let entry = [
    // Allows you to use the full set of ES6 features on client-side (place it before anything else)
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    './src/client.js'
  ];

  // For prodcution
  if (!isDev) {
    entry = {
      main: ['babel-polyfill', './src/client.js'],
      // Register vendors here
      vendor
    };
  }

  return entry;
};

// Setting webpack config
module.exports = {
  name: 'client',
  target: 'web',
  cache: isDev,
  // devtool: isDev ? 'cheap-module-source-map' : 'hidden-source-map',
  devtool: false,
  context: path.join(process.cwd()),
  entry: getEntry(),
  output: {
    path: path.join(process.cwd(), './public/assets'),
    publicPath: '/assets/',
    // Don't use chunkhash in development it will increase compilation time
    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
    pathinfo: isDev
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!(query-string|strict-uri-encode)\/).*/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDev
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 1,
                sourceMap: true,
                // "context" and "localIdentName" need to be the same with server config,
                // or the style will flick when page first loaded
                context: path.join(process.cwd(), './src'),
                minimize: !isDev
              }
            },
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: CSSModules,
                // "context" and "localIdentName" need to be the same with server config,
                // or the style will flick when page first loaded
                context: path.join(process.cwd(), './src'),
                localIdentName: '[name]__[local]--[hash:base64:5]',
                minimize: !isDev
              }
            },
          ]
        })
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 2,
                sourceMap: true,
                modules: CSSModules,
                context: path.join(process.cwd(), './src'),
                localIdentName: '[path]__[name]__[local]--[hash:base64:5]',
                minimize: !isDev
              }
            },
            {
              loader: 'less',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: !isDev
              }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 2,
                sourceMap: true,
                context: path.join(process.cwd(), './src'),
                minimize: !isDev
              }
            },
            {
              loader: 'less',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: !isDev
              }
            }
          ]
        })
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url',
        options: { limit: 10000 }
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        // Any image below or equal to 10K will be converted to inline base64 instead
        use: [
          {
            loader: 'url',
            options: { limit: 10240 }
          },
          // Using for image optimization
          {
            loader: 'image-webpack',
            options: { bypassOnDebug: true }
          }
        ]
      }
    ]
  },
  plugins: getPlugins(),
  resolveLoader: {
    // Use loaders without the -loader suffix
    moduleExtensions: ['-loader']
  },
  resolve: {
    modules: [path.resolve(__dirname, '../../src/'), 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.json']
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  // https://webpack.github.io/docs/configuration.html#node
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
