import React from "react";
import styled from "styled-components";
import {
  CategoryUnion,
  SelectNameType,
  SortingUnion,
  SelectedValue,
} from "../types/select";

interface SelectProps {
  name: SelectNameType;
  options: string[];
  handleSelect: (selected: SelectedValue) => void;
}

export const Select = ({ name, options, handleSelect }: SelectProps) => {
  return (
    <SelectContainer
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as SortingUnion | CategoryUnion;
        handleSelect({
          type: name,
          value: value,
        });
      }}
    >
      {options.map((option: string) => {
        return (
          <Option key={option} value={option}>
            {option}
          </Option>
        );
      })}
    </SelectContainer>
  );
};

const SelectContainer = styled.select`
  height: 44px;
  min-width: 125px;

  padding: 8px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;

const Option = styled.option``;
