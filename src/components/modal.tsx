import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./button";

interface ModalProps {
  closeModal: () => void;
  modalPosition: string;
  children: ReactElement;
}

export const Modal = ({ modalPosition, children, closeModal }: ModalProps) => {
  useEffect(() => {
    const closeModalByESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keyup", closeModalByESC);

    return () => {
      window.removeEventListener("keyup", closeModalByESC);
    };
  }, []);

  return (
    <>
      <BackDrop onClick={closeModal} />
      <ModalContainer modalPosition={modalPosition}>
        {children}
        <ButtonContainer>
          <Button text="닫기" handleClick={closeModal} />
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;
const ModalContainer = styled.div<{ modalPosition: string }>`
  position: fixed;
  bottom: ${({ modalPosition: location }) =>
    location === "bottom" ? "0" : "40%"};
  right: 0;
  left: 0;

  padding: 32px 16px;

  background-color: ${({ theme }) => theme.colors.grey100};
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;
