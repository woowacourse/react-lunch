import React from 'react';
import styled from 'styled-components';

class Button extends React.Component<{ text: string; onClick: () => void }> {
  constructor(props: { text: string; onClick: () => void }) {
    super(props);
  }

  render() {
    return <ButtonWrapper onClick={this.props.onClick}>{this.props.text}</ButtonWrapper>;
  }
}

const ButtonWrapper = styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  background: var(--primary-color);
  color: var(--grey-100);
`;

export default Button;
