import React, { Component } from 'react';
import styles from './RestaurantList.module.css';
import { RestaurantInfo } from '../types/restaurantInfo';
import RestaurantSummary from './RestaurantSummary';

class RestaurantList extends Component<{ restaurantList: RestaurantInfo[] }> {
  render() {
    const { restaurantList } = this.props;
    return (
      <ul className={styles.list}>
        {restaurantList.map((restaurant) => (
          <RestaurantSummary key={restaurant.title} restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}

export default RestaurantList;
