import { useState } from 'react';
import Select from './Select';
import RestaurantList from './RestaurantList';
import { filterByCategory, getRestaurants, sortBy } from '../utils/restaurant';
import type { Category, SortBy } from '../types/Restaurant';

function Main() {
  const [category, setCategory] = useState<Category>('전체');
  const [sort, setSort] = useState<SortBy>('이름순');

  const restaurants = getRestaurants();
  const filtered = filterByCategory(restaurants, category);
  const filteredAndSorted = sortBy(filtered, sort);

  return (
    <>
      <Select setCategory={setCategory} setSort={setSort} />
      <RestaurantList restaurants={filteredAndSorted} />
    </>
  );
}

export default Main;
