import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/people'
import People from '../components/People'

class PeopleContainer extends Component<any, any> {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPeople())
  }

  render() {
    const { items, isFetching } = this.props
    return <div>
      <h1>People list from <a href="https://randomuser.me">randomuser.me</a></h1>
      {isFetching && items.length === 0 &&
        <h2>Loading...</h2>
      }
      {!isFetching && items.length === 0 &&
        <h2>Empty.</h2>
      }
      {items.length > 0 &&
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <People people={items} />
        </div>
      }
    </div>
  }
}

function mapStateToProps(state) {
  return state.people
}

export default connect(mapStateToProps)(PeopleContainer)
