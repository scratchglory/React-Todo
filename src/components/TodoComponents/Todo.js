import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div onClick={() => props.toggleTask(props.id)}>
      <p>TODO: {props.task}</p>
    </div>
  );
};

export default Todo;
