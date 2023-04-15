import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './style.css';

interface Props {
  children: React.ReactNode;
  onCloseModal: () => void;
}

const Modal = ({ children, onCloseModal }: Props) => {
  const handleEscapeKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onCloseModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleEscapeKeydown);

    return () =>
      document.body.removeEventListener('keydown', handleEscapeKeydown);
  }, []);

  return createPortal(
    <div role="dialog" aria-modal>
      <div className="modal-backdrop" onClick={onCloseModal} />
      <div className="modal-container">{children}</div>
    </div>,
    document.body,
  );
};

export default Modal;
