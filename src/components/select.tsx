import React from "react";
import styled from "styled-components";
import { SelectPropsType } from "../types/select";

export class Select extends React.Component<SelectPropsType> {
  render() {
    return (
      <SelectContianer
        onChange={(e) =>
          this.props.handleSelect(this.props.name, e.target.value)
        }>
        {this.props.options.map((option: string) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </SelectContianer>
    );
  }
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
