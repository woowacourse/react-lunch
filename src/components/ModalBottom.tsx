import styled from 'styled-components';
import { useEffect, useRef } from 'react';

type ModalProps = React.PropsWithChildren<{
  closeModal: () => void;
}>;

export const ModalBottom = ({ closeModal, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyupEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeModal();
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyupEscape);
    return () => {
      window.removeEventListener('keyup', handleKeyupEscape);
    };
  }, []);

  return (
    <div className="modal modal--open" ref={modalRef}>
      <Backdrop
        className="modal-backdrop"
        onClick={() => {
          closeModal();
        }}
      ></Backdrop>
      <Container className="modal-container">{children}</Container>
    </div>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border: 0;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;
