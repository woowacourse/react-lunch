import styled from "styled-components";
import { SelectNameType } from "../types/select";

interface SelectProps {
  type: SelectNameType;
  options: string[];
  handleSelect: (name: string, value: string) => void;
}

export const Select = ({ type, options, handleSelect }: SelectProps) => {
  return (
    <SelectContainer
      onChange={(e) => {
        handleSelect(type, e.target.value);
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
