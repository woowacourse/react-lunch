import React, { ChangeEvent } from 'react';
import styles from './Select.module.css';

interface SelectProps {
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ options, onChange }: SelectProps) {
  return (
    <select className={styles.select} onChange={onChange}>
      {options.map((optionName: string) => (
        <option key={optionName} value={optionName}>
          {optionName}
        </option>
      ))}
    </select>
  );
}
