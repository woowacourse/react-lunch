import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

interface SelectBoxProps {
  options: string[];
  setState: ChangeEventHandler<HTMLSelectElement>;
}

class SelectBox extends React.Component<SelectBoxProps, {}> {

  render() {
    const { options, setState } = this.props;
    return (
      <Select onChange={setState}>
        {options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </Select>
    )
  }
}

export default SelectBox;

const Select = styled.select`
height: 44px;
min-width: 125px;

border: 1px solid #d0d5dd;
border-radius: 8px;
background: transparent;

font-size: 16px;
`
