import React from 'react'
import "../App.css"
const Todoitems = ({itemText,deleteItem }) => {
  return (
    <div className='todoitem'>
        <p>{itemText}</p>
        <button onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default Todoitems