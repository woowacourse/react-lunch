import React, { Component } from 'react';
import styles from './RestaurantList.module.css';
import { RestaurantInfo } from '../types/restaurantInfo';
import RestaurantSummary from './RestaurantSummary';

interface RestaurantListProps {
  restaurantList: RestaurantInfo[];
  onClick: (restaurantInfo: RestaurantInfo) => void;
}

function RestaurantList(props: RestaurantListProps) {
  const { restaurantList, onClick } = props;
  return (
    <ul className={styles.list}>
      {restaurantList.map((restaurant) => (
        <RestaurantSummary key={restaurant.title} onClick={onClick} restaurant={restaurant} />
      ))}
    </ul>
  );
}

export default RestaurantList;
