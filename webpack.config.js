const path = require('path')
const webpack = require('webpack')
// const Extract = require('extract-text-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_PROD = NODE_ENV === 'production'
const PATH_DIST = path.resolve(__dirname, 'public', 'dist')

const config = {
  devtool: IS_PROD ? 'source-map' : 'eval',
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
        ? Extract.extract(['css?-url&sourceMap&modules&importLoaders=1&' +
          'localIdentName=[hash:base64:5]', 'postcss?sourceMap'])
        : ['style?sourceMap', 'css?-url&modules&importLoaders=1&' +
          'localIdentName=[path]_[name]_[local]', 'postcss']
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
  ],
  // devServer: {
  //   // port: METADATA.PORT,
  //   // host: METADATA.HOST,
  //   historyApiFallback: true,
  //   contentBase: 'dist',
  //   // noInfo: true,
  //   stats: {
  //     chunks: false,
  //     assets: false,
  //     // timings: true,
  //     colors: true,
  //     // hash: false,
  //     // version: false,
  //     // chunks: false,
  //     // modules: false,
  //     // reasons: false,
  //     // children: false,
  //     // source: false,
  //     // errors: false,
  //     // errorDetails: false,
  //     // warnings: false,
  //     // publicPath: false
  //   }
  // }
}

module.exports = config