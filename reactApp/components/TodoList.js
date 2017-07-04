import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import TodoApp from "./TodoApp";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <Todo todos={this.props.todos}/>
      </ul>
    )
  }
}

export default TodoList;
