import { Component } from 'react';
import { Restaurant } from '../../../types';
import RestaurantInfo from '../../RestaurantInfo';
import './RestaurantItem.css';

type RestaurantItemProps = {
  restaurant: Restaurant;
  onClick: (restaurantId: number) => void;
};

export default class RestaurantItem extends Component<RestaurantItemProps> {
  render() {
    const { id } = this.props.restaurant;

    return (
      <li className="restaurant" onClick={() => this.props.onClick(id)}>
        <RestaurantInfo restaurant={this.props.restaurant} />
      </li>
    );
  }
}
