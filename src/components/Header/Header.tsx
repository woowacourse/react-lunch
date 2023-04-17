import React, { ChangeEvent, KeyboardEvent } from 'react';
import styles from './Header.module.css';
import Select from '../Select/Select';

interface HeaderProps { 
  onChange: (event: ChangeEvent<HTMLSelectElement>, kind: 'filter' | 'sort') => void 
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const scrollTopKeyboardEventHandler = (event: KeyboardEvent<HTMLHeadingElement>) => {
  if (event.key === 'Enter') scrollToTop();
}

function Header(props: HeaderProps) {
  const { onChange } = props;

  return (
    <header className={styles.header}>
      <h1 onClick={scrollToTop} onKeyUp={scrollTopKeyboardEventHandler} className={styles.title}>
        점심 뭐 먹지
      </h1>
      <nav className={styles.nav}>
        <Select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event, 'filter')}
          options={['전체', '한식', '일식', '중식', '아시안', '양식', '기타']}
        />
        <Select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event, 'sort')}
          options={['이름순', '거리순']}
        />
      </nav>
    </header>
  );
}

export default Header;
