import { REQUEST_PEOPLE, RECEIVE_PEOPLE } from '../constants/people'

export function people(state: any = {
  items: [],
  isFetching: false
}, action) {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PEOPLE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.people
      })
    default:
      return state
  }
}
