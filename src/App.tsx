import * as React from 'react'
import Header from './part/Header'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000)
  }

  render() {
    return <div>
      <div className='deep'>
        <Header />
        <h2>{this.state.count}</h2>
      </div>
    </div>
  }
}

export default App
