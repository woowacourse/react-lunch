import './style.css';
import { ReactNode } from 'react';
import { useModal } from '../../hooks/modal';

const Modal = ({ content, setSelectedRestaurant }: { content: ReactNode; setSelectedRestaurant: CallableFunction }) => {
  const { ref, handleClickClose, handleKeyPressClose } = useModal(setSelectedRestaurant);

  return (
    <div className="modal" onClick={handleClickClose}>
      <div className="modal-backdrop" />
      <div ref={ref} className="modal-container" onKeyDown={handleKeyPressClose} tabIndex={1}>
        {content}
        <button className="button button--primary text-caption modal-close-button">닫기</button>
      </div>
    </div>
  );
};

export default Modal;
