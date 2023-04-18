import { FilterProps } from '../../types/types';
import styles from './Filter.module.css';

const Filter = (props: FilterProps) => {
  const { name, options, onChange } = props;

  const optionElements = options.map(option => {
    return (
      <option key={option.value} value={option.value} label={option.label}>
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
