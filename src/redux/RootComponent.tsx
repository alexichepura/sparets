import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import People from './containers/People'

const store = configureStore()

export default class Root extends Component<any, any> {
  render() {
    return <Provider store={store}>
      <People />
    </Provider>
  }
}
