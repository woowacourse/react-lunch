import React from 'react';

import type { FilterOption, Restaurant } from './util/type';
import RestaurantItem from './RestaurantItem.tsx';
import { pipe } from './util/util.ts';
import useRestaurantList from './hooks/useRestaurantList.ts';

type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

const filterByCategory = (restaurantList, category): Restaurant[] => {
  if (category === '전체') return restaurantList;
  return restaurantList.filter(
    (restaurant) => restaurant.category === category
  );
};

const filterBySort = (restaurantList, sorting): Restaurant[] => {
  return restaurantList.sort((firstElement, secondElement) => {
    if (sorting === 'name') {
      return firstElement.title.localeCompare(secondElement.title);
    }
    if (sorting === 'estimateTime') {
      return firstElement.estimateTime - secondElement.estimateTime;
    }
    return 0;
  });
};

const RestaurantList: React.FC<RestaurantListProps> = ({
  filterOptions,
  onToggleDrawer,
}) => {
  const { category, sorting } = filterOptions;
  const restaurantList = useRestaurantList('restaurantList', []);

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {pipe(filterByCategory, filterBySort)(restaurantList, [
          category,
          sorting,
        ]).map((restaurant) => (
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
