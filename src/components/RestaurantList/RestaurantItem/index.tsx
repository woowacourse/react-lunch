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
    const { link, ...restaurant } = this.props.restaurant;

    return (
      <li className="restaurant" onClick={this.onClickRestaurantItem}>
        <RestaurantInfo restaurant={restaurant} />
      </li>
    );
  }

  onClickRestaurantItem = () => {
    const { id } = this.props.restaurant;

    this.props.onClick(id);
  };
}
