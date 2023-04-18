import { useEffect, useState } from 'react';
import { restaurant, appState } from '../utils/interfaces';
import { SelectorCategory, SelectorFilter } from '../utils/types';

export function useRestaurantSorting(props: appState) {
  const { category, filter, wholeList } = props;
  const [sortedRestaurants, setSortedRestaurants] = useState<restaurant[]>(wholeList);
  const [currentCategory, setCurrentCategory] = useState<SelectorCategory>(category);
  const [currentFilter, setCurrentFilter] = useState<SelectorFilter>(filter);

  useEffect(() => {
    const sortedByCategory = sortingByCategory(currentCategory, wholeList);
    const sortedByFilter = sortingByFilter(currentFilter, sortedByCategory);
    setSortedRestaurants(sortedByFilter);
  }, [currentCategory, currentFilter]);

  return { sortedRestaurants, setCurrentCategory, setCurrentFilter };
}

function sortingByCategory(category: SelectorCategory, wholeList: Array<restaurant>) {
  if (category === '전체') {
    return wholeList;
  }

  return wholeList.filter(item => item.category === category);
}

function sortingByFilter(filter: SelectorFilter, wholeList: Array<restaurant>) {
  if (filter === '이름순') {
    return sortByName(wholeList);
  }

  return sortByDistance(wholeList);
}

function sortByName(restaurants: Array<restaurant>) {
  const nameSortedRestaurants = [...restaurants].sort((a, b) => {
    if (compareName(a, b) === 0) return compareDistance(a, b);

    return compareName(a, b);
  });

  return nameSortedRestaurants;
}

function sortByDistance(restaurants: Array<restaurant>) {
  const distanceSortedRestaurants = [...restaurants].sort((a, b) => {
    if (compareDistance(a, b) === 0) return compareName(a, b);

    return compareDistance(a, b);
  });

  return distanceSortedRestaurants;
}

function compareName(standard: restaurant, compare: restaurant) {
  return standard.name.localeCompare(compare.name);
}

function compareDistance(standard: restaurant, compare: restaurant) {
  return standard.distance - compare.distance;
}
