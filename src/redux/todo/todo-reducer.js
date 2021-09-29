import * as actionTypes from './todo-actions'

let lastId = 0;

const  todoReducer = (state=[],action)=>{
switch(action.type){
    case actionTypes.ADD_TODO:
        return [
            ...state,{
                id:++lastId,
                description:action.payload.description,
                complete:false
            }
        ]
        case actionTypes.DELETE_TODO:
            return state.filter(todo=>todo.id !==action.payload.id)

           
        case actionTypes.TOGGLE_TODO :
            return state.map(ps5=>ps5.id ===action.payload.id ? {...ps5,complete:!ps5.complete} :ps5)
        default:return state
}
}

export default todoReducer