import { useMemo } from 'react';
import type Restaurant from '../types/Restaurant';
import type Filter from '../types/Filter';

const useFilteredRestaurants = (
  restaurants: Restaurant[],
  sortFilter: Filter<Restaurant> | null,
  categoryFilter: Filter<Restaurant> | null,
) => {
  return useMemo(() => {
    const filters = [sortFilter, categoryFilter].filter(
      (filter): filter is Filter<Restaurant> => filter !== null,
    );

    return filters.reduce(
      (prevRestaurants, filter) => filter(prevRestaurants),
      restaurants.slice(),
    );
  }, [restaurants, sortFilter, categoryFilter]);
};

export default useFilteredRestaurants;
