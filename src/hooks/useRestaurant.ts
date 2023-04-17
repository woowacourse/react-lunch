import { useState, useEffect } from 'react';
import type { Restaurant } from '../types';
import type { RestaurantCategoryFilterOption, RestaurantSortOption } from '../RestaurantUtils';
import {
  getFilteredRestaurantsByCategory,
  getSortedRestaurants,
  getRestaurantById,
} from '../RestaurantUtils';
import mockData from '../mockData.json';

type FilterRequestType = {
  filterOption?: RestaurantCategoryFilterOption;
  sortOption?: RestaurantSortOption;
};

const emptyRestaurant: Restaurant = {
  id: -1,
  category: '한식',
  name: '',
  distance: '5',
  description: '',
  link: '',
};

const useRestaurant = (initialRestaurants: Restaurant[] = mockData as Restaurant[]) => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [filters, setFilters] = useState<FilterRequestType>({
    sortOption: 'name',
    filterOption: '전체',
  });
  const [restaurantInfo, setRestaurantInfo] = useState<Restaurant>(emptyRestaurant);

  const changeRestaurantFilterOption = (filterOption: RestaurantCategoryFilterOption) => {
    applyRestaurantByFilters({ ...filters, filterOption });
  };

  const changeRestaurantSortOption = (sortOption: RestaurantSortOption) => {
    applyRestaurantByFilters({ ...filters, sortOption });
  };

  const applyRestaurantByFilters = (newFilter: FilterRequestType) => {
    const { filterOption, sortOption } = newFilter;

    const filteredRestaurants = filterOption
      ? getFilteredRestaurantsByCategory(initialRestaurants, filterOption)
      : initialRestaurants;

    const sortedRestaurants = sortOption
      ? getSortedRestaurants(filteredRestaurants, sortOption)
      : filteredRestaurants;

    setRestaurants(sortedRestaurants);
    setFilters(newFilter);
  };

  const setRestaurantInfoForModal = (restaurantId: number) => {
    const targetRestaurant = getRestaurantById(restaurants, restaurantId);

    setRestaurantInfo(targetRestaurant);
  };

  useEffect(() => {
    applyRestaurantByFilters({ sortOption: 'name', filterOption: '전체' });
  }, []);

  return {
    restaurants,
    restaurantInfo,
    changeRestaurantFilterOption,
    changeRestaurantSortOption,
    setRestaurantInfoForModal,
  };
};

export default useRestaurant;
