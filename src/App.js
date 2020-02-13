import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { todoList };
  }

  addTodo = (e, task) => {
    console.log(e.preventDefault());
    // upon submission
    // console.log("This is task: ", task);
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  toggleTask = taskID => {
    console.log(taskID);
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(task => console.log(task))
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todoList={this.state.todoList}
          clearCompleted={this.clearCompleted}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
