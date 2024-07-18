import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
    // console.log({todos})
    return (
        <ul>
            {todos.map( Todo => <TodoItem dataTodo = { Todo } key={ Todo.id }/> )}
        </ul>
    )
}

export default TodoList
