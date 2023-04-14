import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  options: readonly string[];
  onChange: (e: ChangeEvent) => void;
}

const Select = ({ name, options, onChange }: Props) => {
  return (
    <SelectWrapper name={name} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </SelectWrapper>
  );
};

export default Select;

const SelectWrapper = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  padding: 8px;

  background: transparent;
  font-size: 16px;
`;
