import { Component } from 'react';
import styled from 'styled-components';

type Props = {
  options: string[];
  onChange?: (option: string) => void;
};

export class SelectBox extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { options, onChange } = this.props;

    return (
      <Select>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    );
  }
}

const Select = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
  padding: 8px;
`;
