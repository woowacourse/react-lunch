import { Component } from 'react';
import { Restaurant } from '../types';
import RestaurantItem from './RestaurantItem';

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
