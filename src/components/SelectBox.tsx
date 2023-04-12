import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import { SelectBoxOption } from "../types/Restaurant";

interface SelectBoxProps {
  options: SelectBoxOption[];
  setState: ChangeEventHandler<HTMLSelectElement>;
}

class SelectBox extends React.Component<SelectBoxProps, {}> {

  render() {
    const { options, setState } = this.props;
    return (
      <Select onChange={setState}>
        {options.map(option => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </Select>
    )
  }
}

export default SelectBox;

const Select = styled.select`
height: 44px;
min-width: 125px;
padding-left: 8px;
border: 1px solid #d0d5dd;
border-radius: 8px;
background: transparent;

font-size: 16px;
`
