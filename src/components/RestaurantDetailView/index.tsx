import { Component } from 'react';
import { categoryIconPath } from '../../constants/imagePath';
import { Restaurant } from '../../types';
import './RestaurantDetailView.css';

type RestaurantDetailViewProps = {
  restaurant: Restaurant;
};

export default class RestaurantDetailView extends Component<RestaurantDetailViewProps> {
  render() {
    const { category, name, distance, description, link } = this.props.restaurant;

    return (
      <div className="detail-view">
        <div className="restaurant__category">
          <img src={categoryIconPath[category]} alt={category} className="category-icon" />
        </div>
        <h2 className="title text-title">{name}</h2>
        <div className="restaurant__info">
          <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="restaurant__link">
          {link}
        </a>
      </div>
    );
  }
}
