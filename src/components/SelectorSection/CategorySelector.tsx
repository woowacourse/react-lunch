import useWrappingContext from '../../hooks/useWrappingContext';
import { SelectorStore } from '../../store';
import styles from './SelectorSection.module.css';
import type { Category } from '../RestaurantItem/type';
import type { ChangeEvent } from 'react';

function CategorySelector() {
  const { setCategory } = useWrappingContext(SelectorStore);

  const handleCategorySelector = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  };

  return (
    <select name="category" className={styles.selector} onChange={handleCategorySelector}>
      <option value="전체">전체</option>
      <option value="한식">한식</option>
      <option value="양식">양식</option>
      <option value="일식">일식</option>
      <option value="중식">중식</option>
      <option value="아시안">아시안</option>
      <option value="기타">기타</option>
    </select>
  );
}

export default CategorySelector;
