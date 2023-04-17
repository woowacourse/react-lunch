import mockData from './mockData.json';
import { RestaurantDetail, Category } from '../types/RestaurantDetail';
import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';

const RESTAURANT_LOCAL_STORAGE_ID = 'restaurantList';

const initMockData = () => {
  localStorage.setItem(RESTAURANT_LOCAL_STORAGE_ID, JSON.stringify(mockData));
};

const getRestaurantList = (): RestaurantDetail[] => {
  const restaurantList: RestaurantDetail[] = JSON.parse(
    localStorage.getItem(RESTAURANT_LOCAL_STORAGE_ID) || '{}'
  );

  return restaurantList;
};

const sortByName = (restaurantList: RestaurantDetail[]) => {
  return restaurantList.sort((a, b) => a.name.localeCompare(b.name));
};

const sortByDistance = (restaurantList: RestaurantDetail[]) => {
  return restaurantList.sort((a, b) => a.distance - b.distance);
};

const filterByCategory =
  (_category: Category) => (restaurantList: RestaurantDetail[]) => {
    if (_category === RESTAURANT_CATEGORY.all) return restaurantList;

    return restaurantList.filter(
      (restaurant) => restaurant.category === _category
    );
  };

const getFiltered = (
  filterFnList: ((restaurant: RestaurantDetail[]) => RestaurantDetail[])[],
  restaurantList: RestaurantDetail[]
) => {
  return filterFnList.reduce((restaurantList, fn) => {
    return fn(restaurantList);
  }, restaurantList);
};

const getRestaurantListFilteredByOptions = (
  category: Category,
  sort: string
) => {
  if (sort === SORTING_OPTION.distance) {
    return getFiltered(
      [sortByDistance, filterByCategory(category)],
      getRestaurantList()
    );
  }
  if (sort === SORTING_OPTION.name) {
    return getFiltered(
      [sortByName, filterByCategory(category)],
      getRestaurantList()
    );
  }

  return [];
};

const getRestaurantByID = (_id: number) => {
  const restaurantItem = getRestaurantList()
    .filter((restaurant) => restaurant.id === _id)
    .pop();

  return restaurantItem;
};

export default {
  initMockData,
  getRestaurantList,
  sortByName,
  sortByDistance,
  filterByCategory,
  getFiltered,
  getRestaurantListFilteredByOptions,
  getRestaurantByID,
};
