import fetch from 'node-fetch';
import { RestaurantInfo } from '../types/restaurantInfo';
import { KEY } from '../constants';

export const fetchRestaurantListJson = async (): Promise<RestaurantInfo[]> => {
  const data = await fetch(new URL('/data/MockData.json', window.location.href), { method: 'GET' })
    .then((res) => res.json())
    .then((data) => data.restaurantList);

  return data;
};

export const getSavedRestaurantList = (): RestaurantInfo[] => {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
};

export const hasSavedRestaurantList = () => {
  const restaurantList: RestaurantInfo[] = getSavedRestaurantList();

  return restaurantList && restaurantList.length > 0;
};

export const saveNewRestaurantList = async () => {
  const restaurantList = await fetchRestaurantListJson();

  localStorage.setItem(KEY, JSON.stringify(restaurantList));
};
