import React, { Component } from 'react';

import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Toolbar />
        <div className={styles.Container}>
          <main className={styles.Content}>{this.props.children}</main>
        </div>
      </>
    );
  }
}
