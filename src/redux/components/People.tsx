import React, { Component } from 'react'

export const PersonLine = ({person}) => <li>
  {person.email}
</li>

const People = ({people}) => <ul>
  {people.map(person => <PersonLine
    key={person.email}
    person={person}
  />)}
</ul>

export default People
