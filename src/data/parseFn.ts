import { CategoryFilter, Restaurant, SortingFilter } from './../types/types';
import restaurants from '../data/mockData.json';

const typedRestaurants = restaurants as Restaurant[];

export const getSelectedRestaurantsList = (category: CategoryFilter, sortType: SortingFilter) => {
  return sortByType(sortType, filterByCategory(category, typedRestaurants));
};

const sortByType = (sortType: string, filteredByCategoryRestaurants: Restaurant[]): Restaurant[] => {
  if (sortType === '이름순') {
    return [...filteredByCategoryRestaurants].sort((a, b) => compareString(a.name, b.name));
  }

  return [...filteredByCategoryRestaurants].sort((a, b) => a.distance - b.distance);
};

const filterByCategory = (category: string, restaurants: Restaurant[]): Restaurant[] => {
  if (category === '전체') return restaurants;

  return restaurants.filter(restaurant => restaurant.category === category);
};

const compareString = (a: string, b: string): number => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

export const getSelectedRestaurant = (id?: number) => {
  return typedRestaurants.find(restaurant => id === restaurant.id) || restaurants[0];
};
