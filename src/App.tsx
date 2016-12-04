import * as React from 'react'
import Header from './part/Header'
import Counter from './part/Counter'

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <div>
      <Header />
      <main style={{marginTop: 100}}>
        <Counter/>
      </main>
    </div>
  }
}
