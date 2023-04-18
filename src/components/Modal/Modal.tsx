import './Modal.css';
import React from 'react';
import useModal from '../../hooks/useModal';

export interface ModalProps {
  children?: React.ReactNode;
  handleModalClose: () => void;
}

function Modal({ children, handleModalClose }: ModalProps) {
  const { modalRef, handleBackdropClick, closeModal } = useModal(handleModalClose);

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
