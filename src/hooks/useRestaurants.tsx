import { useEffect, useState } from 'react';
import { Category, Restaurant, Sort } from '../types/Restaurant';

const sortRestaurants = (restaurants: Restaurant[], sortBy: Sort) => [...restaurants].sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
const filterRestaurants = (restaurants: Restaurant[], categorizeBy: Category) => [...restaurants].filter((restaurant) => categorizeBy === 'all' ? true : restaurant.category === categorizeBy);

const defaultOptions = {
  categorizeBy: 'all' as Category,
  sortBy: 'name' as Sort,
}

const useRestaurant = (initRestaurants: Restaurant[]) => {
  const restaurantsBackup = sortRestaurants(initRestaurants, defaultOptions.sortBy);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsBackup);
  const [sortBy, setSortBy] = useState<Sort>(defaultOptions.sortBy);
  const [categorizeBy, setCategorizeBy] = useState<Category>(defaultOptions.categorizeBy);

  const updateSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as Sort);
  }

  const updateCategorizeBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorizeBy(e.target.value as Category);
  }

  useEffect(() => {
    const sortedRestaurants = sortRestaurants(restaurants, sortBy);
    setRestaurants(sortedRestaurants);
  }, [sortBy]);

  useEffect(() => {
    console.log(categorizeBy);
    const filteredRestaurants = filterRestaurants(restaurantsBackup, categorizeBy);
    setRestaurants(filteredRestaurants);
  }, [categorizeBy]);

  return {
    restaurants,
    updateSortBy,
    updateCategorizeBy,
  };
};

export default useRestaurant;
