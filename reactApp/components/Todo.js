import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  render() {
    return(
      <div>
        {dummyData.map((task) => {
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
