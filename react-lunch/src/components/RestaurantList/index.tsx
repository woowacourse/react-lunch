import React, { Component, ReactNode } from 'react';
import {
  AlignFilter,
  CategoryFilter,
  Restaurant,
} from '../../types/restaurants';
import RestaurantItem from '../RestaurantItem';
import St from './styled';

interface RestaurantListProps {
  filterOptions: [CategoryFilter, AlignFilter];
}

interface State {
  restaurantList: Restaurant[];
}

class RestaurantList extends Component<RestaurantListProps, State> {
  state = { restaurantList: [] };
  componentDidMount() {
    fetch('./mocks/mockData.json')
      .then((res) => res.json())
      .then((res: Restaurant[]) => this.setState({ restaurantList: res }));
  }

  render(): ReactNode {
    const { restaurantList } = this.state;

    return (
      <St.Layout>
        {restaurantList.map((restaurant: Restaurant) => (
          <RestaurantItem key={restaurant.id} info={restaurant} />
        ))}
      </St.Layout>
    );
  }
}

export default RestaurantList;
