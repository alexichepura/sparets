const path = require('path')
const webpack =   require('webpack')
const Extract = require('extract-text-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_PROD = NODE_ENV === 'production'
const PATH_DIST = path.resolve(__dirname, 'public', 'dist')

const config = {
  performance: {
    hints: IS_PROD ? 'warning' : false
  },
  devtool: IS_PROD ? 'source-map' : 'cheap-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: ['./src/index.tsx'],
  output: {
    filename: '[name].js',
    path: PATH_DIST,
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    }, {
      test: /\.tsx?$/,
      loaders: [
        'react-hot-loader/webpack',
        {
          loader: 'awesome-typescript-loader',
          options: {
            target: IS_PROD ? 'es5' : 'es6'
          }
        }
      ],
      exclude: path.resolve(__dirname, 'node_modules'),
      include: path.resolve(__dirname, 'src'),
    }, {
      test: /\.css$/,
      loaders: IS_PROD
        ? Extract.extract([
          'css-loader?-url&sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]',
          'postcss-loader'
        ])
        : [
          'style-loader?sourceMap',
          'css-loader?-url&modules&importLoaders=1&localIdentName=[path]_[name]_[local]',
          'postcss-loader'
        ]
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./public/dist/dll-manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          require('postcss-import')(),
          require('postcss-cssnext')({
            browsers: [`last ${IS_PROD ? 2 : 1} versions`]
          })
        ]
      }
    })
  ]
}

if (IS_PROD) {
  config.plugins.push(
    new Extract({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  )
} else {
  config.entry.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
  )
}

module.exports = config
