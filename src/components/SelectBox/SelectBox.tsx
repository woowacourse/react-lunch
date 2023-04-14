import React from 'react';
import './SelectBox.css';

interface SelectBoxProps {
  filter: object;
  onOptionChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

function SelectBox(props: SelectBoxProps) {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.onOptionChange) props.onOptionChange(event);
  };

  return (
    <select className="restaurant-filter" onChange={onChange}>
      {Object.entries(props.filter).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
