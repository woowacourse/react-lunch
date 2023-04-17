import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CATEGORY_ICONS } from '../constants/constants';
import type { Restaurant } from '../types/Restaurant';

type ModalProps = {
  restaurant: Restaurant;
  closeModal: () => void;
};

function Modal({ restaurant, closeModal }: ModalProps) {
  const { category, storeName, distance, detail, link } = restaurant;

  const closeModalByESC = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeModal();
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalByESC);

    return () => document.removeEventListener('keydown', closeModalByESC);
  });

  return createPortal(
    <>
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="information-modal-favorite">
          <div className="restaurant__category">
            <img src={CATEGORY_ICONS[category]} alt={category} className="category-icon" />
          </div>
        </div>
        <div className="restaurant__name text-subtitle" id="storeName">
          {storeName}
        </div>
        <div className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</div>
        <div className="restaurant__description text-body">{detail}</div>
        <a href={link} className="restaurant-link">
          {link}
        </a>
        <div className="button-container">
          <button onClick={closeModal} className="button button--primary text-caption">
            닫기
          </button>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default Modal;
