import './style.css';
import { KeyboardEvent, MouseEvent, ReactNode, memo, useEffect, useRef } from 'react';

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
    <div className="modal" onClick={onClick}>
      <div className="modal-backdrop" />
      <div ref={modalContainerRef} className="modal-container" onKeyDown={onKeyPress} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}

export default memo(Modal);
