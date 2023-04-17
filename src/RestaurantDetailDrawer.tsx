import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Drawer from './common/Drawer.tsx';
import { Restaurant } from './util/type.js';
import { CATEGORY_IMAGES, NO_EXIST_RESTAURANT } from './util/constant.ts';

const RestaurantDetailDrawer= ({
  isOpenDrawer,
  restaurantId,
  onToggleDrawer,
}) => {
  const [restaurant, setRestaurant] = useState<Omit<Restaurant, 'id'>>(NO_EXIST_RESTAURANT);

  const fetchRestaurantById = useCallback((): Omit<Restaurant, 'id'> => {
    const rawRestaurantList = localStorage.getItem('restaurantList');
    if (!rawRestaurantList) return NO_EXIST_RESTAURANT;
    const restaurantList: Restaurant[] = JSON.parse(rawRestaurantList);
    return (
      restaurantList.find(
        (restaurant: Restaurant) => +restaurant.id === +restaurantId
      ) ?? NO_EXIST_RESTAURANT
    );
  }, [restaurantId]);

  useEffect(() => {
    setRestaurant(fetchRestaurantById());
  }, [fetchRestaurantById]);

  return isOpenDrawer ? (
    ReactDOM.createPortal(
      <Drawer isOpenDrawer={isOpenDrawer}>
        <div className='restaurant__category'>
          <img
            src={CATEGORY_IMAGES[restaurant.category]}
            alt={restaurant.category}
            className='category-icon'
          />
        </div>
        <h3 className='restaurant__name text-subtitle'>{restaurant.title}</h3>
        <span className='restaurant__distance text-body'>
          캠퍼스로부터 {restaurant.distance}분 내
        </span>
        <p className='text-body'>{restaurant.description}</p>
        <p className='restaurant__link text-body'>{restaurant.link ?? ''}</p>
        <button
          type='button'
          className='button button--secondary text-caption'
          onClick={onToggleDrawer}
        >
          취소하기
        </button>
      </Drawer>,
      document.getElementById('modal-hook') as HTMLDivElement
    )
  ) : null;
};

export default React.memo(RestaurantDetailDrawer);
