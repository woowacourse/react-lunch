import React from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/ItemInformation.css';
import { CATEGORY_IMAGE_PATH } from '../utils/constants';

interface Props {
  restaurant: restaurant;
  closeEvent: () => void;
}

function ItemInformation({ restaurant, closeEvent }: Props) {
  const { category, name, description, link, distance } = restaurant;

  return (
    <div className="modal-container">
      <div className="detail-item restaurant__category">
        <img src={CATEGORY_IMAGE_PATH[category]} className="category-icon modal-detail-restaurant__image" />
      </div>

      <div className="detail-item">
        <h3 className="restaurant__name  modal-detail-restaurant__name text-subtitle">{name}</h3>
      </div>

      <div className="detail-item">
        <span className="restaurant__distance modal-detail-restaurant__distance text-body">
          캠퍼스부터 {distance}분 내
        </span>
      </div>

      <div className="detail-item">
        <p className="modal-detail-restaurant__description text-body">{description}</p>
      </div>

      <div className="detail-item">
        <a className="modal-detail-restaurant__link">{link}</a>
      </div>

      <div className="button-container detail-button-container">
        <button type="button" className="button button--close button--primary text-caption" onClick={closeEvent}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default ItemInformation;
