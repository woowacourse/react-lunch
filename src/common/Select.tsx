import React from 'react';

import { Category, SelectOption, Sorting } from '../util/type';

type SelectProps = {
  name: string;
  options: SelectOption<Category | Sorting>[];
  onChangeFilterOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select:React.FC<SelectProps> = ({ name, options, onChangeFilterOptions }) => {
  return (
    <select
      name={name}
      id="category-filter"
      className="restaurant-filter"
      onChange={onChangeFilterOptions}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.textContent}
        </option>
      ))}
    </select>
  );
};
  
export default Select;
