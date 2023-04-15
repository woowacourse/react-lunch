import { useState } from 'react';
import { Category, Restaurant, Sort } from '../types/Restaurant';

const useRestaurant = (initRestaurants: Restaurant[]) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(initRestaurants);
  const [sortBy, setSortBy] = useState<Sort>('name');
  const [categorizeBy, setCategorizeBy] = useState<Category>('all');

  const updateSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as Sort);
  }

  const updateCategorizeBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorizeBy(e.target.value as Category);
  }

  return {
    restaurants,
    setRestaurants,
    sortBy,
    setSortBy,
    categorizeBy,
    setCategorizeBy,
    updateSortBy,
    updateCategorizeBy,
  };
};

export default useRestaurant;
