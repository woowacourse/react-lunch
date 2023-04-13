import { Component } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { Restaurant } from '../../types/types';
import styles from './RestaurantsList.module.css';
import { getSelectedRestaurantsList } from '../../data/parseFn';

export default class RestaurantsList extends Component {
  render() {
    const { category, sorting }: Record<string, string> = this.props;

    const restaurants = getSelectedRestaurantsList(category, sorting);

    const restaurantItems = restaurants.map((restaurant: Restaurant) => {
      const restaurantItemProps = {
        key: restaurant.id,
        category: restaurant.category,
        name: restaurant.name,
        distance: restaurant.distance,
        description: restaurant.description,
      };
      return (
        <li key={restaurant.id} className={styles.restaurant}>
          <RestaurantItem {...restaurantItemProps} />
        </li>
      );
    });
    return (
      <section className={styles.container}>
        <ul>{restaurantItems}</ul>
      </section>
    );
  }
}
