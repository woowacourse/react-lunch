import Select from './Select';
import { CATEGORIES, SORT_BY } from '../constants/constants';
import React, { ChangeEvent } from 'react';
import { Category, SortBy } from '../types/Restaurant';

type FilterContainerProps = {
  setCategory: (category: Category) => void;
  setSort: (sortby: SortBy) => void;
};

const isCategory = (category: string): category is Category => {
  for (const c of CATEGORIES) {
    if (c === category) return true;
  }
  return false;
};

const isSortBy = (sortBy: string): sortBy is SortBy => {
  for (const s of SORT_BY) {
    if (s === sortBy) return true;
  }
  return false;
};

function FilterContainer({ setCategory, setSort }: FilterContainerProps) {
  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isCategory(event.target.value)) setCategory(event.target.value);
  };
  const onChangeSort = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isSortBy(event.target.value)) setSort(event.target.value);
  };

  return (
    <section className="restaurant-filter-container">
      <Select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        options={CATEGORIES}
        onChange={onChangeCategory}
      />
      <Select
        name="sorting"
        id="sorting-filter"
        className="restaurant-filter"
        options={SORT_BY}
        onChange={onChangeSort}
      />
    </section>
  );
}

export const MemoizedFilterContainer = React.memo(FilterContainer);

export default FilterContainer;
