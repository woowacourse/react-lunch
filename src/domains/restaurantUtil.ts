import { Restaurant } from '../types';

const filterRestaurant = (restaurantList: Restaurant[], filter: string) => {
  if (filter === '전체') return restaurantList;

  return restaurantList.filter((restaurant) => restaurant.category === filter);
};

const sortByName = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.name.localeCompare(b.name));
};

const sortByDistance = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.distance - b.distance);
};

// TODO: 상수화
const sortRestaurant = (restaurantList: Restaurant[], sortBy: string) => {
  if (sortBy === '이름순') return sortByName(restaurantList);

  return sortByDistance(restaurantList);
};

// TODO: 상수화
export const filterAndSortRestaurantList = (
  restaurantList: Restaurant[],
  filter: string = '전체',
  sortBy: string = '이름순'
) => {
  const filteredRestaurantList = filterRestaurant([...restaurantList], filter);

  return sortRestaurant([...filteredRestaurantList], sortBy);
};
