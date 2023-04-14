import { restaurant } from '../utils/interfaces';
import { selectorCategory, selectorFilter } from '../utils/types';

export function sortingByCategory(category: selectorCategory, wholeList: Array<restaurant>) {
  if (category === '전체') {
    return wholeList;
  }

  return wholeList.filter(item => item.category === category);
}

export function sortingByFilter(filter: selectorFilter, wholeList: Array<restaurant>) {
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
