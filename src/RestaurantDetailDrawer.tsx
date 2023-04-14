import React, { useState, useEffect } from 'react';

import Drawer from './common/Drawer.tsx';
import { Restaurant } from './util/type.js';
import { CATEGORY_IMAGES, NO_EXIST_RESTAURANT } from './util/constant.ts';

type RestaurantDetailDrawerProps = {
  isOpenDrawer: boolean;
  restaurantId: number;
  onToggleDrawer: (id?: number) => void;
};

const RestaurantDetailDrawer:React.FC<RestaurantDetailDrawerProps> = ({ isOpenDrawer, restaurantId, onToggleDrawer }) => {
  const fetchRestaurantById = () => {
    const rawRestaurantList = localStorage.getItem('restaurantList');
    if (!rawRestaurantList) return NO_EXIST_RESTAURANT;
    const restaurantList = JSON.parse(rawRestaurantList);
    return (
      restaurantList.find(
        (restaurant: Restaurant) => +restaurant.id === +restaurantId
      ) ?? NO_EXIST_RESTAURANT
    );
  }

  const [restaurant, setRestaurant] = useState<Omit<Restaurant, 'id'>>(fetchRestaurantById());

  useEffect(() => {
    setRestaurant(fetchRestaurantById());
  }, [restaurantId])
  
    return (
      <Drawer isOpenDrawer={isOpenDrawer}>
        <div className="restaurant__category">
          <img
            src={CATEGORY_IMAGES[restaurant.category]}
            alt={restaurant.category}
            className="category-icon"
          />
        </div>
        <h3 className="restaurant__name text-subtitle">
          {restaurant.title}
        </h3>
        <span className="restaurant__distance text-body">
          캠퍼스로부터 {restaurant.distance}분 내
        </span>
        <p className="text-body">{restaurant.description}</p>
        <p className="restaurant__link text-body">
          {restaurant.link ?? ''}
        </p>
        <button
          type="button"
          className="button button--secondary text-caption"
          onClick={() => onToggleDrawer()}
        >
          취소하기
        </button>
      </Drawer>
    );
}

export default RestaurantDetailDrawer;
