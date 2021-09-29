import { combineReducers } from "redux";
import loginReducer from "./login/login-reducer";
import todoReducer from "./todo/todo-reducer";
const rootReducer = combineReducers({ todos : todoReducer,isLogin:loginReducer });

export default rootReducer;
