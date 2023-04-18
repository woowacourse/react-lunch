import React, { useEffect } from 'react';

import Button from '../Button/Button';
import { RestaurantInfo } from '../data/type';
import { CATEGORY_IMAGES } from '../assets/images';
import './Modal.css';

interface ModalProps {
  restaurant: RestaurantInfo;
  isModalOpen: boolean;
  onCloseModal: (e: React.MouseEvent<HTMLElement> | KeyboardEvent) => void;
}

const Modal = ({ restaurant, isModalOpen, onCloseModal }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onCloseModal(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  return (
    <>
      <div
        id="modalBackdrop"
        onClick={onCloseModal}
        className="modal-backdrop"
      ></div>
      <div
        id="modalContainer"
        className={isModalOpen ? 'modal--open' : 'modal'}
      >
        <div id="restaurantDetails" className="modal-container-info">
          <div className="restaurant-info">
            <div className="restaurant__category-info">
              <img
                src={CATEGORY_IMAGES[restaurant.category]}
                alt={restaurant.category}
                className="category-icon-info"
              />
            </div>
            <div className="restaurant__info-info">
              <h3 className="restaurant__name-info text-subtitle">
                {restaurant.name}
              </h3>
              <span className="restaurant__distance-info text-body">
                캠퍼스부터 {restaurant.distance}분 내
              </span>
              {restaurant.description ? (
                <p className="restaurant__description-info text-body">
                  {restaurant.description}
                </p>
              ) : (
                <p className="restaurant__description-info text-body">
                  등록된 설명이 없습니다.
                </p>
              )}

              {restaurant.link && (
                <a
                  href={restaurant.link}
                  target="_blank"
                  rel="noreferrer"
                  className="restaurant__link-info text-body"
                >
                  {restaurant.link}
                </a>
              )}
            </div>
          </div>
          <div className="button-container">
            <Button color="orange" name="닫기" onClose={onCloseModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
