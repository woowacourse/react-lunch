import { Restaurant } from '../utils/interfaces';
import { SelectorCategory, SelectorFilter } from '../utils/types';

export function sortingByCategory(category: SelectorCategory, wholeList: Array<Restaurant>) {
  if (category === '전체') {
    return wholeList;
  }

  return wholeList.filter(item => item.category === category);
}

export function sortingByFilter(filter: SelectorFilter, wholeList: Array<Restaurant>) {
  if (filter === '이름순') {
    return sortByName(wholeList);
  }

  return sortByDistance(wholeList);
}

function sortByName(restaurants: Array<Restaurant>) {
  const nameSortedRestaurants = [...restaurants].sort((a, b) => {
    if (compareName(a, b) === 0) return compareDistance(a, b);

    return compareName(a, b);
  });

  return nameSortedRestaurants;
}

function sortByDistance(restaurants: Array<Restaurant>) {
  const distanceSortedRestaurants = [...restaurants].sort((a, b) => {
    if (compareDistance(a, b) === 0) return compareName(a, b);

    return compareDistance(a, b);
  });

  return distanceSortedRestaurants;
}

function compareName(standard: Restaurant, compare: Restaurant) {
  return standard.name.localeCompare(compare.name);
}

function compareDistance(standard: Restaurant, compare: Restaurant) {
  return standard.distance - compare.distance;
}
