import { AlignFilter, CategoryFilter, Restaurant } from '../types/restaurants';

export const filterBy = (
  categoryFilter: CategoryFilter,
  restaurantList: Restaurant[]
) => {
  if (categoryFilter === '전체') return restaurantList;

  return restaurantList.filter(({ category }) => category === categoryFilter);
};

export const alignBy = (
  alignFilter: AlignFilter,
  restaurantList: Restaurant[]
) => {
  switch (alignFilter) {
    case '거리순':
      return restaurantList.sort((prev, next) => prev.distance - next.distance);

    case '이름순':
    default:
      return restaurantList.sort((prev, next) =>
        prev.title > next.title ? 1 : -1
      );
  }
};
