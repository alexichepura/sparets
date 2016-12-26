import React, { Component } from 'react'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'

class PeopleStore {
  people = observable([])
  @observable isFetching = false

  // @computed get filtered() {
  //   return this.people.filter(person => person)
  // }

  fetchPeople() {
    this.isFetching = true
    fetch(`https://randomuser.me/api/?results=3`)
      .then(response => response.json())
      .then(this.fetchedPeopleJSON)
  }

  @action fetchedPeopleJSON = json => {
    this.isFetching = false
    this.people.replace(json.results)
  }
}

const peopleStore = new PeopleStore()

const PersonLine = ({person}) => <li>
  {person.email}
</li>

const PeopleList = observer(() => <ul>
  {peopleStore.people.map(person => <PersonLine
    key={person.email}
    person={person}
  />)}
</ul>)

@observer
export default class People extends Component<any, any> {

  componentDidMount() {
    peopleStore.fetchPeople()
  }

  render() {
    const { people, isFetching } = peopleStore
    return <div>
      <h1>People list from <a href="https://randomuser.me">randomuser.me</a></h1>
      {isFetching && people.length === 0 &&
        <h2>Loading...</h2>
      }
      {!isFetching && people.length === 0 &&
        <h2>Empty.</h2>
      }
      {people.length > 0 &&
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <PeopleList/>
        </div>
      }
    </div>
  }
}
