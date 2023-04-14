import './style.css';
import { KeyboardEvent, MouseEvent, ReactNode, memo, useCallback, useEffect, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  close: () => void;
}

function Modal({ children, close }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, []);

  const handleCloseClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement;

      if (
        target.classList.contains('modal-backdrop') ||
        target.classList.contains('modal-close-button')
      ) {
        close();
      }
    },
    [close]
  );

  const handleClosePress = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  return (
    <div className="modal" onClick={handleCloseClick}>
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
  );
}

export default memo(Modal);
