import { useState } from 'react';
import { DEFAULT_OPTIONS } from '../constants';
import { FilterOption } from '../types';
import { filterAndSortRestaurantList } from '../utils/restaurantUtil';
import { restaurantList } from '../data/restaurantListData';

export const useFilterSection = (setCurrentRestaurantList: CallableFunction) => {
  const [currentOption, setCurrentOption] = useState<FilterOption>({
    category: DEFAULT_OPTIONS.CATEGORY,
    sortBy: DEFAULT_OPTIONS.SORT_BY,
  });

  const handleSelectChange = (selectedOption: FilterOption) => {
    const updatedOption = {
      ...currentOption,
      ...selectedOption,
    };

    setCurrentOption(updatedOption);
    setCurrentRestaurantList(filterAndSortRestaurantList(restaurantList, updatedOption));
  };

  return handleSelectChange;
};
