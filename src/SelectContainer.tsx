import React from 'react';

import Select from './components/Select.tsx';
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from './util/constant.ts';

type SelectContainerProps = {
  onChangeFilterOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectContainer: React.FC<SelectContainerProps> = ({
  onChangeFilterOptions,
}) => {
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
