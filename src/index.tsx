declare var module: any

import * as React from 'react'
import { render } from 'react-dom'
const { AppContainer } = require('react-hot-loader')

import App from './App'

const appNode = document.getElementById('app')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  appNode
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      appNode
    )
  })
}
