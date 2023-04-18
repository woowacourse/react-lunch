import { FoodCategory, RestaurantInfo } from '../../types/restaurantInfo';

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

export const sortRestaurants = (restaurants: RestaurantInfo[], sortMethod: string) => {
  if (sortMethod === '이름순') return sortByTitle(restaurants);
  if (sortMethod === '거리순') return sortByEstimatedTime(restaurants);
  return [...restaurants];
};

export const deleteTargetRestaurant = (restaurants: RestaurantInfo[], target: RestaurantInfo) => {
  return restaurants.filter((restaurant) => restaurant !== target);
};
