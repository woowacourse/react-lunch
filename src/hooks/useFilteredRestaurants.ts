import { useMemo, useState } from 'react';
import type Filter from '../types/Filter';
import type Restaurant from '../types/Restaurant';

const nonNullFilters = (
  inputFilters: Array<Filter<Restaurant> | null>,
): Array<Filter<Restaurant>> =>
  inputFilters.filter((filter): filter is Filter<Restaurant> => filter !== null);

const useFilteredRestaurants = (restaurants: Restaurant[]) => {
  const [sortFilter, setSortFilter] = useState<Filter<Restaurant> | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<Filter<Restaurant> | null>(null);

  const filteredRestaurants = useMemo(() => {
    const filters = [sortFilter, categoryFilter];

    return nonNullFilters(filters).reduce(
      (prevRestaurants, filter) => filter(prevRestaurants),
      restaurants.slice(),
    );
  }, [restaurants, sortFilter, categoryFilter]);

  return { filteredRestaurants, setSortFilter, setCategoryFilter };
};

export default useFilteredRestaurants;
