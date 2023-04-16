import { ReactNode } from 'react';
import './Modal.css';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const Modal = ({ children, isOpen, onClick }: ModalProps) => {
  return isOpen ? (
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
  ) : null;
};

export default Modal;
