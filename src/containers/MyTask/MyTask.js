import React, { Component } from 'react';

import TaskCreator from '../../components/MyTask/TaskCreator/TaskCreator';
import TaskList from '../../components/MyTask/TaskList/TaskList';

class MyTask extends Component {
  state = {
    tasks: []
  };

  componentDidMount = () => {
    console.log(this.state.tasks);
  };

  addTaskHandler = newTask => {
    // console.log('add:', newTask);
    this.setState({
      ...this.state,
      tasks: this.state.tasks.concat(newTask)
    });

    console.log(this.state);
  };

  cancelTaskHandler = () => {
    // console.log('cancel');
  };

  taskCompleteHandler = index => {
    // console.log(index);
  };

  render() {
    return (
      <div>
        <TaskCreator
          addTask={this.addTaskHandler}
          cancelTask={this.cancelTaskHandler}
        />
        <TaskList
          tasks={this.state.tasks}
          taskComplete={this.taskCompleteHandler}
        />
      </div>
    );
  }
}

export default MyTask;
