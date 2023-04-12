import { Component } from 'react';

import RestaurantItem from './RestaurantItem';
import './RestaurantList.css';
import { Restaurant } from '../../types';

type RestaurantListProps = {
  restaurants: Restaurant[];
  onClick: (restaurantId: number) => void;
};

export default class RestaurantList extends Component<RestaurantListProps> {
  render() {
    return (
      <section className="restaurant-list-container">
        <ul>
          {this.props.restaurants.map((restaurant) => (
            <RestaurantItem
              restaurant={restaurant}
              onClick={this.props.onClick.bind(this)}
              key={restaurant.id}
            />
          ))}
        </ul>
      </section>
    );
  }
}
