import * as React from 'react'
import Router from 'react-router/BrowserRouter'

import Header from './part/Header'
import Side from './part/Side'
import Main from './part/Main'
const s: any = require('./style/App.css')

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <Router>
      <div>
        <Header />
        <div className={s.container}>
          <Side />
          <Main />
        </div>
      </div>
    </Router>
  }
}
