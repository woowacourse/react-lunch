import React from 'react';

import type { Restaurant, RestaurantDetailDrawerProps } from './util/type.js';
import Drawer from './components/Drawer.tsx';
import useRestaurantList from './hooks/useRestaurantList.ts';
import { CATEGORY_IMAGES, NO_EXIST_RESTAURANT } from './util/constant.ts';

const getRestaurantById = (restaurantList, id: number) => {
  return (
    restaurantList.find((restaurant: Restaurant) => +restaurant.id === +id) ??
    NO_EXIST_RESTAURANT
  );
};

const RestaurantDetailDrawer = ({
  isOpenDrawer,
  restaurantId,
  onToggleDrawer,
}: RestaurantDetailDrawerProps) => {
  const restaurantList = useRestaurantList('restaurantList', []);
  const restaurant = getRestaurantById(restaurantList, restaurantId);

  return (
    <Drawer isOpenDrawer={isOpenDrawer}>
      <div className="restaurant__category">
        <img
          src={CATEGORY_IMAGES[restaurant.category]}
          alt={restaurant.category}
          className="category-icon"
        />
      </div>
      <h3 className="restaurant__name text-subtitle">{restaurant.title}</h3>
      <span className="restaurant__estimate-time text-body">
        캠퍼스로부터 {restaurant.estimateTime}분 내
      </span>
      <p className="text-body">{restaurant.description}</p>
      <p className="restaurant__link text-body">{restaurant.link ?? ''}</p>
      <button
        type="button"
        className="button button--secondary text-caption"
        onClick={onToggleDrawer}
        aria-label="닫기"
      >
        취소하기
      </button>
    </Drawer>
  );
};

export default RestaurantDetailDrawer;
