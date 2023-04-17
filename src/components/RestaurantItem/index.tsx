import './style.css';
import { Component } from 'react';
import { RestaurantElementProps } from '../../types/component';
import { RESTAURANT_IMAGE } from '../../constants/images';

class RestaurantItem extends Component<RestaurantElementProps> {
  render() {
    const { restaurant } = this.props;

    return (
      <li className="restaurant" data-id={restaurant.id}>
        <div className="restaurant__category">
          <img
            src={RESTAURANT_IMAGE[restaurant.category]}
            alt={restaurant.category}
            className="category-icon"
          />
        </div>
        <div className="restaurant__info-container">
          <div className="restaurant__info">
            <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
            <span className="restaurant__distance text-body">
              캠퍼스부터 {restaurant.distance}분 내
            </span>
            <p className="restaurant__description text-body">{restaurant.description ?? ''}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default RestaurantItem;
