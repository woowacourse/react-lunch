import { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';

type ModalProps = {
  onCloseModal: () => void;
};

const Modal = ({ children, onCloseModal }: PropsWithChildren<ModalProps>) => {
  const onKeyDownEscape = (event: KeyboardEvent) => {
    if (event.code !== 'Escape') return;
    onCloseModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownEscape);
    return () => window.removeEventListener('keydown', onKeyDownEscape);
  });

  return (
    <>
      <ModalBackdrop onClick={onCloseModal} />
      <ModalContent>
        {children}
        <CloseButton onClick={onCloseModal}>닫기</CloseButton>
      </ModalContent>
    </>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--backdrop-color);
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 80vh;
  overflow: auto;
  padding: 32px 16px;
  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const CloseButton = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);
`;

export default Modal;
