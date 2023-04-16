import './style.css';
import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { useModalFocus } from '../../hooks';

const Modal = ({
  onToggle,
  isModalOpen,
  content,
}: {
  content: ReactNode;
  isModalOpen: boolean;
  onToggle: CallableFunction;
}) => {
  const modalRef = useModalFocus(isModalOpen);

  const handleClickClose = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('modal-backdrop') || target.classList.contains('modal-close-button')) {
      onToggle();
    }
  };

  const handleKeyPressClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onToggle();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal" onClick={handleClickClose}>
          <div className="modal-backdrop" />
          <div ref={modalRef} className="modal-container" onKeyDown={handleKeyPressClose} tabIndex={1}>
            {content}
            <button className="button button--primary text-caption modal-close-button">닫기</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
