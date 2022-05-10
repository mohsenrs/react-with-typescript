interface Props {
  name: string
  url: string
  age: number
  note?: string
}
const Item: React.FC<Props> = (props) => {
  return (
    <li className='List'>
      <div className='List-header'>
        <img className='List-img' src={props.url} />
        <h2>{props.name}</h2>
      </div>
      <p>{props.age} years old</p>
      <p className='List-note'>{props.note}</p>
    </li>
  )
}

export default Item
