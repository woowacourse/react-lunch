import './style.css';
import { MouseEvent, ReactNode, memo, useEffect, useRef } from 'react';
import { useModal } from '../../../hooks/useModal';

interface ModalProps {
  children: ReactNode;
  onClose: CallableFunction;
}

function Modal({ children, onClose }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const { isOpen, open, handleCloseClick, handleClosePress } = useModal();

  useEffect(() => {
    open();

    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, [open]);

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    handleCloseClick(event);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-backdrop" />
          <div
            ref={modalContainerRef}
            className="modal-container"
            onKeyDown={handleClosePress}
            tabIndex={0}
          >
            {children}
            <button className="button button--primary text-caption modal-close-button">닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Modal);
