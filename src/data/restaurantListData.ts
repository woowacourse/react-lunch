import { Restaurant } from '../types';
import { getLocalStorage } from '../utils/localStorage';
import { validateCategory } from '../validations';
import mockData from './mockRestaurantData.json';

export const getRestaurantListData = () => {
  const restaurantListData: Restaurant[] = getLocalStorage() ?? mockData.restaurantList;

  return restaurantListData.map<Restaurant>((restaurant) => ({
    ...restaurant,
    category: validateCategory(restaurant.category),
  }));
};
