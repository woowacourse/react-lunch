import { restaurantItemsKey } from '../constants';
import { Restaurant } from './../types';

const db = {
  isRestaurantItemsExist() {
    return localStorage.getItem(restaurantItemsKey) !== null;
  },

  setRestaurants(restaurants: Restaurant[]) {
    localStorage.setItem(restaurantItemsKey, JSON.stringify(restaurants));
  },

  getRestaurants(): Restaurant[] {
    if(this.isRestaurantItemsExist()) {}
    return JSON.parse(localStorage.getItem(restaurantItemsKey) || '');
  },
};

export { db };
