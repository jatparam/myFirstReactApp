import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  render() {
    return(
      <div>
        <input type="text" name="newTask"/>
        <input type="submit" value="Add a Task"/>
      </div>
    )
  }
}

export default InputLine;
