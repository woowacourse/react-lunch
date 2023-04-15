import React from 'react';
import './Modal.css';
import useModal from './useModal';

export interface ModalProps {
  children?: React.ReactNode;
}

function Modal(props: ModalProps) {
  const { modalRef, closeModal, onBackdropClick } = useModal(props);

  return (
    <dialog ref={modalRef} onClick={onBackdropClick}>
      <div className="modal-container">
        {props.children}
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
