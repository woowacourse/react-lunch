import { Restaurant, RestaurantCategory } from '../src/types';

const restaurantSortOption = {
  name: 'name',
  distance: 'distance',
} as const;

export type RestaurantSortOption = keyof typeof restaurantSortOption;
export type RestaurantCategoryFilterOption = RestaurantCategory | '전체';

export const getFilteredRestaurantsByCategory = (
  restaurants: Restaurant[],
  categoryFilterOption: RestaurantCategoryFilterOption
) => {
  if (categoryFilterOption === '전체') return restaurants;

  return restaurants.filter((restaurant) => restaurant.category === categoryFilterOption);
};

export const getSortedRestaurantsByName = (restaurants: Restaurant[]) => {
  return restaurants.sort((restaurant1, restaurant2) => {
    return restaurant1.name.localeCompare(restaurant2.name);
  });
};

export const getSortedRestaurantsByDistance = (restaurants: Restaurant[]) => {
  return restaurants.sort((restaurant1, restaurant2) => {
    return Number(restaurant1.distance) - Number(restaurant2.distance);
  });
};

const sortMethods: Record<RestaurantSortOption, (restaurants: Restaurant[]) => Restaurant[]> = {
  [restaurantSortOption.name]: getSortedRestaurantsByName,
  [restaurantSortOption.distance]: getSortedRestaurantsByDistance,
};

export const getSortedRestaurants = (restaurants: Restaurant[], sortOption: RestaurantSortOption) =>
  sortMethods[sortOption](restaurants);

export const getRestaurantById = (restaurants: Restaurant[], targetRestaurantId: number) => {
  const targetRestaurant = restaurants.find((restaurant) => restaurant.id === targetRestaurantId);
  if (!targetRestaurant) throw new Error('음식점 정보를 불러오는 데 실패했습니다.');

  return targetRestaurant;
};
