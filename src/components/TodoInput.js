import { useState } from "react";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
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
          <button type="submit" className="waves-effect waves-light btn">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
