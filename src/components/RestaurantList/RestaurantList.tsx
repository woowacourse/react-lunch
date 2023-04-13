import React from 'react';
import type Restaurant from '../../types/Restaurant';
import RestaurantListItem from '../RestaurantListItem/RestaurantListItem';
import * as styled from './RestaurantList.styles';

type RestaurantListProps = {
  restaurants: Restaurant[];
  onClickItem: (restaurant: Restaurant) => void;
};
class RestaurantList extends React.PureComponent<RestaurantListProps> {
  render() {
    return (
      <styled.RestaurantList>
        {this.props.restaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => this.props.onClickItem(restaurant)}
          />
        ))}
      </styled.RestaurantList>
    );
  }
}

export default RestaurantList;
