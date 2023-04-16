import { Restaurant } from 'types';

const key = 'restaurantItems';

const db = {
  isRestaurantItemsExist() {
    return localStorage.getItem(key) !== null;
  },

  setRestaurants(restaurants: Restaurant[]) {
    localStorage.setItem(key, JSON.stringify(restaurants));
  },

  getRestaurants(): Restaurant[] {
    return JSON.parse(localStorage.getItem(key) || '');
  },
};

export { db };
