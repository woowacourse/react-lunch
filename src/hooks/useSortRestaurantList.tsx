import { useEffect, useState } from 'react';
import { Restaurant } from '../utils/interfaces';
import { SelectorCategory, SelectorFilter } from '../utils/types';

interface Props {
  wholeList: Array<Restaurant>;
}

const sort = {
  sortByName: (restaurants: Array<Restaurant>) =>
    restaurants.sort((a, b) => (sort.compareName(a, b) ? sort.compareName(a, b) : sort.compareDistance(a, b))),

  sortByDistance: (restaurants: Array<Restaurant>) =>
    restaurants.sort((a, b) => (sort.compareDistance(a, b) ? sort.compareDistance(a, b) : sort.compareName(a, b))),

  compareName: (standard: Restaurant, compare: Restaurant) => standard.name.localeCompare(compare.name),

  compareDistance: (standard: Restaurant, compare: Restaurant) => standard.distance - compare.distance,
};

const sortFilterOrCategory = {
  sortingByCategory: (category: SelectorCategory, wholeList: Array<Restaurant>) => {
    if (category === '전체') {
      return wholeList;
    }

    return wholeList.filter(item => item.category === category);
  },

  sortingByFilter: (filter: SelectorFilter, wholeList: Array<Restaurant>) => {
    if (filter === '이름순') {
      return sort.sortByName(wholeList);
    }

    return sort.sortByDistance(wholeList);
  },
};

function useSortedRestaurantList({ wholeList }: Props) {
  const [sortedList, setSortedList] = useState<Array<Restaurant>>([]);
  const [category, setCategory] = useState<SelectorCategory>('전체');
  const [filter, setFilter] = useState<SelectorFilter>('이름순');

  useEffect(() => {
    const categorySortedList = sortFilterOrCategory.sortingByCategory(category, wholeList);
    const cateogrySortedAndFilterSortedList = sortFilterOrCategory.sortingByFilter(filter, categorySortedList);

    setSortedList(cateogrySortedAndFilterSortedList);
  }, [category, filter]);

  return { sortedList, setCategory, setFilter };
}

export default useSortedRestaurantList;
