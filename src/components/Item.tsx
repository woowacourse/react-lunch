import React from 'react';
import { Restaurant } from '../utils/interfaces';
import '../styles/Item.css';
import { CATEGORY_IMAGE_PATH } from '../utils/constants';

interface Props {
  restaurant: Restaurant;
}

function Item({ restaurant: { category, name, distance, description, id } }: Props) {
  return (
    <li className="restaurant" data-id={id}>
      <div className="restaurant_info">
        <div className="restaurant__category">
          <img src={CATEGORY_IMAGE_PATH[category]} alt={category} className="category-icon" />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">캠퍼스로부터 {distance}분 내</span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
      </div>
    </li>
  );
}

export default Item;
