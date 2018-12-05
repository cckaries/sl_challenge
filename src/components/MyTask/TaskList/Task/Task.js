import React from 'react';

import styles from './Task.module.css';

const Task = props => {
  return (
    <div className={styles.Wrapper}>
      <label>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={(e) => props.checkEvent(e, props.index)}
        />
        {props.isCompleted ? 'Completed' : null }
      </label>
      <div className={styles.Title}>
        <div />
        <div>{props.title}</div>
        <div>
          <div />
          <div />
        </div>
      </div>
      <div />
      <div>{props.comment}</div>
    </div>
  );
};

export default Task;
