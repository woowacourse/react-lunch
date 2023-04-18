import React, { useContext } from 'react';
import { RestaurantContext } from '../containers/GlobalProvider';
import RestaurantItem from './RestaurantItem';

const RestaurantList = () => {
  const { state } = useContext(RestaurantContext);
  const { restaurants, categorizeBy } = state;

  return (
    <ul>
      {restaurants
        .filter((restaurant) =>
          categorizeBy === 'all' ? true : restaurant.category === categorizeBy
        )
        .map((restaurant) => (
          <RestaurantItem key={restaurant.name} restaurant={restaurant} />
        ))}
    </ul>
  );
};

export default RestaurantList;
