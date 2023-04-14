import { ReactNode } from 'react';
import './Modal.css';

type ModalProps = {
  children: ReactNode;
  onClick: () => void;
};

const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-container">
        {children}
        <div className="button-container">
          <button
            id="modal-close-button"
            className="button button--primary text-caption"
            onClick={onClick}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
