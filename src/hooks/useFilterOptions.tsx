import { useState } from 'react';
import { CategoryFilter, SortingFilter } from '../types/types';

export const useFilterOptions = (
  initialCategory: CategoryFilter = '전체',
  initialSorting: SortingFilter = '이름순'
) => {
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);
  const [sorting, setSorting] = useState<SortingFilter>(initialSorting);

  const handleCategoryChange = (category: CategoryFilter) => {
    setCategory(category);
  };

  const handleSortingChange = (sorting: SortingFilter) => {
    setSorting(sorting);
  };

  return { category, sorting, handleCategoryChange, handleSortingChange };
};
