import './style.css';
import { KeyboardEvent, MouseEvent, ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  close: CallableFunction;
}

function Modal({ children, isModalOpen, close }: ModalProps) {
  console.log('rendering Modal');

  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalContainerRef.current && isModalOpen) {
      modalContainerRef.current.focus();
    }
  }, [isModalOpen]);

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (
      target.classList.contains('modal-backdrop') ||
      target.classList.contains('modal-close-button')
    ) {
      close();
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-backdrop" />
          <div
            ref={modalContainerRef}
            className="modal-container"
            onKeyDown={handleKeyPress}
            tabIndex={1}
          >
            {children}
            <button className="button button--primary text-caption modal-close-button">닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
