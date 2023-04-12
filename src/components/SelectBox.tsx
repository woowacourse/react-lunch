import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const Style = {
  Wrapper: styled.select`
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;

    font-size: 16px;
  `,
};

interface Option {
  value: string;
  text: string;
}

interface OptionProps {
  option: readonly Option[];
  selectFilter: React.ChangeEventHandler<HTMLSelectElement>;
}

export class SelectBox extends Component<OptionProps> {
  render(): ReactNode {
    return (
      <Style.Wrapper onChange={this.props.selectFilter}>
        {this.props.option.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Style.Wrapper>
    );
  }
}
