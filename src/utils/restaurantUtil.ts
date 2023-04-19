import { FilterOption, Restaurant } from '../types';
import { DEFAULT_OPTIONS } from '../constants';

const filterRestaurant = (restaurantList: Restaurant[], filter: string) => {
  if (filter === DEFAULT_OPTIONS.CATEGORY) return restaurantList;

  return restaurantList.filter(restaurant => restaurant.category === filter);
};

const sortByName = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.name.localeCompare(b.name));
};

const sortByDistance = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.distance - b.distance);
};

const sortRestaurant = (restaurantList: Restaurant[], sortBy: string) => {
  if (sortBy === DEFAULT_OPTIONS.SORT_BY) return sortByName(restaurantList);

  return sortByDistance(restaurantList);
};

export const filterAndSortRestaurantList = (
  restaurantList: Restaurant[],
  option: FilterOption = {
    category: DEFAULT_OPTIONS.CATEGORY,
    sortBy: DEFAULT_OPTIONS.SORT_BY,
  }
) => {
  const filteredRestaurantList = filterRestaurant([...restaurantList], option.category);

  return sortRestaurant([...filteredRestaurantList], option.sortBy);
};
