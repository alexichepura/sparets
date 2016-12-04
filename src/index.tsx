/// <reference types="webpack-env" />

import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

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
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      appNode
    )
  })
}
