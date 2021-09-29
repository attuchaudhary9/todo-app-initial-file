import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const TodoList = () => {
    return (
        <div className="container">
            <TodoInput />
            <TodoItem />
        </div>
    )
}

export default TodoList
