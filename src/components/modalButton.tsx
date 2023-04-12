import React from "react";
import styled from "styled-components";

export class ModalButton extends React.Component<{
  text: string;
  handleClick?: () => void;
}> {
  render() {
    return (
      <Button color={this.props.text} onClick={this.props.handleClick}>
        {this.props.text}
      </Button>
    );
  }
}

const Button = styled.button<{ color: string }>`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: solid 1px
    ${({ theme, color }) => (color === "닫기" ? "none" : theme.colors.grey500)};
  border-radius: 8px;
  color: ${({ theme, color }) =>
    color === "닫기" ? theme.colors.grey100 : theme.colors.grey500};

  font-weight: 600;
  cursor: pointer;

  ${({ theme }) => theme.fonts.caption}

  background-color: ${({ theme, color }) =>
    color === "닫기" ? theme.colors.primary : theme.colors.grey100};
`;
