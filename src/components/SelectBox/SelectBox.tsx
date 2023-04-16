import React from 'react';
import './SelectBox.css';

interface SelectBoxProps {
  filter: object;
  onOptionChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

function SelectBox({ onOptionChange, filter }: SelectBoxProps) {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onOptionChange) onOptionChange(event);
  };

  return (
    <select className="restaurant-filter" onChange={onChange}>
      {Object.entries(filter).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
