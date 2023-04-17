import { useState } from 'react';
import { Restaurant, CategoryOption, SortOption } from '../types';
import { CATEGORY, SORTING } from '../constants';
import { isCategoryOption, isSortOption } from '../utils';

import { db } from '../db/restaurants';

function filterByCategory(
  restaurants: Restaurant[],
  categoryOption: CategoryOption
): Restaurant[] {
  if (categoryOption === CATEGORY.ALL) return restaurants;
  return restaurants.filter(
    (restaurant) => restaurant.category === categoryOption
  );
}

function filterBySort(
  restaurants: Restaurant[],
  sortingOption: SortOption
): Restaurant[] {
  if (sortingOption === SORTING.NAME) {
    return restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return restaurants.sort((a, b) => a.distance - b.distance);
}

const originData = db.getOriginRestaurantData();
const allRestaurants = filterBySort(originData, SORTING.DISTANCE);

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(allRestaurants);
  const [category, setCategory] = useState<CategoryOption>(CATEGORY.ALL);
  const [sorting, setSorting] = useState<SortOption>(SORTING.DISTANCE);
  const [clickedRestaurant, setClickedRestaurnt] = useState<Restaurant | null>(
    null
  );

  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    if (isCategoryOption(e.target.value)) {
      const selectedCategory = e.target.value;
      const categorizedRestaurants = filterByCategory(
        originData,
        selectedCategory
      );
      const sortedRestaurants = filterBySort(categorizedRestaurants, sorting);
      setCategory(selectedCategory);
      setRestaurants(sortedRestaurants);
    }
  }

  function handleSorting(e: React.ChangeEvent<HTMLSelectElement>) {
    if (isSortOption(e.target.value)) {
      const selectedSorting = e.target.value;
      const sortedRestaurants = filterBySort(restaurants, selectedSorting);

      setSorting(selectedSorting);
      setRestaurants(sortedRestaurants);
    }
  }

  function handleRestaurantClick(clickedRestaurantId: Restaurant['id']) {
    const clickedRestaurant = originData.find(
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
