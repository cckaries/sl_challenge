import React from 'react';

import styles from './TaskList.module.css';
import Task from './Task/Task';

const TaskList = props => {
  return (
    <div className={styles.Container}>
      {props.tasks.map((task, index) => (
        <Task key={index} checked={props.taskComplete(index)} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
