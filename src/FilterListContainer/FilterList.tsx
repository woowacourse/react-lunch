import React, { ChangeEventHandler } from 'react';

import './FilterList.css';

interface FilterProps {
  type: string;
  name: string[];
  changeEvent: ChangeEventHandler<HTMLSelectElement>;
}

const FilterList = ({ type, name, changeEvent }: FilterProps) => {
  const option = name.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  return (
    <select className={`restaurant-filter ${type}`} onChange={changeEvent}>
      {option}
    </select>
  );
};

export default FilterList;
