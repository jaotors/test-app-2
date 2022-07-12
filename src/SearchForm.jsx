import React, { useState } from 'react'

const SearchForm = ({ onSearch }) => {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle((state) => !state)
  }

  return (
    <div className='display-search'>
      <button onClick={handleToggle}>Search</button>
      {isToggle && <input type='text' onChange={onSearch} />}
    </div>
  )
}

export default SearchForm
