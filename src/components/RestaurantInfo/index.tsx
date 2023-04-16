import { Component } from 'react';
import { Restaurant } from '../../types';
import { categoryIconPath } from '../../constants/imagePath';
import './RestaurantInfo.css';

type RestaurantWithoutLink = Omit<Restaurant, 'link'>;

type RestaurantInfoProps = {
  restaurant: Restaurant | RestaurantWithoutLink;
};

export default class RestaurantInfo extends Component<RestaurantInfoProps> {
  render() {
    const { category, name, distance, description } = this.props.restaurant;
    const link = 'link' in this.props.restaurant ? this.props.restaurant.link : null;

    return (
      <>
        <div className="restaurant__category">
          <img src={categoryIconPath[category]} alt={category} className="category-icon" />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="restaurant__link">
            {link}
          </a>
        )}
      </>
    );
  }
}
