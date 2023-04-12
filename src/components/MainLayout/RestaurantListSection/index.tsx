import { Component } from 'react';

import './style.css';

import RestaurantItem from './RestaurantItem';

import { Restaurant } from '../../../domain/type';

interface Props {
  restaurants: Restaurant[] | null;
  onClickRestaurant: (event: React.MouseEvent<HTMLUListElement>) => void;
}

class RestaurantListSection extends Component<Props> {
  render() {
    return (
      <section className="restaurant-list-section">
        <ul className="restaurant-list" onClick={this.props.onClickRestaurant}>
          {this.props.restaurants?.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </section>
    );
  }
}

export default RestaurantListSection;
