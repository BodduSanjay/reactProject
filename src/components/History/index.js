import './index.css'

const History = props => {
  const {list, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = list

  const clicked = () => {
    onDelete(id)
  }

  return (
    <li>
      <p className='para'>{timeAccessed}</p>
      <div className='title-cont'>
        <img src={logoUrl} alt={title} />
        <h1>{title}</h1>
        <p>{domainUrl}</p>
      </div>
      <button onClick={clicked}>
        {
          <img
            src='https://assets.ccbp.in/frontend/react-js/delete-img.png'
            alt={title}
          />
        }
      </button>
    </li>
  )
}
export default History
