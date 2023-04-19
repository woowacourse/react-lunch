import React from 'react';
import styles from './RestaurantList.module.css';
import { RestaurantInfo } from '../types/restaurantInfo';
import RestaurantSummary from './RestaurantSummary';

interface RestaurantListProps {
  restaurantList: RestaurantInfo[];
  onClick: (restaurantInfo: RestaurantInfo) => void;
}

export default function RestaurantList({ restaurantList, onClick }: RestaurantListProps) {
  return (
    <ul className={styles.list}>
      {restaurantList.map((restaurant) => (
        <RestaurantSummary key={restaurant.title} onClick={onClick} restaurant={restaurant} />
      ))}
    </ul>
  );
}
