import { useState } from 'react';
import { db } from '../db/restaurants';
import { Restaurant, CategoryOption, SortOption } from '../types';
import { CATEGORY, SORTING } from '../constants';

const allRestaurants = db.getRestaurants();

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(allRestaurants);
  const [category, setCategory] = useState<CategoryOption>(CATEGORY.ALL);
  const [sorting, setSorting] = useState<SortOption>(SORTING.DISTANCE);
  const [clickedRestaurant, setClickedRestaurnt] = useState<Restaurant | null>(
    null
  );

  function handleCategory(category: CategoryOption) {
    setCategory(category);
    if (category === CATEGORY.ALL) return setRestaurants(allRestaurants);

    const categorizeddRestaurants = allRestaurants.filter(
      (restaurant) => restaurant.category === category
    );
    setRestaurants(categorizeddRestaurants);
  }

  function handleSorting(sorting: SortOption) {
    setSorting(sorting);
    if (sorting === SORTING.NAME) {
      const sortedRestaurants = allRestaurants.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setRestaurants(sortedRestaurants);
      return;
    }

    const sortedRestaurants = allRestaurants.sort(
      (a, b) => a.distance - b.distance
    );
    setRestaurants(sortedRestaurants);
  }

  function handleRestaurantClick(clickedRestaurantId: Restaurant['id']) {
    const clickedRestaurant = allRestaurants.find(
      (restaurant) => restaurant.id === clickedRestaurantId
    );
    if (clickedRestaurant) setClickedRestaurnt(clickedRestaurant);
  }

  return {
    values: { restaurants, category, sorting, clickedRestaurant },
    handlers: {
      handleCategory,
      handleSorting,
      handleRestaurantClick,
    },
  };
}
