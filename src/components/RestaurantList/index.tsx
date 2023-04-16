import React from 'react';
import { useLunchState } from '../../hooks';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantList.module.css';

function RestaurantList() {
  const state = useLunchState();

  return (
    <ul className={styles.restaurantList}>
      {state.restaurantList.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          isModal={false}
        />
      ))}
    </ul>
  );
}

export default React.memo(RestaurantList);
