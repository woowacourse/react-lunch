import { Restaurant, RestaurantDataServiceType } from '../types';
import { LOCAL_STORAGE_KEY } from '../constants';
import restaurants from '../initialData/restaurants.json';

const RestaurantDataService: RestaurantDataServiceType = {
  restaurants: [],

  setInitialRestaurants() {
    const isEmpty = localStorage.getItem(LOCAL_STORAGE_KEY) === null;

    if (!isEmpty) return;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(restaurants));
  },

  getRestaurant(id: string): Restaurant {
    const restaurant = this.restaurants.filter((restaurant) => restaurant.id === Number(id))[0];
    return restaurant;
  },

  getRestaurants() {
    const restaurantsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!restaurantsJSON) return [];

    this.restaurants = JSON.parse(restaurantsJSON);
    return this.restaurants;
  },
};

export default RestaurantDataService;
