import React, { Component } from 'react';

import { RestaurantInfo } from '../data/type';
import { CATEGORY_IMAGES } from '../assets/images';
import './RestaurantItem.css';

interface RestaurantItemProps {
  restaurant: RestaurantInfo;
}

class RestaurantItem extends Component<RestaurantItemProps> {
  render() {
    const { category, name, distance, description } = this.props.restaurant;
    return (
      <li className="restaurant pointer">
        <div className="restaurant__category">
          <img
            src={CATEGORY_IMAGES[category]}
            alt={category}
            className="category-icon"
          />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">
            캠퍼스부터 {distance}분 내
          </span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
      </li>
    );
  }
}

export default RestaurantItem;
