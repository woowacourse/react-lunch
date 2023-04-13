import React from 'react';
import styled from 'styled-components';

class Button extends React.Component<{ text: string; onClick: () => React.SetStateAction<void> }> {
  constructor(props: { text: string; onClick: () => React.SetStateAction<void> }) {
    super(props);
  }

  render() {
    return <ButtonWrapper onClick={this.props.onClick}>{this.props.text}</ButtonWrapper>;
  }
}

const ButtonWrapper = styled.button`
  width: 100%;
  height: 44px;

  border: none;
  border-radius: 8px;

  background: var(--primary-color);

  font-weight: 600;
  color: var(--grey-100);

  transition: all 0.1s ease;

  cursor: pointer;
  :active {
    opacity: 50%;
    transform: scale(0.98);
  }
`;

export default Button;
