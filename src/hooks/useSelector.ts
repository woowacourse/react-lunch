import { useState } from 'react';
import type { Sort } from '../App';
import type { Category } from '../components/RestaurantItem/type';

export interface Selector {
  category: Category;
  sortOption: Sort;
}

const initialSelector: Selector = {
  category: '전체',
  sortOption: '이름순',
};

function useSelector() {
  const [selector, setSelector] = useState<Selector>(initialSelector);

  const setCategory = (category: Category) => {
    setSelector((prev) => ({ ...prev, category }));
  };

  const setSortOption = (sortOption: Sort) => {
    setSelector((prev) => ({ ...prev, sortOption }));
  };

  return { selector, setCategory, setSortOption };
}

export default useSelector;
