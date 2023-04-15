import { FilterState } from '../App';
import { Category, CategoryOption, Restaurant, SortOption } from '../type';
import { imgSrc } from '../constants';

export const filterAndSortRestaurantList = (
  restaurantList: Restaurant[],
  filter: FilterState
) => {
  const filteredList = filterRestaurantList(restaurantList, filter.category);
  const sortedList = sortRestaurantList(filteredList, filter.sort);

  return sortedList;
};

export const filterRestaurantList = (
  restaurantList: Restaurant[],
  categoryFilter: CategoryOption
) => {
  if (categoryFilter === '전체') return restaurantList;

  return restaurantList.filter(
    (restaurant) => restaurant.category === categoryFilter
  );
};

export const sortRestaurantList = (
  restaurantList: Restaurant[],
  sortFilter: SortOption
) => {
  switch (sortFilter) {
    case 'name':
      return [...restaurantList].sort((a, b) => (a.name > b.name ? 1 : -1));

    case 'distance':
      return [...restaurantList].sort((a, b) => a.distance - b.distance);
  }
};

export const getImageSrc = (category: Category) => {
  return `${process.env.PUBLIC_URL}/images/category-${imgSrc[category]}.png`;
};
