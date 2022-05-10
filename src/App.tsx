import { useState } from 'react'
import './App.css'
import List from './comps/List'

interface PeopleList {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
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

  return (
    <div className='App'>
      <h1>People invited to party</h1>
      <List people={people} />
    </div>
  )
}

export default App
