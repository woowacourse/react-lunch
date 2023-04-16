import React from 'react';

import Button from '../Button/Button';
import { RestaurantInfo } from '../data/type';
import { CATEGORY_IMAGES } from '../assets/images';
import './Modal.css';

interface ModalProps {
  restaurant: RestaurantInfo;
  modalClassName: string;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

const Modal = ({ restaurant, modalClassName, onClose }: ModalProps) => {
  return (
    <>
      <div
        id="modalBackdrop"
        onClick={onClose}
        className="modal-backdrop"
      ></div>
      <div id="modalContainer" className={modalClassName}>
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
              <p className="restaurant__description-info text-body">
                {restaurant.description}
              </p>
              <a
                href={restaurant.link}
                target="_blank"
                rel="noreferrer"
                className="restaurant__link-info text-body"
              >
                {restaurant.link}
              </a>
            </div>
          </div>
          <div className="button-container">
            <Button color="orange" name="닫기" onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
