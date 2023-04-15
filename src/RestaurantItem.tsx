import React from 'react';

import { Restaurant } from './util/type';
import { CATEGORY_IMAGES } from './util/constant.ts';

type RestaurantProps = {
  restaurant: Omit<Restaurant, 'link'>;
  onToggleDrawer: (id?: number) => void;
};
const RestaurantItem: React.FC<RestaurantProps> = ({
  restaurant,
  onToggleDrawer,
}) => {
  const { id, category, title, distance, description } = restaurant;
  return (
    <li className="restaurant" onClick={() => onToggleDrawer(id)}>
      <div className="restaurant__category">
        <img
          src={CATEGORY_IMAGES[category]}
          alt={category}
          className="category-icon"
        />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{title}</h3>
        <span className="restaurant__distance text-body">
          캠퍼스로부터 {distance}분 내
        </span>
        <p className="restaurant__description text-body">{description}</p>
      </div>
    </li>
  );
};

export default RestaurantItem;
