import React, { Component } from 'react';

import Button from '../Button/Button';
import { RestaurantInfo } from '../data/type';
import { CATEGORY_IMAGES } from '../assets/images';
import './Modal.css';

interface ModalProps {
  restaurant: RestaurantInfo;
  modalClassName: string;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

class Modal extends Component<ModalProps> {
  render() {
    const { category, name, distance, description, link } =
      this.props.restaurant;
    return (
      <>
        <div
          id="modalBackdrop"
          onClick={this.props.onClose}
          className="modal-backdrop"
        ></div>
        <div id="modalContainer" className={this.props.modalClassName}>
          <div id="restaurantDetails" className="modal-container-info">
            <div className="restaurant-info">
              <div className="restaurant__category-info">
                <img
                  src={CATEGORY_IMAGES[category]}
                  alt={category}
                  className="category-icon-info"
                />
              </div>
              <div className="restaurant__info-info">
                <h3 className="restaurant__name-info text-subtitle">{name}</h3>
                <span className="restaurant__distance-info text-body">
                  캠퍼스부터 {distance}분 내
                </span>
                <p className="restaurant__description-info text-body">
                  {description}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="restaurant__link-info text-body"
                >
                  {link}
                </a>
              </div>
            </div>
            <div className="button-container">
              <Button color="orange" name="닫기" onClose={this.props.onClose} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
