import styles from './style.module.css';
import { ChangeEvent, memo } from 'react';
import { RESTAURANT_CATEGORY_OPTION, SELECT_ATTRIBUTES, SORT_BY } from '../../constants';
import Select from '../common/Select/Select';

interface FilterSectionProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function FilterSection({ onChange }: FilterSectionProps) {
  return (
    <section className={styles.restaurantFilterContainer}>
      <Select
        options={RESTAURANT_CATEGORY_OPTION}
        onChange={onChange}
        elementStyle={styles.restaurantFilter}
        {...SELECT_ATTRIBUTES.CATEGORY_FILTER}
      />
      <Select
        options={SORT_BY}
        onChange={onChange}
        elementStyle={styles.restaurantFilter}
        {...SELECT_ATTRIBUTES.SORT_BY_FILTER}
      />
    </section>
  );
}

export default memo(FilterSection);
