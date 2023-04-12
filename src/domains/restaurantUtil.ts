import { Restaurant } from '../types';

export const filterRestaurant = (restaurantList: Restaurant[], filter: string) => {
  if (filter === '전체') return restaurantList;

  return restaurantList.filter((restaurant) => restaurant.category === filter);
};

const sortByName = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.name.localeCompare(b.name));
};

const sortByDistance = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.distance - b.distance);
};

export const sortRestaurant = (restaurantList: Restaurant[], sortBy: string) => {
  if (sortBy === '이름순') return sortByName(restaurantList);

  return sortByDistance(restaurantList);
};
