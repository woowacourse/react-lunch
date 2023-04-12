import { Component } from 'react';

import './style.css';

import RestaurantItem from './RestaurantItem';

import { Restaurant } from '../../../domain/type';

interface Props {
  restaurants: Restaurant[] | null;
}

class RestaurantListSection extends Component<Props> {
  render() {
    return (
      <section className="restaurant-list-section">
        <ul className="restaurant-list">
          {this.props.restaurants?.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </section>
    );
  }
}

export default RestaurantListSection;
