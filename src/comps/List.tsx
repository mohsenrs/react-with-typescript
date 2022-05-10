import Item from './Item'

interface PeopleProps {
  people: {
    name: string
    url: string
    age: number
    note?: string | undefined
  }[]
}

const List: React.FC<PeopleProps> = ({ people }) => {
  return (
    <ul>
      {people.map((person) => (
        <Item
          key={person.age}
          name={person.name}
          url={person.url}
          age={person.age}
          note={person.note}
        />
      ))}
    </ul>
  )
}

export default List
