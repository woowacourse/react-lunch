import { useMemo, useState } from 'react';
import type Filter from '../types/Filter';
import type Restaurant from '../types/Restaurant';

const useFilteredRestaurants = (restaurants: Restaurant[]) => {
  const [sortFilter, setSortFilter] = useState<Filter<Restaurant> | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<Filter<Restaurant> | null>(null);

  const filteredRestaurants = useMemo(() => {
    /* eslint-disable no-shadow */
    const filters = [sortFilter, categoryFilter];

    const nonNullFilters = (filters: Array<Filter<Restaurant> | null>): Array<Filter<Restaurant>> =>
      filters.filter((filter): filter is Filter<Restaurant> => filter !== null);

    return nonNullFilters(filters).reduce(
      (prevRestaurants, filter) => filter(prevRestaurants),
      restaurants.slice(),
    );
  }, [restaurants, sortFilter, categoryFilter]);

  return { filteredRestaurants, setSortFilter, setCategoryFilter };
};

export default useFilteredRestaurants;
