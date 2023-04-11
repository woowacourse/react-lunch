import React from 'react';
import styled from 'styled-components';
import { SelectBoxType } from '../types';

class SelectBox extends React.Component<SelectBoxType> {
  constructor(props: SelectBoxType) {
    super(props);
  }

  render() {
    return (
      <SelectBoxWrapper name={this.props.selectType}>
        {this.props.options.map((option: string) => (
          <option>{option}</option>
        ))}
      </SelectBoxWrapper>
    );
  }
}

const SelectBoxWrapper = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;

export default SelectBox;
