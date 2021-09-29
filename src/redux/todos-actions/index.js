import * as actionTypes from '../todo/todo-actions'

export const addTodo = (data)=>{
    return {
        type: actionTypes.ADD_TODO,
        payload:{
            description: data
        }
    }
}

export const removeTodo = (todoId)=>{
    return {
        type: actionTypes.DELETE_TODO,
        payload:{
            id:todoId
        }
    }
}
export const toggleTodo = (todoId)=>{
    return {
        type: actionTypes.TOGGLE_TODO,
        payload:{
            id:todoId
        }
    }
}