import * as React from 'react'

class Deep2 extends React.Component<any, any> {
  render() {
    return <span>
      !Change me. Notice, counter doesn't reset.
    </span>
  }
}

class Deep1 extends React.Component<any, any> {
  render() {
    return <span className='leo-need-deeper'>
      <Deep2 />
    </span>
  }
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000)
  }
  render() {
    return <div>
      <div className='deep'>
        <Deep1 />
        <h2>{this.state.count}</h2>
      </div>
    </div>
  }
}

export default App
