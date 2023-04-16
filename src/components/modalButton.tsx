import React from "react";
import styled from "styled-components";

interface PropsType {
  text: string;
  baseColor: string;
  handleClick?: () => void;
}

export default function ModalButton(props: PropsType) {
  const { text, baseColor, handleClick } = props;

  return (
    <Button baseColor={baseColor} onClick={handleClick}>
      {text}
    </Button>
  );
}

const Button = styled.button<{ baseColor: string }>`
  width: 100%;
  height: 44px;

  margin-right: 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  ${({ theme }) => theme.fonts.caption};
  ${({ theme, baseColor }) => theme.buttons[baseColor]}
`;
