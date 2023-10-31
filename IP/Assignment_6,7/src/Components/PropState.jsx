import React, { Component } from 'react';
import Navbar from './Navbar';

class PropState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo) {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: '',
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PropState;
