import fetch from 'node-fetch';
import { RestaurantInfo } from '../types/restaurantInfo';
import { KEY } from '../constants';

export const fetchRestaurantListJson = async (): Promise<RestaurantInfo[]> => {
  const data = await fetch('http://localhost:3000/data/MockData.json', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => data.restaurantList);

  return data;
};

export const hasSavedRestaurantList = () => {
  const restaurantList: RestaurantInfo[] = JSON.parse(localStorage.getItem(KEY) || '[]');

  return restaurantList && restaurantList.length > 0;
};

export const saveNewRestaurantList = async () => {
  const restaurantList = await fetchRestaurantListJson();

  localStorage.setItem(KEY, JSON.stringify(restaurantList));
};
