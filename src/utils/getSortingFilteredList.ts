import type { Restaurant } from '../components/RestaurantItem/type';

const getSortingFilteredList = (category: string, sortOption: string, restaurantList: Restaurant[]) => {
  const filteredList =
    category === '전체' ? restaurantList : restaurantList.filter((restaurant) => restaurant.category === category);

  if (sortOption === '거리순') {
    return [...filteredList].sort((x, y) => Number(x.distance) - Number(y.distance));
  }
  if (sortOption === '이름순') {
    return [...filteredList].sort((x, y) => x.name.localeCompare(y.name));
  }

  return restaurantList;
};

export default getSortingFilteredList;
