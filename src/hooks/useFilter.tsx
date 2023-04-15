import { useState } from 'react';
import { Category, Restaurant, SortingType } from '../types/restaurant';

interface FilterState {
  category: Category | '전체';
  sortingType: SortingType;
}

interface SetFunction {
  setCategory: (category: FilterState['category']) => void;
  setSortingType: (sortingType: SortingType) => void;
}

export const useRestaurantFilter = (initialData: Restaurant[]): [Restaurant[], SetFunction] => {
  const [filterOptions, setFilterOptions] = useState<FilterState>({
    category: '전체',
    sortingType: '이름순',
  });

  const setCategory: SetFunction['setCategory'] = (category) => {
    setFilterOptions({
      ...filterOptions,
      category,
    });
  };

  const setSortingType: SetFunction['setSortingType'] = (sortingType) => {
    setFilterOptions({
      ...filterOptions,
      sortingType,
    });
  };

  const getFilteredRestaurants = () => {
    const sortKey = filterOptions.sortingType === '이름순' ? 'name' : 'distance';

    const restaurants = initialData.filter(
      (restaurant: Restaurant) =>
        filterOptions.category === '전체' || restaurant.category === filterOptions.category
    );

    return restaurants.sort((a: Restaurant, b: Restaurant) => (a[sortKey] > b[sortKey] ? 1 : -1));
  };

  return [getFilteredRestaurants(), { setCategory, setSortingType }];
};
