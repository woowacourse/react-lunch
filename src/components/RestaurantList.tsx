import { Component } from 'react';
import RestaurantItem from './RestaurantItem';
import { Restaurant } from '../types';

class RestaurantList extends Component<{
  restaurantList: Restaurant[];
}> {
  render() {
    const { restaurantList } = this.props;

    return (
      <ul className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}

export default RestaurantList;
