import React, { useState, useEffect } from 'react'

const List = ({ list, searchKeyword, onDelete, onEdit }) => {
  const [filteredList, setFilteredList] = useState(list)

  useEffect(() => {
    if (searchKeyword !== '') {
      setFilteredList((state) =>
        state.filter((item) => item.content.includes(searchKeyword))
      )
    } else {
      setFilteredList(list)
    }
  }, [searchKeyword, list])

  return (
    <ul className='todo-list-display'>
      {filteredList.map((item) => (
        <li>
          <span>{item.id}</span>
          <span>{item.content}</span>
          <button onClick={() => onEdit(item.id)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default List
