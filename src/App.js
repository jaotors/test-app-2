import React, { useState } from 'react'
import SearchForm from './SearchForm'
import Form from './Form'
import List from './List'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [content, setContent] = useState('')
  const [itemId, setItemId] = useState(-1)
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearch = (e) => {
    const { value } = e.target
    setSearchKeyword(value)
  }

  const handleSubmit = ({ id, content, edited = false }) => {
    if (edited) {
      setItems((state) => {
        return state.map((item) => {
          if (item.id === id) {
            return {
              id,
              content
            }
          }
          return item
        })
      })
    } else {
      setItems((state) => [...state, { id, content }])
    }
  }

  const handleDelete = (id) => {
    setItems((state) => state.filter((item) => item.id !== id))
  }

  const handleEdit = (id) => {
    const item = items.find((item) => item.id === id)
    setContent(item.content)
    setItemId(id)
  }

  return (
    <div className='App'>
      <SearchForm onSearch={handleSearch} />
      <Form
        onSubmit={handleSubmit}
        id={itemId}
        content={content}
        onContentChange={setContent}
      />
      <List
        list={items}
        searchKeyword={searchKeyword}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  )
}

export default App
