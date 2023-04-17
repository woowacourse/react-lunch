import { restaurantItemsKey } from '../constants';
import { Restaurant } from './../types';
import data from '../data/mockData.json';

const db = {
  isRestaurantItemsExist() {
    return localStorage.getItem(restaurantItemsKey) !== null;
  },

  setOriginRestaurantData(restaurants: Restaurant[]) {
    localStorage.setItem(restaurantItemsKey, JSON.stringify(restaurants));
  },

  getOriginRestaurantData(): Restaurant[] {
    if (this.isRestaurantItemsExist()) {
      return JSON.parse(localStorage.getItem(restaurantItemsKey) || '');
    }
    const mockData = data.items as Restaurant[];
    this.setOriginRestaurantData(mockData);
    return mockData;
  },
};

export { db };
