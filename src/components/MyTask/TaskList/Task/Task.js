import React from 'react';

import styles from './Task.module.css';

const Task = props => {
  let mark = null;

  if (props.isCompleted) {
    mark = <div>COMPLETED</div>
  }

  return (
    <div className={styles.Wrapper}>
      <input type="checkbox" onChange={props.checked} />
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
      {mark}
    </div>
  );
};

export default Task;
