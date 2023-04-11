import { FoodCategory, RestaurantInfo } from '../types/restaurantInfo';

export const filterFoodCategory = (restaurants: RestaurantInfo[], category: FoodCategory) => {
  if (category === '전체') return [...restaurants];

  return restaurants.filter((restaurant) => restaurant.category === category);
};

export const sortByTitle = (restaurants: RestaurantInfo[]) => {
  return [...restaurants].sort((infoA, infoB) => (infoA.title <= infoB.title ? -1 : 1));
};

export const sortByEstimatedTime = (restaurants: RestaurantInfo[]) => {
  return [...restaurants].sort((infoA, infoB) => infoA.estimatedTime - infoB.estimatedTime);
};
