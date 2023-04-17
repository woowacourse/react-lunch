import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  optionList: string[];
}

const SelectBox = (props: SelectProps) => {
  const { optionList, ...rest } = props;
  return (
    <SelectBoxWrapper {...rest}>
      {optionList.map((option: string, index: number) => (
        <option key={index}>{option}</option>
      ))}
    </SelectBoxWrapper>
  );
};

const SelectBoxWrapper = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;

  font-size: 16px;
`;

export default SelectBox;
