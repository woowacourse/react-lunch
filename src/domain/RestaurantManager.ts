import mockData from './mockData.json';
import { RestaurantDetail, Category } from '../types/RestaurantDetail';

const RESTAURANT_LOCAL_STORAGE_ID = 'restaurantList';

// local storage 접근
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

export default {
  initMockData,
  getRestaurantList,
  sortByName,
  sortByDistance,
  filterByCategory,
  getFiltered,
};
