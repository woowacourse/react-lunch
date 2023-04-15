import React from 'react';
import { Restaurant } from '../utils/interfaces';
import '../styles/ItemInformation.css';
import { CATEGORY_IMAGE_PATH } from '../utils/constants';

interface Props {
  restaurant: Restaurant | null;
  closeEvent: () => void;
}

function ItemInformation({ restaurant, closeEvent }: Props) {
  return (
    restaurant && (
      <div className="modal-container">
        <div className="detail-item restaurant__category">
          <img
            src={CATEGORY_IMAGE_PATH[restaurant.category]}
            className="category-icon modal-detail-restaurant__image"
          />
        </div>

        <div className="detail-item">
          <h3 className="restaurant__name  modal-detail-restaurant__name text-subtitle">{restaurant.name}</h3>
        </div>

        <div className="detail-item">
          <span className="restaurant__distance modal-detail-restaurant__distance text-body">
            캠퍼스부터 {restaurant.distance}분 내
          </span>
        </div>

        <div className="detail-item">
          <p className="modal-detail-restaurant__description text-body">{restaurant.description}</p>
        </div>

        {restaurant.link && (
          <div className="detail-item">
            <a className="modal-detail-restaurant__link">{restaurant.link}</a>
          </div>
        )}

        <div className="button-container detail-button-container">
          <button type="button" className="button button--close button--primary text-caption" onClick={closeEvent}>
            닫기
          </button>
        </div>
      </div>
    )
  );
}

export default ItemInformation;
