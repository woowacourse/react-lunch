import React from 'react';
import styles from './RestaurantList.module.css';
import { FoodCategory, RestaurantInfo } from '../../types/restaurantInfo';
import RestaurantSummary from '../RestaurantSummary/RestaurantSummary';
import { filterFoodCategory, sortRestaurants } from './RestaurantSelector';

interface RestaurantListProps {
  restaurantList: RestaurantInfo[];
  category: FoodCategory;
  sortingMethod: '이름순' | '거리순';
  onClick: (restaurantInfo: RestaurantInfo) => void;
}

function RestaurantList(props: RestaurantListProps) {
  const { restaurantList, category, sortingMethod, onClick } = props;

  const filteredList = filterFoodCategory(restaurantList, category);
  const sortedList = sortRestaurants(filteredList, sortingMethod);

  return (
    <ul className={styles.list}>
      {sortedList.map((restaurant) => (
        <RestaurantSummary key={restaurant.id} onClick={onClick} restaurant={restaurant} />
      ))}
    </ul>
  );
}

export default RestaurantList;
