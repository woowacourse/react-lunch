import React from "react";
import styled from "styled-components";
import { SelectNameType } from "../types/select";

interface SelectPropsType {
  name: SelectNameType;
  options: string[];
  selectOption: (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: SelectNameType
  ) => void;
}

export default function Select(props: SelectPropsType) {
  const { name, options, selectOption } = props;

  return (
    <SelectContianer onChange={(e) => selectOption(e, name)}>
      {options.map((option: string) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </SelectContianer>
  );
}

const SelectContianer = styled.select`
  height: 44px;
  min-width: 125px;

  padding: 8px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;
