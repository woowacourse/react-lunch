import { useCallback, useState } from 'react';
import { FilterOption, Restaurant } from '../types';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';

const useRestaurantList = (restaurantList: Restaurant[]) => {
  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);

  const updateCurrentRestaurantList = useCallback(
    (displayStatus: FilterOption) => {
      const { category, sortBy } = displayStatus;
      const updatedRestaurantList = filterAndSortRestaurantList(restaurantList, category, sortBy);
      setCurrentRestaurantList(updatedRestaurantList);
    },
    [restaurantList]
  );

  return { currentRestaurantList, updateCurrentRestaurantList };
};

export { useRestaurantList };
