import { useContext } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import type Filter from '../types/Filter';
import type Restaurant from '../types/Restaurant';

const useRestaurants = () => {
  const { restaurants, sortFilter, setSortFilter, categoryFilter, setCategoryFilter } =
    useContext(RestaurantContext);

  const filters = [sortFilter, categoryFilter].filter(
    (filter): filter is Filter<Restaurant> => filter !== null,
  );
  const filteredRestaurants = filters.reduce(
    (_restaurants, filter) => filter(_restaurants),
    restaurants.slice(),
  );

  return {
    restaurants,
    filteredRestaurants,
    sortFilter,
    setSortFilter,
    categoryFilter,
    setCategoryFilter,
  };
};

export default useRestaurants;
