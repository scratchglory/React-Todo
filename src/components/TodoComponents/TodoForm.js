import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false
    };
  }

  // class methods
  handleChanges = event => {
    this.setState({ task: event.target.value });
  };

  submitTask = event => {
    // event.preventDefault();
    this.props.addTodo(event, this.state.task);
  };
  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input type="text" name="todo-item" onChange={this.handleChanges} />
        <button>Add to List</button>
      </form>
    );
  }
}

export default TodoForm;
