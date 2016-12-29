const express = require('express')
const path = require('path')
const webpack = require('webpack')
const IS_PROD = process.env.NODE_ENV === 'production'

const app = express()

if (!IS_PROD) {
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

const getHTML = props => (
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>SPARETS</title>
      ${IS_PROD
        ? '<link rel="stylesheet" href="/dist/main.css" />'
        : ''}
    </head>
    <body>
      <div id="app"></div>
      <script src="/dist/dll.js"></script>
      <script src="/dist/main.js"></script>
    </body>
  </html>`
)

const html = getHTML()

app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
  res.send(html)
})

app.listen(3000, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:3000/')
})
