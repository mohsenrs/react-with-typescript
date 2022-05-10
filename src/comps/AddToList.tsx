import { useState } from 'react'

interface Person {
  name: string
  url: string
  age: string
  note: string
}

type AddPerson = {
  addPerson: (input: Person) => void
}

const AddToList = ({ addPerson }: AddPerson) => {
  const [input, setInput] = useState({
    name: '',
    url: '',
    age: '',
    note: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = () => {
    addPerson(input)
    setInput({
      name: '',
      url: '',
      age: '',
      note: '',
    })
  }

  return (
    <div className='AddToList'>
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='name'
        value={input.name}
        placeholder='Name'
      />
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='age'
        value={input.age}
        placeholder='Age'
      />
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='url'
        value={input.url}
        placeholder='Image Url'
      />
      <textarea
        onChange={handleChange}
        className='AddToList-input'
        name='note'
        value={input.note}
        placeholder='Note'
      />
      <button onClick={handleClick} className='AddToList-btn'>
        Add to List
      </button>
    </div>
  )
}

export default AddToList
