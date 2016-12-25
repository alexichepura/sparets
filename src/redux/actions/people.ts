import { RECEIVE_PEOPLE, REQUEST_PEOPLE } from '../constants/people'

function requestPeople() {
  return {
    type: REQUEST_PEOPLE
  }
}

function receivePeople(json) {
  return {
    type: RECEIVE_PEOPLE,
    people: json.results
  }
}

export function fetchPeople() {
  return dispatch => {
    dispatch(requestPeople())
    return fetch(`https://randomuser.me/api/?results=3`)
      .then(response => response.json())
      .then(json => dispatch(receivePeople(json)))
  }
}
