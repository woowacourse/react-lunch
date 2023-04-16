import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  closeModal: () => void;
}

const Modal = ({ children, closeModal }: PropsWithChildren<Props>) => {
  const onKeyUp = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') closeModal();
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <>
      <ModalBackdrop onClick={closeModal} />
      <ModalContainer>{children}</ModalContainer>
    </>
  );
};

export default Modal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;
