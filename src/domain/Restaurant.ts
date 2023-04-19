import { FilterState } from '../App';
import { CategoryOption, Restaurant, SortOption } from '../type';
import { getRestaurantList } from './storage';

const filterAndSortArray = (
  restaurantList: Restaurant[],
  filter: FilterState
) => {
  const filteredList = filterRestaurantList(restaurantList, filter.category);
  const sortedList = sortRestaurantList(filteredList, filter.sort);

  return sortedList;
};

const filterRestaurantList = (
  restaurantList: Restaurant[],
  categoryFilter: CategoryOption
) => {
  if (categoryFilter === '전체') return restaurantList;

  return restaurantList.filter(
    (restaurant) => restaurant.category === categoryFilter
  );
};

const sortRestaurantList = (
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

export const getRestaurantListObj = () => {
  const list: Restaurant[] = getRestaurantList();

  return {
    getFilteredRestaurant(filter: FilterState) {
      return filterAndSortArray(list, filter);
    },

    getRestaurantInfoById(restaurantId: string) {
      const restaurant = list.find(({ id }) => id === restaurantId);

      if (restaurant === undefined)
        throw new Error(`${restaurantId}를 아이디로 갖는 레스토랑이 없습니다.`);

      return restaurant;
    },
  };
};
