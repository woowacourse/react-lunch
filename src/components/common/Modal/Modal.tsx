import styles from './style.module.css';
import { KeyboardEvent, ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  close: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
}

function Modal({ children, close, onKeyDown }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.body.classList.add('hide-overflow');

    return () => {
      document.body.classList.remove('hide-overflow');
    };
  });

  return (
    <div className={styles.modal}>
      <div className="backdrop" onClick={close} />
      <div ref={modalContainerRef} className="modal-container" onKeyDown={onKeyDown} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
