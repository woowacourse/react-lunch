import { PureComponent } from 'react';
import styles from './Header.module.css';

export default class Header extends PureComponent {
  render() {
    return (
      <header className={styles.gnb}>
        <h1 className={styles.title}>점심 뭐 먹지</h1>
      </header>
    );
  }
}
