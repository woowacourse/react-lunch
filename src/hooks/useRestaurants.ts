import { useContext } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';

const useRestaurants = () => {
  const { restaurants, sortFilter, setSortFilter, categoryFilter, setCategoryFilter } =
    useContext(RestaurantContext);

  const filteredRestaurants = [sortFilter, categoryFilter].reduce(
    (_restaurants, filter) => (filter === null ? [] : filter(_restaurants)),
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
