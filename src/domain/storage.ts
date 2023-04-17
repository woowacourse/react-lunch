import dummyList from '../mockData.json';
import { Restaurant } from '../type';

export const getRestaurantList = (): Restaurant[] => {
  const localStorageData = localStorage.getItem('restaurantList');

  if (localStorageData === null) {
    setRestaurantList(dummyList as Restaurant[]);
    return dummyList as Restaurant[];
  }

  return JSON.parse(localStorageData);
};

export const setRestaurantList = (restaurantList: Restaurant[]) => {
  localStorage.setItem('restaurantList', JSON.stringify(restaurantList));
};
