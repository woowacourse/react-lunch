import { Component } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  height: 44px;
  min-width: 125px;

  padding: 8px;

  border: 1px solid var(--grey-200);
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;

type Props = {
  options: string[];
  setOption: (option: string) => void;
};

class SelectBox extends Component<Props> {
  render() {
    return (
      <Select onChange={(e) => this.props.setOption(e.target.value)}>
        {this.props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  }
}

export default SelectBox;
