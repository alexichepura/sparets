import React from 'react'
import Match from 'react-router/Match'

import Home from '../page/Home'
import Login from '../page/Login'
import Counter from '../page/Counter'
import ReduxPeople from '../redux/RootComponent'
import MobxPeople from '../mobx/People'

const s: any = require('./Main.css')

export default class Main extends React.Component<any, any> {
  render() {
    return <main className={s.main}>
      <Match exactly pattern='/' component={Home} />
      <Match pattern='/login' component={Login} />
      <Match pattern='/counter' component={Counter} />
      <Match pattern='/redux/people' component={ReduxPeople} />
      <Match pattern='/mobx/people' component={MobxPeople} />
    </main>
  }
}
