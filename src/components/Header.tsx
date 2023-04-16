import React, { ChangeEvent } from 'react';
import Select from './Select';
import styles from './Header.module.css';

interface HeaderProps {
  onChange: (value: string, kind: 'filter' | 'sort') => void;
}

export default function Header({ onChange }: HeaderProps) {
  const onTitleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <h1 onClick={onTitleClick} aria-hidden="true" className={styles.title}>
        점심 뭐 먹지
      </h1>
      <nav className={styles.nav}>
        <Select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.currentTarget.value, 'filter')}
          options={['전체', '한식', '일식', '중식', '아시안', '양식', '기타']}
        />
        <Select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.currentTarget.value, 'sort')}
          options={['이름순', '거리순']}
        />
      </nav>
    </header>
  );
}
