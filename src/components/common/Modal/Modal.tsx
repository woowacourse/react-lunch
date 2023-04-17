import styles from './style.module.css';
import { KeyboardEvent, ReactNode, useEffect, useRef } from 'react';
import { useScrollStop } from '../../../hooks/useScrollStop';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
}

function Modal({ isOpen, children, close, onKeyDown }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  useScrollStop(isOpen);

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, []);

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
