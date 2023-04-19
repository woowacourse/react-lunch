import React, { useContext } from 'react';
import { RestaurantContext } from '../containers/GlobalProvider';
import RestaurantItem from './RestaurantItem';

const RestaurantList = () => {
  const { restaurants, categorizeBy } = useContext(RestaurantContext);

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
