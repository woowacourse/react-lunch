import './style.css';
import { MouseEvent, memo, useEffect, useRef } from 'react';
import { ModalProps } from '../../../types/component';
import { useModal } from '../../../hooks/useModal';

function Modal({ content, shouldOpen, onToggle }: ModalProps) {
  const { isOpen, toggleOpen, handleKeyDown } = useModal();

  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) return;

    if (shouldOpen) {
      toggleOpen();
    }

    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, [isOpen, shouldOpen, toggleOpen]);

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (
      target.classList.contains('modal-backdrop') ||
      target.classList.contains('modal-close-button')
    ) {
      toggleOpen();
      onToggle(!shouldOpen);
    }
  };

  return (
    <>
      {shouldOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-backdrop" />
          <div
            ref={modalContainerRef}
            className="modal-container"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Modal, (prevProps, nextProps) => {
  return prevProps.shouldOpen === nextProps.shouldOpen;
});

/*

import './style.css';
import { MouseEvent, memo, useEffect, useRef } from 'react';
import { ModalProps } from '../../../types/component';
import { useModal } from '../../../hooks/useModal';

function Modal({ content, shouldOpen, onToggle }: ModalProps) {
  const { isOpen, toggleOpen, handleKeyDown } = useModal();

  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) return;

    if (shouldOpen) {
      toggleOpen();
    }

    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, [isOpen, shouldOpen, toggleOpen]);

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (
      target.classList.contains('modal-backdrop') ||
      target.classList.contains('modal-close-button')
    ) {
      toggleOpen();
      onToggle(!shouldOpen);
    }
  };

  return (
    <>
      {shouldOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-backdrop" />
          <div
            ref={modalContainerRef}
            className="modal-container"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Modal, (prevProps, nextProps) => {
  return prevProps.shouldOpen === nextProps.shouldOpen;
});


*/
