import React from 'react';

import type { RestaurantListProps } from './util/type';
import RestaurantItem from './RestaurantItem.tsx';
import useFilterRestaurantList from './hooks/useFilterRestaurantList.ts';

const RestaurantList = ({
  filterOptions,
  onToggleDrawer,
}: RestaurantListProps) => {
  const { category, sorting } = filterOptions;
  const restaurantList = useFilterRestaurantList(category, sorting);

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onToggleDrawer={onToggleDrawer}
          />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
