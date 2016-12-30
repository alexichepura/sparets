// import * as React from 'react'
// import * as renderer from 'react-test-renderer'
import React from 'react'
import renderer from 'react-test-renderer'

import { REQUEST_PEOPLE, RECEIVE_PEOPLE } from '../constants/people'
import { people } from '../reducers/people'
import PeopleComponent from '../components/People'

describe('people reducers', () => {
  it('changes isFetching to true', () => {
    const state = {
      isFetching: false
    }

    const result = people(state, {
      type: REQUEST_PEOPLE
    })

    expect(result.isFetching).toBeTruthy();
  })
})


describe('Snapshot People component', () => {
  it('renders simple list of people', () => {
    const peopleJSON = [{
      email: 'john@doe.com'
    },{
      email: 'jack@daniels.com'
    }]
    const component = renderer.create(
      <PeopleComponent
        people={peopleJSON}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
