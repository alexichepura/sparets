const express = require('express')
const path = require('path')
const webpack = require('webpack')

const app = express()

if ('production' !== process.env.NODE_ENV) {
  const webPackConfig = require('./webpack.config')
  const compiler = webpack(webPackConfig)
  const devMiddleware = require('webpack-dev-middleware')
  const hotMiddleware = require('webpack-hot-middleware')
  app.use(devMiddleware(compiler, {
    publicPath: webPackConfig.output.publicPath,
    historyApiFallback: true
  }))
  app.use(hotMiddleware(compiler))
}

app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:3000/')
})
