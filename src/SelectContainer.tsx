import React from 'react';

import type { SelectContainerProps } from './util/type.ts';
import Select from './components/Select.tsx';
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from './util/constant.ts';

const SelectContainer = ({ onChangeFilterOptions }: SelectContainerProps) => {
  return (
    <section className="restaurant-filter-container">
      <Select
        name="category"
        options={CATEGORY_OPTIONS}
        onChangeFilterOptions={onChangeFilterOptions}
      />
      <Select
        name="sorting"
        options={SORTING_OPTIONS}
        onChangeFilterOptions={onChangeFilterOptions}
      />
    </section>
  );
};

export default SelectContainer;
