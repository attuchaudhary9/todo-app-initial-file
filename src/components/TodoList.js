import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

const loginUser = ()=>{
    return {
        type:'ISLOG'
    }
}

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();


  const isLoginUser = ()=>{
      dispatch(loginUser())
  }
  return (
    <div className="container">
      <button style={{position:'absolute',left:'83rem',top:'1rem'}}
        onClick={isLoginUser}        
        className={isLogin ? "waves-effect red btn" : "waves-effect  light-green lighten-2 btn"}
      >
        {isLogin ? "LOGOUT" : "LOGIN"}
      </button>
      <TodoInput />
      {todos.map((todo) => {
        return (
          <TodoItem
            complete={todo.complete}
            key={todo.id}
            description={todo.description}
            id={todo.id}
          />
        );
      })}

     
    </div>
  );
};

export default TodoList;
