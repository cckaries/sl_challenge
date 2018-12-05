import React, { Component } from 'react';

import TaskCreator from '../../components/MyTask/TaskCreator/TaskCreator';
import TaskList from '../../components/MyTask/TaskList/TaskList';

class MyTask extends Component {
  state = {
    tasks: []
  };

  addTaskHandler = newTask => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.concat(newTask)
    });
  };

  cancelTaskHandler = () => {
    // console.log('cancel');
  };

  taskCompleteHandler = (e, index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;

    this.setState({
      ...this.state,
      tasks: updatedTasks
    });
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
