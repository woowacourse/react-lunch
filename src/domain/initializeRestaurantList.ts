import { RestaurantInfo } from '../types/restaurantInfo';
import { RESTUARNT_LIST_LOCAL_STORAGE_KEY } from '../constants';
import MOCK_DATA from '../data/MockData.json';

export const getSavedRestaurantList = (): RestaurantInfo[] => {
  return JSON.parse(localStorage.getItem(RESTUARNT_LIST_LOCAL_STORAGE_KEY) || '[]');
};

export const hasSavedRestaurantList = () => {
  const restaurantList: RestaurantInfo[] = getSavedRestaurantList();

  return restaurantList && restaurantList.length > 0;
};

export const saveRestaurantList = (list = MOCK_DATA.restaurantList as RestaurantInfo[]) => {
  localStorage.setItem(RESTUARNT_LIST_LOCAL_STORAGE_KEY, JSON.stringify(list));
};
