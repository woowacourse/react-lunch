import { useEffect, useRef, useState } from 'react';
import { Category, Restaurant, Sort } from '../types/Restaurant';

const sortRestaurants = (restaurants: Restaurant[], sortBy: Sort) => [...restaurants].sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
const filterRestaurants = (restaurants: Restaurant[], categorizeBy: Category) => [...restaurants].filter((restaurant) => categorizeBy === 'all' ? true : restaurant.category === categorizeBy);

const defaultOptions = {
  category: 'all' as Category,
  sort: 'name' as Sort,
}

const useRestaurant = (initRestaurants: Restaurant[]) => {
  const restaurantsRef = useRef(sortRestaurants(initRestaurants, defaultOptions.sort));

  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsRef.current);
  const [sort, setSort] = useState<Sort>(defaultOptions.sort);
  const [category, setCategory] = useState<Category>(defaultOptions.category);

  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as Sort);
  }

  const updateCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  }

  useEffect(() => {
    restaurantsRef.current = sortRestaurants(restaurants, sort);
    const sortedRestaurants = sortRestaurants(restaurants, sort);
    setRestaurants(sortedRestaurants);
  }, [sort]);

  useEffect(() => {
    const filteredRestaurants = filterRestaurants(restaurantsRef.current, category);
    setRestaurants(filteredRestaurants);
  }, [category]);

  return {
    restaurants, updateSort, updateCategory,
  };
};

export default useRestaurant;
