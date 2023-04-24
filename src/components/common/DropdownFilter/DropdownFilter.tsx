import React, { useState } from 'react';
import * as styled from './DropdownFilter.styles';

type DropdownFilterProps<Value> = {
  options: Array<{
    label: string;
    value: Value;
  }>;
  onChange: (value: { label: string; value: Value }) => void;
};

const DropdownFilter = <Value,>(props: DropdownFilterProps<Value>) => {
  const { options, onChange } = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const changedOption = options.find((option) => option.label === event.target.value)!;
    setSelectedOption(changedOption);
    onChange(changedOption);
  };

  return (
    <styled.DropdownFilter
      value={selectedOption.label}
      onChange={handleSelectChange}
      data-cy="dropdown-filter"
    >
      {options.map(({ label }, index) => (
        <option key={label} data-index={index}>
          {label}
        </option>
      ))}
    </styled.DropdownFilter>
  );
};

export default DropdownFilter;
