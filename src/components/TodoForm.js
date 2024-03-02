import React, { useState } from 'react'
import './TodoForm.css'; 


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);

        setValue('')
    }
  return (
    <form className='todoform' onSubmit={handleSubmit}>
        <input type='text' 
         className='todo-input'
         value={value}
         placeholder='What is the task today' 
         onChange={(e) => setValue(e.target.value)}/>

        <button className='todo-button' type='submit'>
            Add Task
        </button>
    </form>
  )
}
