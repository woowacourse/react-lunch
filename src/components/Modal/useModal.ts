import { useRef, useEffect } from 'react';
import { ModalProps } from './Modal';

export default function useModal(props: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalRef.current) modalRef.current.showModal();
  }, [props]);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const onBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return {
    modalRef,
    closeModal,
    onBackdropClick,
  };
}
