import React, { useEffect } from 'react';

function useModal(handleModalClose: () => void) {
  const modalRef = React.createRef<HTMLDialogElement>();

  useEffect(() => {
    if (modalRef.current?.open === false) modalRef.current.showModal();
  });

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  const closeModal = () => {
    modalRef.current?.close();
    handleModalClose();
  };

  return { modalRef, handleBackdropClick, closeModal };
}

export default useModal;
