import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";

class Todo extends React.Component {
  render() {
    return(
      <div>
        {this.props.todos.map((task) => {
          return (
          task.completed
          ? <div>
            <li> <input type="submit" value="X"/>  <strike> {task.taskText} </strike> </li>
            </div>
          : <div>
            <li> <input type="submit" value="X"/>  {task.taskText} </li>
            </div>
        )
        })}

      </div>
    )
  }
}

export default Todo;
