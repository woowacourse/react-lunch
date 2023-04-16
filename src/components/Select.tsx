import React, { ChangeEvent, HTMLAttributes } from 'react';
import styles from './Select.module.css';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void 
}

function Select(props: SelectProps) {
  const { options, onChange } = props;

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

export default Select;
