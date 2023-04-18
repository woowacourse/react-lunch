import React from 'react';

import type { SelectProps } from '../util/type';

const Select = ({ name, options, onChangeFilterOptions }: SelectProps) => {
  return (
    <select
      name={name}
      id="category-filter"
      className="restaurant-filter"
      onChange={onChangeFilterOptions}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          aria-label={option.label}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
