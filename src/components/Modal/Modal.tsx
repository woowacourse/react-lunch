import './Modal.css';
import React, { useEffect } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const modalRef = React.createRef<HTMLDialogElement>();

  useEffect(() => {
    modalRef.current?.showModal();
  });

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <dialog ref={modalRef} onClick={handleBackdropClick}>
      <div className="modal-container">
        {children}
        <button
          className="button button--primary text-caption"
          id="restaurant-detail-modal-close-button"
          onClick={closeModal}
        >
          닫기
        </button>
      </div>
    </dialog>
  );
}

export default Modal;
