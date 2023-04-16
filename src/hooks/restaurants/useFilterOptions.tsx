import React, { useState } from 'react';
import { ALIGN_FILTER, CATEGORY_FILTER } from '../../constants/restaurants';
import {
  AlignFilter,
  CategoryFilter,
  FilterOptions,
} from '../../types/restaurants';

export default function useFilterOptions() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: CATEGORY_FILTER[0],
    align: ALIGN_FILTER[0],
  });

  const onChangeCategoryFilter = (category: CategoryFilter) => {
    setFilterOptions((prev) => ({ ...prev, category }));
  };

  const onChangeAlignFilter = (align: AlignFilter) => {
    setFilterOptions((prev) => ({ ...prev, align }));
  };

  return { filterOptions, onChangeCategoryFilter, onChangeAlignFilter };
}
