import React, { useState, useRef, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  children?: React.ReactNode;
  isClicked: boolean;
}

const useModalRef = (props: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalRef.current) modalRef.current.showModal();
  }, [props]);

  return [modalRef];
};

function Modal(props: ModalProps) {
  const [, setIsClicked] = useState(props.isClicked);
  const [modalRef] = useModalRef(props);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const onBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === modalRef.current) {
      setIsClicked(false);
      closeModal();
    }
  };

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
