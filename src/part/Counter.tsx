import * as React from 'react'

export default class Counter extends React.Component<any, any> {
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
      <h2>{this.state.count}</h2>
    </div>
  }
}
