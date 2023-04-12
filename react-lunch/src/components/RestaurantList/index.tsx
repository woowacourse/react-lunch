import React, { Component, ReactNode } from 'react';
import RestaurantItem from '../RestaurantItem';
import St from './styled';

class RestaurantList extends Component {
  render(): ReactNode {
    return (
      <St.Layout>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </St.Layout>
    );
  }
}

export default RestaurantList;
