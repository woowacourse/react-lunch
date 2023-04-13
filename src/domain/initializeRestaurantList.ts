import { RestaurantInfo } from '../types/restaurantInfo';
import { KEY } from '../constants';
import MOCK_DATA from '../data/MockData.json';

export const getSavedRestaurantList = (): RestaurantInfo[] => {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
};

export const hasSavedRestaurantList = () => {
  const restaurantList: RestaurantInfo[] = getSavedRestaurantList();

  return restaurantList && restaurantList.length > 0;
};

export const saveNewRestaurantList = async () => {
  const { restaurantList } = MOCK_DATA;

  localStorage.setItem(KEY, JSON.stringify(restaurantList));
};
