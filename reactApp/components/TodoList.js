import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'; 

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <Todo />
      </ul>
    )
  }
}

export default TodoList;
