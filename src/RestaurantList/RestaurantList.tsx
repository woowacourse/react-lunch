import React, { Component } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

import { RestaurantInfo } from '../data/type';
import mockData from '../data/mockData.json';
import './RestaurantList.css';

interface RestaurantListProps {}

interface RestaurantListState {
  restaurantData: RestaurantInfo[];
}

class RestaurantList extends Component<
  RestaurantListProps,
  RestaurantListState
> {
  constructor(props: RestaurantListProps) {
    super(props);

    this.state = {
      restaurantData: mockData.restaurant,
    };
  }

  render() {
    const { restaurantData } = this.state;

    return (
      <section className="restaurant-list-container">
        <ul id="restaurantList" className="restaurant-list">
          {restaurantData.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </section>
    );
  }
}

export default RestaurantList;
