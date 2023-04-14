import './style.css';
import { Dispatch, MouseEvent, ReactNode, SetStateAction, memo, useEffect, useRef } from 'react';
import { Restaurant } from '../../../types';
import { useModal } from '../../../hooks/useModal';

interface ModalProps {
  children: ReactNode;
  onClose: Dispatch<SetStateAction<Restaurant | null>>;
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
    onClose(null);
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
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Modal);
