import mockData from '../../data/mockData.json';
import { Restaurant, Sort, Category } from '../type';

const { restaurantList } = mockData as { restaurantList: Restaurant[] };

export const filterRestaurantList = (category: Category, sort: Sort) => {
  const filteredList =
    category === '전체'
      ? restaurantList
      : restaurantList.filter((restaurant) => restaurant.category === category);

  if (sort === '거리순') {
    return filteredList.sort((x, y) => Number(x.distance) - Number(y.distance));
  }

  return filteredList.sort((x, y) => x.name.localeCompare(y.name));
};

export const sortRestaurantList = (
  stateForRestaurantList: Restaurant[],
  sort: Sort
) =>
  sort === '거리순'
    ? stateForRestaurantList.sort(
        (x, y) => Number(x.distance) - Number(y.distance)
      )
    : stateForRestaurantList.sort((x, y) => x.name.localeCompare(y.name));
