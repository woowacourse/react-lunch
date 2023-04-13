import { Component } from 'react';
import { Restaurant } from '../../../types';
import { categoryIconPath } from '../../../constants/imagePath';

type RestaurantItemProps = {
  restaurant: Restaurant;
  onClick: (restaurantId: number) => void;
};

export default class RestaurantItem extends Component<RestaurantItemProps> {
  render() {
    const { id, category, name, distance, description } = this.props.restaurant;
    return (
      <li className="restaurant" onClick={this.props.onClick.bind(this, id)}>
        <div className="restaurant__category">
          <img src={categoryIconPath[category]} alt={category} className="category-icon" />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
      </li>
    );
  }
}
