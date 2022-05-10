import { useState } from 'react'
import './App.css'
import AddToList from './comps/AddToList'
import List from './comps/List'

interface PeopleList {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

interface AddPerson {
  name: string
  url: string
  age: string
  note: string
}

const peopleList = [
  {
    name: 'mohsen',
    url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    age: 21,
    note: 'mohsen is 21yo',
  },
  {
    name: 'ali',
    url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    age: 22,
    note: 'ali is 22yo',
  },
  {
    name: 'mamad',
    url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    age: 23,
    note: 'mamad is 23yo',
  },
]

function App() {
  const [people, setPeople] = useState<PeopleList['people']>(peopleList)

  const AddPerson = (person: AddPerson) => {
    setPeople([
      ...people,
      {
        name: person.name,
        age: parseInt(person.age),
        url: person.url,
        note: person.note,
      },
    ])
  }

  return (
    <div className='App'>
      <h1>People invited to party</h1>
      <List people={people} />
      <AddToList addPerson={AddPerson} />
    </div>
  )
}

export default App
