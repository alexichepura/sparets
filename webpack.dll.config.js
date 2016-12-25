const path = require('path')
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
const IS_PROD = NODE_ENV === 'production'
const PATH_DIST = path.resolve(__dirname, 'public', 'dist')

const config = {
  devtool: IS_PROD ? 'source-map' : 'eval',
  entry: {
    dll: [
      'react', 'react-dom', 'react-router',
      'redux', 'react-redux', 'redux-thunk'
    ]
  },
  output: {
    filename: '[name].js',
    path: PATH_DIST,
    library: '[name]_lib',
  },
  module: {
    // rules: [{
    //   test: require.resolve('react'),
    //   loader: 'expose?React'
    // }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      },
    }),
    new webpack.DllPlugin({
      path: path.resolve(PATH_DIST, '[name]-manifest.json'),
      name: '[name]_lib'
    }),
  ]
}

if (!IS_PROD) {
  config.entry.dll.unshift(
    // 'react-hot-loader/patch'
    // 'webpack-hot-middleware/client'
  )
}

module.exports = config
