import { Component } from 'react';
import { Restaurant } from '../../types';
import RestaurantInfo from '../RestaurantInfo';
import './RestaurantDetailView.css';

type RestaurantDetailViewProps = {
  restaurant: Restaurant;
};

export default class RestaurantDetailView extends Component<RestaurantDetailViewProps> {
  render() {
    return (
      <div className="detail-view">
        <RestaurantInfo restaurant={this.props.restaurant} />
      </div>
    );
  }
}
