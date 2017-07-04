import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from "./TodoApp";
import TodoList from "./TodoList";
import Todo from "./Todo";

class InputLine extends React.Component {
  render() {
    return(
      <div>
        <input type="text" name="newTask"/>
        <input onClick={this.props.submit} type="submit" value="Add a Task"/>
      </div>
    )
  }
}

export default InputLine;
