import React from 'react';
import styles from './RestaurantList.module.css';
import { FoodCategory, RestaurantInfo, SortMethod } from '../../types/restaurantInfo';
import RestaurantSummary from '../RestaurantSummary/RestaurantSummary';
import { filterFoodCategory, sortRestaurants } from './RestaurantSelector';

interface RestaurantListProps {
  restaurants: RestaurantInfo[];
  category: FoodCategory;
  sortingMethod: SortMethod;
  onClick: (restaurantInfo: RestaurantInfo) => void;
}

function RestaurantList(props: RestaurantListProps) {
  const { restaurants, category, sortingMethod, onClick } = props;

  const filteredList = filterFoodCategory(restaurants as RestaurantInfo[], category);
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
