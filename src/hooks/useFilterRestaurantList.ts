import type { Restaurant } from '../util/type';
import useRestaurantList from './useRestaurantList';
import { pipe } from '../util/util';

const filterByCategory = (restaurantList, category): Restaurant[] => {
  if (category === '전체') return restaurantList;
  return restaurantList.filter(
    (restaurant) => restaurant.category === category
  );
};

const filterBySort = (restaurantList, sorting): Restaurant[] => {
  return restaurantList.sort((firstElement, secondElement) => {
    if (sorting === 'name') {
      return firstElement.title.localeCompare(secondElement.title);
    }
    if (sorting === 'estimateTime') {
      return firstElement.estimateTime - secondElement.estimateTime;
    }
    return 0;
  });
};

const useFilterRestaurantList = (category, sorting) => {
  const handleRestaurant = (restaurantList) => {
    const result = pipe(filterByCategory, filterBySort)(restaurantList, [
      category,
      sorting,
    ]);
    return result;
  };

  const filteredRestaurantList = useRestaurantList(
    'restaurantList',
    [],
    handleRestaurant
  );

  return filteredRestaurantList;
};

export default useFilterRestaurantList;
