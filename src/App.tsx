import * as React from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Header from './part/Header'
import Home from './page/Home'
import Login from './page/Login'
import Counter from './page/Counter'
import ReduxPeople from './redux/RootComponent'
import MobxPeople from './mobx/People'

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <Router>
      <div>
        <Header />
        <ul style={{marginTop: 100}}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
          <li><Link to='/redux/people'>Redux People</Link></li>
          <li><Link to='/mobx/people'>Mobx People</Link></li>
        </ul>
        <hr/>

        <main style={{marginTop: 100}}>
          <Match exactly pattern='/' component={Home} />
          <Match pattern='/login' component={Login} />
          <Match pattern='/counter' component={Counter} />
          <Match pattern='/redux/people' component={ReduxPeople} />
          <Match pattern='/mobx/people' component={MobxPeople} />
        </main>
      </div>
    </Router>
  }
}
