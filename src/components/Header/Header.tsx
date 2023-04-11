import { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.gnb}>
        <h1 className={styles.title}>점심 뭐 먹지</h1>
      </header>
    );
  }
}
