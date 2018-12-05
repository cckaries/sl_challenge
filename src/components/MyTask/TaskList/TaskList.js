import React from 'react';

import styles from './TaskList.module.css';
import Task from './Task/Task';

const TaskList = props => (
  <div className={styles.Container}>
    {props.tasks.map((task, index) => (
      <Task
        key={index}
        index={index}
        checkEvent={props.taskComplete}
        {...task}
      />
    ))}
  </div>
);

export default TaskList;
