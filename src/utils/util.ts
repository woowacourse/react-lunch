import { FilterState } from '../App';
import { CategoryFilter, Restaurant, SortFilter } from '../type';

export const filterAndSortArray = (
  restaurantList: Restaurant[],
  filter: FilterState
) => {
  const filteredList = filterRestaurantList(restaurantList, filter.category);
  const sortedList = sortRestaurantList(filteredList, filter.sort);

  return sortedList;
};

export const filterRestaurantList = (
  restaurantList: Restaurant[],
  categoryFilter: CategoryFilter
) => {
  if (categoryFilter === '전체') return restaurantList;

  return restaurantList.filter(
    (restaurant) => restaurant.category === categoryFilter
  );
};

export const sortRestaurantList = (
  restaurantList: Restaurant[],
  sortFilter: SortFilter
) => {
  switch (sortFilter) {
    case 'name':
      return [...restaurantList].sort((a, b) => (a.name > b.name ? 1 : -1));

    case 'distance':
      return [...restaurantList].sort((a, b) => a.distance - b.distance);
  }
};
