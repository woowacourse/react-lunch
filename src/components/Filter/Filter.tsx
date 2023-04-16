import { FilterProps } from '../../types/types';
import styles from './Filter.module.css';

const Filter = ({ name, options, onChange }: FilterProps) => {
  const optionElements = options.map(option => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <select className={styles.filter} name={name} onChange={onChange}>
      {optionElements}
    </select>
  );
};

export default Filter;
