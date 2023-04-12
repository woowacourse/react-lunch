import { Component } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import data from '../../data/mockData.json';
import { Restaurant } from '../../types/types';

export default class RestaurantsList extends Component {
  render() {
    const restaurantItems = data.map((restaurant: Restaurant) => {
      const restaurantItemProps = {
        key: restaurant.id,
        category: restaurant.category,
        name: restaurant.name,
        distance: restaurant.distance,
        description: restaurant.description,
      };
      return <RestaurantItem {...restaurantItemProps} />;
    });
    return <div>{restaurantItems}</div>;
  }
}
