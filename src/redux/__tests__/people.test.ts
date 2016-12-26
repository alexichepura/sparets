import { REQUEST_PEOPLE, RECEIVE_PEOPLE } from '../constants/people'
import { people } from '../reducers/people'

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


