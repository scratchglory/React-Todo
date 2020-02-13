import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div onClick={() => props.toggleTask(props.task.key)}>
      <p>{props.task}</p>
    </div>
  );
};

export default Todo;
