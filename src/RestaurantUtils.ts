import { Restaurant, RestaurantCategory } from '../src/types';

const restaurantSortOption = {
  name: 'name',
  distance: 'distance',
} as const;

export type RestaurantSortOption = keyof typeof restaurantSortOption;
export type RestaurantCategoryFilterOption = RestaurantCategory | '전체';

export const getFilteredRestaurantsByCategory = (
  restaurants: Restaurant[],
  category: RestaurantCategoryFilterOption
) => {
  if (category === '전체') return restaurants;

  return restaurants.filter((restaurant) => restaurant.category === category);
};

export const getSortedRestaurantsByName = (restaurants: Restaurant[]) => {
  const sortedRestaurants = restaurants.sort((restaurant1, restaurant2) => {
    return restaurant1.name.localeCompare(restaurant2.name);
  });

  return sortedRestaurants;
};

export const getSortedRestaurantsByDistance = (restaurants: Restaurant[]) => {
  const sortedRestaurants = restaurants.sort((restaurant1, restaurant2) => {
    return Number(restaurant1.distance) - Number(restaurant2.distance);
  });

  return sortedRestaurants;
};

const sortMethods: Record<RestaurantSortOption, (restaurants: Restaurant[]) => Restaurant[]> = {
  [restaurantSortOption.name]: getSortedRestaurantsByName,
  [restaurantSortOption.distance]: getSortedRestaurantsByDistance,
};

export const getSortedRestaurants = (restaurants: Restaurant[], sortOption: RestaurantSortOption) =>
  sortMethods[sortOption](restaurants);

export const getRestaurantById = (restaurants: Restaurant[], restaurantId: number) => {
  const targetRestaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
  if (!targetRestaurant) throw new Error('음식점 정보를 불러오는 데 실패했습니다.');

  return targetRestaurant;
};
