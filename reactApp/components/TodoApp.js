import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';


let dummyData = [
  { taskText: "Redo Resume",
    completed: false,
  },
  {
    taskText: "Start RISE Website",
    completed: false,
  },
  {
    taskText:"Frosh Tix & Contract",
    completed: true,
  }
]

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    this.setState({todos: dummyData})
    }

  addTodo (task) {
  var newlyAddedTodo = [{
      taskText: "Test Task",
      completed: false,
    }]

  var newTodos = this.state.todos.concat(newlyAddedTodo)

  this.setState({todos: newTodos})
  }

  render() {
    return(
      <div>
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
