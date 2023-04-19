import React, { ChangeEvent } from 'react';
import Select from './Select';
import { FOOD_CATEGORY, SORT_METHOD } from '../constants';
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
          options={FOOD_CATEGORY}
        />
        <Select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.currentTarget.value, 'sort')}
          options={SORT_METHOD}
        />
      </nav>
    </header>
  );
}
