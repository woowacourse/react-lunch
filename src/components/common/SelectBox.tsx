import { Component } from 'react';
import styled from 'styled-components';

type Props = { options: string[] };

const Select = styled.select`
  height: 44px;
  min-width: 125px;

  padding: 8px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;

class SelectBox extends Component<Props> {
  render() {
    return (
      <Select>
        {this.props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    );
  }
}

export default SelectBox;
