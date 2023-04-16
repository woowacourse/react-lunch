import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  children: JSX.Element;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const closeModalCallback = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

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
