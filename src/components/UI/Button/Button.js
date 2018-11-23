import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  let buttonText = 'Cancel';

  if (props.type === 'add') {
    buttonText = 'Add Task';
  }

  return (
    <button
      className={[styles.Button, styles[props.type]].join(' ')}
      onClick={props.clicked}
    >
      {buttonText}
    </button>
  );
};

export default Button;
