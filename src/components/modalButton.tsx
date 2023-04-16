import React, { useEffect } from "react";
import styled from "styled-components";

interface PropsType {
  text: string;
  baseColor: string;
  closeModal: () => void;
}

export default function ModalButton(props: PropsType) {
  const { text, baseColor, closeModal } = props;

  return (
    <Button baseColor={baseColor} onClick={closeModal}>
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
