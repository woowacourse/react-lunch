import React, { useEffect } from "react";
import styled from "styled-components";

interface PropsType {
  text: string;
  buttonColor?: string;
  closeModal: () => void;
}

export default function ModalButton(props: PropsType) {
  const { text, buttonColor, closeModal } = props;

  return (
    <Button buttonColor={buttonColor} onClick={closeModal}>
      {text}
    </Button>
  );
}

const Button = styled.button<{ buttonColor: string | undefined }>`
  width: 100%;
  height: 44px;

  margin-right: 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  ${({ theme }) => theme.fonts.caption};
  ${({ theme, buttonColor }) =>
    buttonColor ? theme.buttons.white : theme.buttons.orange}
`;
