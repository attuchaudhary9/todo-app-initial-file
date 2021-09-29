import { useState } from "react";
import {  useDispatch } from "react-redux";
import { addTodo } from "../redux/todos-actions/index";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
  };
  // console.log(todos);
  return (
    <div className="row">
      <div className="input-field col s6">
        <form>
          <input
            onChange={handleChange}
            value={inputValue}
            type="text"
            className="validate"
          />
          <button
            onClick={handleClick}
            type="submit"
            className="waves-effect waves-light btn"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
