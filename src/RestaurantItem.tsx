import React,{memo} from 'react';

import { Restaurant } from './util/type';
import { CATEGORY_IMAGES } from './util/constant.ts';

type RestaurantProps = {
  readonly restaurant: Omit<Restaurant, 'link'>;
  onToggleDrawer: (id?: number) => void;
};
const RestaurantItem = (({ restaurant, onToggleDrawer }: RestaurantProps) => {
  return (
    <li className="restaurant" onClick={() => onToggleDrawer(restaurant.id)}>
      <div className="restaurant__category">
        <img
          src={CATEGORY_IMAGES[restaurant.category]}
          alt={restaurant.category}
          className="category-icon"
        />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{restaurant.title}</h3>
        <span className="restaurant__distance text-body">
          캠퍼스로부터 {restaurant.distance}분 내
        </span>
        <p className="restaurant__description text-body">
          {restaurant.description}
        </p>
      </div>
    </li>
  );
});

export default memo(RestaurantItem);
