import React, { useMemo, useCallback } from 'react';

import RestaurantItem from './RestaurantItem.tsx';

import useRestaurantList from './hooks/useFetchRestaurantList.ts';
import { FilterOption, Restaurant } from './util/type.ts';
import { pipe } from './util/util.ts';

type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

const RestaurantList = ({ filterOptions, onToggleDrawer }: RestaurantListProps) => {
  const state = useRestaurantList();
  
  const filterByCategory = useCallback((category: string) => {
    return (restaurantList: Omit<Restaurant, 'link'>[]) => {
      if (category === '전체') return restaurantList;
      return restaurantList.filter((restaurant) => restaurant.category === category);
    };
  }, []);

  const filterBySort = useCallback((sorting: string) => {
    return (restaurantList: Omit<Restaurant, 'link'>[]) => {
      return restaurantList.sort((firstElement, secondElement) => {
        if (sorting === 'name') {
          return firstElement.title.localeCompare(secondElement.title);
        }
        if (sorting === 'distance') {
          return firstElement.distance - secondElement.distance;
        }
        return 0;
      });
    };
  }, []);

  const filteredList = useMemo(() => {
    return pipe(
      filterByCategory(filterOptions.category),
      filterBySort(filterOptions.sorting)
    )(state.restaurantList);
  }, [filterByCategory, filterBySort, filterOptions.category, filterOptions.sorting, state.restaurantList]);

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {filteredList.map((restaurant) => (
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

export default React.memo(RestaurantList);
