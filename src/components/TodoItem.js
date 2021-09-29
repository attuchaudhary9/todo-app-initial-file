import React from "react";

const TodoItem = () => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1" style={{paddingBottom:'2rem'}}>
          <div style={{display: 'flex',justifyContent:'space-between'}}>
            <div className="card-content white-text ">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <div style={{display: 'flex', position:'absolute',left: '25rem'}}>
                <i  style={{ marginLeft:'1rem',paddingRight:'1rem'}} className="material-icons">delete</i>
                <i className="material-icons">track_changes</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
