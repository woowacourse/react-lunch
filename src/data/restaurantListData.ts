import { Restaurant } from '../types';
import { validateCategory } from '../utils/validator';
import mockData from './mockRestaurantData.json';

const getRestaurantListData = () => {
  return mockData.restaurantList.map<Restaurant>((restaurant) => ({
    ...restaurant,
    category: validateCategory(restaurant.category),
  }));
};

export { getRestaurantListData };
