import { CATEGORY_ALL } from './../constants/restaurants';
import { BY_DISTANCE, BY_NAME } from '../constants/restaurants';
import { AlignFilter, CategoryFilter, Restaurant } from '../types/restaurants';

export const filterBy = (
  categoryFilter: CategoryFilter,
  restaurantList: Restaurant[]
) => {
  if (categoryFilter === CATEGORY_ALL) return restaurantList;

  return restaurantList.filter(({ category }) => category === categoryFilter);
};

export const alignBy = (
  alignFilter: AlignFilter,
  restaurantList: Restaurant[]
) => {
  switch (alignFilter) {
    case BY_DISTANCE:
      return restaurantList.sort((prev, next) => prev.distance - next.distance);

    case BY_NAME:
    default:
      return restaurantList.sort((prev, next) =>
        prev.title > next.title ? 1 : -1
      );
  }
};
