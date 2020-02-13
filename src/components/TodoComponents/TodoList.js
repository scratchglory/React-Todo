// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  // todoList array
  //   console.log(props.todoList);

  return (
    <div className="todo-list">
      {props.todoList.map(item => (
        <Todo
          key={item.id}
          task={item.task}
          completed={item.completed}
          toggleTask={props.toggleTask}
        />
      ))}
      <button className="clear-todo" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
