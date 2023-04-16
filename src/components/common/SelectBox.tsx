import React from 'react';
import styled from 'styled-components';
import { SelectKind } from '../../types';

interface SelectBoxType {
  selectType: SelectKind;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectBox = (props: SelectBoxType) => {
  return (
    <SelectBoxWrapper name={props.selectType} onChange={props.onChange}>
      {props.options.map((option: string, index: number) => (
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
