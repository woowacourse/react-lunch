import React from 'react';

import { RestaurantInfo } from '../data/type';
import { CATEGORY_IMAGES } from '../assets/images';
import './RestaurantItem.css';

interface RestaurantItemProps {
  restaurant: RestaurantInfo;
  onModalOpen: (restaurant: RestaurantInfo) => void;
}

const RestaurantItem = ({ restaurant, onModalOpen }: RestaurantItemProps) => {
  const handleModalOpen = () => {
    onModalOpen(restaurant);
  };

  return (
    <li
      id={restaurant.id.toString()}
      onClick={handleModalOpen}
      className="restaurant pointer"
    >
      <div className="restaurant__category">
        <img
          src={CATEGORY_IMAGES[restaurant.category]}
          alt={restaurant.category}
          className="category-icon"
        />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
        <span className="restaurant__distance text-body">
          캠퍼스부터 {restaurant.distance}분 내
        </span>
        <p className="restaurant__description text-body">
          {restaurant.description}
        </p>
      </div>
    </li>
  );
};

export default RestaurantItem;
