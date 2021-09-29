import React from "react";
import { useDispatch  } from "react-redux";
import {removeTodo,toggleTodo} from '../redux/todos-actions/index'
const TodoItem = ({description,id,complete}) => {
  const dispatch = useDispatch();

  const handleDelete = ()=>{
    dispatch(removeTodo(id))
  }
  const handleToggle = ()=>{
    dispatch(toggleTodo(id))
  }

  const cardColor = !complete ? "card blue-grey darken-1" : "card  green lighten-1"
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className={cardColor} style={{paddingBottom:'2rem'}}>
          <div style={{display: 'flex',justifyContent:'space-between'}}>
            <div className="card-content white-text ">
              <p>
               {description}
              </p>
              <div style={{display: 'flex', position:'absolute',left: '25rem'}}>
                <i onClick={handleDelete} style={{ marginLeft:'1rem',paddingRight:'1rem'}} className="material-icons">delete</i>
                <i onClick={handleToggle} className="material-icons">track_changes</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
