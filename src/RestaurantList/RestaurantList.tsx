import React, { Component } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

import { RestaurantInfo } from '../data/type';
import mockData from '../data/mockData.json';
import './RestaurantList.css';

interface RestaurantListProps {
  selectedCategory: string;
  selectedSort: string;
}

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
    const { selectedCategory, selectedSort } = this.props;
    const { restaurantData } = this.state;

    const filteredAndSortedRestaurantData = [...restaurantData]
      .filter((restaurant) => {
        return (
          selectedCategory === '전체' ||
          restaurant.category === selectedCategory
        );
      })
      .sort((a, b) => {
        if (selectedSort === '이름순') {
          return a.name.localeCompare(b.name);
        } else {
          return a.distance - b.distance;
        }
      });

    return (
      <section className="restaurant-list-container">
        <ul id="restaurantList" className="restaurant-list">
          {filteredAndSortedRestaurantData.map((restaurant) => {
            return (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default RestaurantList;
