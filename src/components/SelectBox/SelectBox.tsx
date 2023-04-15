import React from 'react';
import './SelectBox.css';

interface SelectBoxProps {
  filter: object;
  handleOptionChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

function SelectBox({ filter, handleOptionChange }: SelectBoxProps) {
  return (
    <select className="restaurant-filter" onChange={handleOptionChange}>
      {Object.entries(filter).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
