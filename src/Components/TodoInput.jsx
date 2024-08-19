import React, { useState } from 'react'

function TodoInput(props) {
  const {handleAddTodos, todoValue, settodoValue} = props;
  return (
    <header>
      <input value={todoValue} onChange={(e)=>{
        settodoValue(e.target.value)
      }} placeholder='Enter to do... ' />
      <button onClick={()=>{
        handleAddTodos(todoValue)
        settodoValue('')
      }}>add</button>
    </header>
  )
}

export default TodoInput
