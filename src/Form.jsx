import React, { useState } from 'react'

const Form = ({ onSubmit, id = -1, content, onContentChange }) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    if (id < 0) {
      onSubmit({
        id: new Date().getTime(),
        content: content
      })
    } else {
      console.log('update')
      onSubmit({ id, content, edited: true })
    }
  }

  const handleChange = (e) => {
    onContentChange(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='todo-form'>
        <input type='text' value={content} onChange={handleChange} />
        <button type='submit'>SUBMIT</button>
      </div>
    </form>
  )
}

export default Form
