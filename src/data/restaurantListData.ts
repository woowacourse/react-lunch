import { Restaurant } from '../types';
import { getLocalStorage } from '../utils/localStorage';
import { validateCategory } from '../utils/validator';
import mockData from './mockRestaurantData.json';

const getRestaurantListData = () => {
  const restaurantListData: Restaurant[] = getLocalStorage() ?? mockData.restaurantList;

  return restaurantListData.map<Restaurant>((restaurant) => ({
    ...restaurant,
    category: validateCategory(restaurant.category),
  }));
};

export { getRestaurantListData };
