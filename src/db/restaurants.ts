import { Restaurant } from './../types';

const db = {
  isRestaurantItemsExist() {
    return localStorage.getItem('restaurantItems') !== null;
  },

  setRestaurants(restaurants: Restaurant[]) {
    localStorage.setItem('restaurantItems', JSON.stringify(restaurants));
  },

  getRestaurants(): Restaurant[] {
    return JSON.parse(localStorage.getItem('restaurantItems') || '');
  },
};

export { db };
