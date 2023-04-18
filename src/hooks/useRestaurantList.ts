import { useState, useEffect } from 'react';
import { Restaurant } from '../@types/type';
import {
  CATEGORIES,
  DEFAULT_CATEGORY_OPTION,
  DEFAULT_SORT_OPTION,
  LOCAL_STORAGE_KEY,
  SORT_OPTIONS,
} from '../constants';
import mockData from '../mockData.json';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const useRestaurantList = () => {
  const [initialRestaurantList, setInitialRestaurantList] = useState(mockData as Restaurant[]);

  useEffect(() => {
    const savedRestaurants = getLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT);

    if (savedRestaurants) {
      setInitialRestaurantList(savedRestaurants);
    } else setLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT, mockData);
  }, []);

  const [findOption, setFindOption] = useState({
    filterOption: DEFAULT_CATEGORY_OPTION,
    sortOption: DEFAULT_SORT_OPTION,
  });

  const filter = () => {
    const { filterOption } = findOption;

    if (filterOption === CATEGORIES.ALL) return initialRestaurantList;

    return initialRestaurantList.filter((restaurant) => restaurant.category === filterOption);
  };

  const sort = (restaurantList: Restaurant[]) => {
    const { sortOption } = findOption;

    if (sortOption === SORT_OPTIONS.NAME) return [...restaurantList].sort((a, b) => (a.name > b.name ? 1 : -1));

    return [...restaurantList].sort((a, b) => (a.distanceByMinutes > b.distanceByMinutes ? 1 : -1));
  };

  const setFindOptions = (key: string, newOption: string) => {
    setFindOption((state) => ({
      ...state,
      [key]: newOption,
    }));
  };

  const restaurantList = sort(filter());

  return { restaurantList, setFindOptions };
};

export default useRestaurantList;
