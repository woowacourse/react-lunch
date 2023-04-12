import React, { Component, ReactNode } from 'react';
import styles from './Header.module.css';
import Select from './Select';

class Header extends Component {
  render(): ReactNode {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>점심 뭐 먹지</h1>
        <nav className={styles.nav}>
          <Select options={['전체', '한식', '일식', '중식', '아시안', '양식', '기타']} />
          <Select options={['이름순', '거리순']} />
        </nav>
      </header>
    );
  }
}

export default Header;
