import { ChangeEvent, useCallback, useState } from 'react';
import { FilterOption, Restaurant } from '../types';
import { DEFAULT_CATEGORY, DEFAULT_SORT_BY } from '../constants';
import { isElementOfType } from '../utils/eventUtils';

const filterRestaurant = (restaurantList: Restaurant[], filter: string) => {
  if (filter === DEFAULT_CATEGORY) return restaurantList;

  return restaurantList.filter((restaurant) => restaurant.category === filter);
};

const sortByName = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.name.localeCompare(b.name));
};

const sortByDistance = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.distance - b.distance);
};

const sortRestaurant = (restaurantList: Restaurant[], sortBy: string) => {
  if (sortBy === DEFAULT_SORT_BY) return sortByName(restaurantList);

  return sortByDistance(restaurantList);
};

const filterAndSortRestaurantList = (
  restaurantList: Restaurant[],
  filter: string = DEFAULT_CATEGORY,
  sortBy: string = DEFAULT_SORT_BY
) => {
  const filteredRestaurantList = filterRestaurant([...restaurantList], filter);

  return sortRestaurant([...filteredRestaurantList], sortBy);
};

const useRestaurantList = (data: Restaurant[]) => {
  const [restaurantList] = useState(data);

  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);
  const [displayStatus, setDisplayStatus] = useState({
    category: DEFAULT_CATEGORY,
    sortBy: DEFAULT_SORT_BY,
  });

  const updateCurrentRestaurantList = useCallback(
    ({ category, sortBy }: FilterOption) => {
      const updatedRestaurantList = filterAndSortRestaurantList(restaurantList, category, sortBy);
      setCurrentRestaurantList(updatedRestaurantList);
    },
    [restaurantList]
  );

  const handleRestaurantFilterChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (!isElementOfType<HTMLSelectElement>(event)) return;

      const updatedDisplayStatus = {
        ...displayStatus,
        [event.target.name]: event.target.value,
      };

      setDisplayStatus(updatedDisplayStatus);
      updateCurrentRestaurantList(updatedDisplayStatus);
    },
    [displayStatus, updateCurrentRestaurantList]
  );

  return { currentRestaurantList, handleRestaurantFilterChange };
};

export { filterAndSortRestaurantList, useRestaurantList };
