import { Category, Restaurant, SortingType } from '../types/restaurant';

const filterRestaurants = (
  restaurants: Restaurant[],
  category: Category | '전체',
  sortingType: SortingType
) => {
  const filteredRestaurants =
    category === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  const getSortingValue = (restaurant: Restaurant) => {
    return sortingType === '이름순' ? restaurant.name : restaurant.distance;
  };

  return filteredRestaurants.sort((a, b) => {
    const A = getSortingValue(a);
    const B = getSortingValue(b);
    if (A > B) return 1;
    if (A < B) return -1;
    return 0;
  });
};

export default filterRestaurants;
