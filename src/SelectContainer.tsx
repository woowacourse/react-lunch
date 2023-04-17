import React,{memo} from 'react';
import Select from './common/Select.tsx';
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from './util/constant.ts';

type SelectContainerProps = {
  onChangeFilterOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectContainer = (({ onChangeFilterOptions }: SelectContainerProps) => {
  
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
});


export default memo(SelectContainer);
