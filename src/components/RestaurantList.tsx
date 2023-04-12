import React, { Component } from 'react';
import styles from './RestaurantList.module.css';
import { RestaurantInfo } from '../types/restaurantInfo';
import RestaurantSummary from './RestaurantSummary';

class RestaurantList extends Component<{
  restaurantList: RestaurantInfo[];
  onClick: (restaurantInfo: RestaurantInfo) => void;
}> {
  render() {
    const { restaurantList, onClick } = this.props;
    return (
      <ul className={styles.list}>
        {restaurantList.map((restaurant) => (
          <RestaurantSummary key={restaurant.title} onClick={onClick} restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}

export default RestaurantList;
