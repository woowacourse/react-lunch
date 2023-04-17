import React from 'react';

import type { FilterOption } from './util/type';
import RestaurantItem from './RestaurantItem.tsx';
import useFilterRestaurantList from './hooks/useFilterRestaurantList.ts';

type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

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
