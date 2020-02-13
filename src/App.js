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

  // Defining a new class method, not a Const
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

  clearCompleted = event => {
    this.setState({
      todoList: this.state.todoList.filter(task => task.completed === false)
    });
  };

  toggleTask = taskID => {
    // no mutating the current state
    // for every array && obj - create a new one (..., or array methods)
    const newTodoTask = this.state.todoList.map(item => {
      // find the item we click (id)
      // toggle item's completed
      console.log(taskID);
      if (item.id === taskID) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    // Update sate with the new array
    this.setState({
      todoList: newTodoTask
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>

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
