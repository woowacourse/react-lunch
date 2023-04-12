import React from "react";
import styled from "styled-components";
import { CategoryUnion, SelectPropsType, SortingUnion } from "../types/select";

export class Select extends React.Component<SelectPropsType> {
  render() {
    return (
      <SelectContianer
        onChange={(e) => {
          const value = e.target.value as SortingUnion | CategoryUnion;
          this.props.handleSelect({
            type: this.props.name,
            value: value,
          });
        }}>
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
