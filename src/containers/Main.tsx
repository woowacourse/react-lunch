import { useState } from 'react';
import RestaurantList from './RestaurantList';
import { filterByCategory, getRestaurants, sortBy } from '../domain/restaurant';
import type { Category, SortBy } from '../types/Restaurant';
import { MemoizedFilterContainer } from './FilterContainer';

function Main() {
  const [category, setCategory] = useState<Category>('전체');
  const [sort, setSort] = useState<SortBy>('이름순');

  const restaurants = getRestaurants();
  const filtered = filterByCategory(restaurants, category);
  const filteredAndSorted = sortBy(filtered, sort);

  return (
    <>
      <MemoizedFilterContainer setCategory={setCategory} setSort={setSort} />
      <RestaurantList restaurants={filteredAndSorted} />
    </>
  );
}

export default Main;
