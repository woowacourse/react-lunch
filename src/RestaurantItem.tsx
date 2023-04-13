import React from 'react';

import { Restaurant } from './util/type';
import { CATEGORY_IMAGES } from './util/constant.ts';

type RestaurantProps = {
  readonly restaurant: Omit<Restaurant, 'link'>;
  onToggleDrawer: (id?: number) => void;
};
class RestaurantItem extends React.Component<RestaurantProps> {
  render() {
    return (
      <li
        className="restaurant"
        onClick={() => this.props.onToggleDrawer(this.props.restaurant.id)}
      >
        <div className="restaurant__category">
          <img
            src={CATEGORY_IMAGES[this.props.restaurant.category]}
            alt={this.props.restaurant.category}
            className="category-icon"
          />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">
            {this.props.restaurant.title}
          </h3>
          <span className="restaurant__distance text-body">
            캠퍼스로부터 {this.props.restaurant.distance}분 내
          </span>
          <p className="restaurant__description text-body">
            {this.props.restaurant.description}
          </p>
        </div>
      </li>
    );
  }
}

export default RestaurantItem;
