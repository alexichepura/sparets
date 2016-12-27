const path = require('path')
const webpack =   require('webpack')

const NODE_ENV = process.env.NODE_ENV
const IS_PROD = NODE_ENV === 'production'
const PATH_DIST = path.resolve(__dirname, 'public', 'dist')

const config = {
  performance: {
    hints: IS_PROD
  },
  devtool: IS_PROD ? 'source-map' : 'cheap-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  output: {
    filename: '[name].js',
    path: PATH_DIST,
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: "source-map-loader"
    }, {
      test: /\.tsx?$/,
      loaders: [
        "react-hot-loader/webpack",
        "awesome-typescript-loader"
      ],
      exclude: path.resolve(__dirname, 'node_modules'),
      include: path.resolve(__dirname, "src"),
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

module.exports = config
