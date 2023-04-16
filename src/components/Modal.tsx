import React, { PropsWithChildren, useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalOriginalProps {
  onClose: () => void;
}

function Modal(props: PropsWithChildren<ModalOriginalProps>) {
  const { children, onClose } = props;

  const closeModalCallback = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  }

  useEffect(() => {
    window.addEventListener('keydown', closeModalCallback);
    
    return () => {
      window.removeEventListener('keydown', closeModalCallback);
    };
  }, []);

  return (
    <div>
      <div onClick={onClose} aria-hidden="true" className={styles.background} />
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default Modal;
