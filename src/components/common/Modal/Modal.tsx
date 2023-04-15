import styles from './style.module.css';
import { KeyboardEvent, MouseEvent, ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLElement>) => void;
}

function Modal({ children, onClick, onKeyPress }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.modal} onClick={onClick}>
      <div className={`${styles.modalBackdrop} backdrop`} />
      <div
        ref={modalContainerRef}
        className={styles.modalContainer}
        onKeyDown={onKeyPress}
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
