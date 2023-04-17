import { useEffect, useState } from 'react';
import mockData from '../../../data/mockData.json';
import getSortingFilteredList from '../../../utils/getSortingFilteredList';
import type { Selector } from '../../../hooks/useSelector';
import type { Restaurant } from '../../RestaurantItem/type';

const mock = mockData.restaurantList as Restaurant[];

function useRestaurantList({ category, sortOption }: Selector) {
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>(mock);

  useEffect(() => {
    const resultList = getSortingFilteredList(category, sortOption, mock);

    setRestaurantList(resultList);
  }, [category, sortOption]);

  return restaurantList;
}

export default useRestaurantList;
