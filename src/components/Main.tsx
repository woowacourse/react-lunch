import { useState } from 'react';
import { RestaurantList } from './RestaurantList';
import { FilterBar } from './FilterBar';
import { Category } from '../types/RestaurantDetail';
import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';

export const Main = () => {
  const [category, setCategory] = useState<Category>(RESTAURANT_CATEGORY.all);
  const [sortOption, setSortOption] = useState(SORTING_OPTION.name);

  const handleCategory: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setCategory(event.target.value as Category);
  };

  const handleSort: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <main>
      <FilterBar
        onChangeCategory={handleCategory}
        onChangeSort={handleSort}
      ></FilterBar>
      <RestaurantList category={category} sort={sortOption}></RestaurantList>
    </main>
  );
};
