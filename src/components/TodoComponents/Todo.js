import React from "react";

const Todo = props => {
  return (
    <div
      className={`task${props.task.completed ? " false" : ""}`}
      onClick={() => console.log(props.toggleTask())}
    >
      <p>{props.task}</p>
    </div>
  );
};

export default Todo;
