import React from "react";
import styled from "styled-components";

export class Select extends React.Component<any> {
  render() {
    return (
      <SelectContianer
        name="category"
        id="category-filter"
        onChange={(e) =>
          this.props.handleSelect(this.props.type, e.target.value)
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
