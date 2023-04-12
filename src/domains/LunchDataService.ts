import { Restaurant, Criterion, Category, LunchDataServiceType, All } from '../types';
import { CATEGORY, CRITERION, LOCAL_STORAGE_KEY } from '../constants';
import restaurants from '../initialData/restaurants.json';

const LunchDataService: LunchDataServiceType = {
  restaurants: [],

  setInitialRestaurants() {
    const isEmpty = localStorage.getItem(LOCAL_STORAGE_KEY) === null;

    if (!isEmpty) return;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(restaurants));
  },

  filterBy(category: Category | All): Restaurant[] {
    if (category === CATEGORY.total) return [...this.restaurants];

    return this.restaurants.filter((restaurant) => restaurant.category === category);
  },

  sortBy(criterion: Criterion, restaurants: Restaurant[]): Restaurant[] {
    if (criterion === CRITERION.name) {
      return [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
    }

    return [...restaurants].sort((a, b) => a.distance - b.distance);
  },

  filterAndSort(category: Category | All, criterion: Criterion): Restaurant[] {
    const filteredRestaurants = this.filterBy(category);
    return this.sortBy(criterion, filteredRestaurants);
  },

  getRestaurant(id: string): Restaurant {
    const restaurant = this.restaurants.filter((restaurant) => restaurant.id === Number(id))[0];
    return restaurant;
  },

  getRestaurants(category: Category | All, criterion: Criterion) {
    const restaurantsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!restaurantsJSON) return [];

    this.restaurants = JSON.parse(restaurantsJSON);
    return this.filterAndSort(category, criterion);
  },

  getProcessedRestaurants(category: Category | All, criterion: Criterion) {
    return this.filterAndSort(category, criterion);
  },
};

export default LunchDataService;
