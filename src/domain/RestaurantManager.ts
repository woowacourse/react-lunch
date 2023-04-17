import mockData from './mockData.json';
import { RestaurantDetail, Category } from '../types/RestaurantDetail';

const RESTAURANT_LOCAL_STORAGE_ID = 'restaurantList';
const restaurantList = initRestaurantList();

(function initMockData() {
  localStorage.setItem(RESTAURANT_LOCAL_STORAGE_ID, JSON.stringify(mockData));
})();

function initRestaurantList() {
  return JSON.parse(localStorage.getItem(RESTAURANT_LOCAL_STORAGE_ID) || '{}');
}

const getRestaurantList = (): RestaurantDetail[] => {
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
    if (_category === '전체') return restaurantList;

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
  if (sort === '거리순') {
    return getFiltered(
      [sortByDistance, filterByCategory(category)],
      getRestaurantList()
    );
  }
  if (sort === '이름순') {
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
  getRestaurantList,
  sortByName,
  sortByDistance,
  filterByCategory,
  getFiltered,
  getRestaurantListFilteredByOptions,
  getRestaurantByID,
};
