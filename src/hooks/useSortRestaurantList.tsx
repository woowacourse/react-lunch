import { Restaurant } from '../utils/interfaces';
import { SelectorCategory, SelectorFilter } from '../utils/types';

interface Props {
  category: SelectorCategory;
  filter: SelectorFilter;
  restaurantList: Array<Restaurant>;
}

function useSortRestaurantList() {
  const sortingByCategory = (category: SelectorCategory, wholeList: Array<Restaurant>) =>
    category === '전체' ? wholeList : wholeList.filter(item => item.category === category);

  const sortingByFilter = (filter: SelectorFilter, wholeList: Array<Restaurant>) =>
    filter === '이름순' ? sortByName(wholeList) : sortByDistance(wholeList);

  const sortByName = (restaurants: Array<Restaurant>) =>
    [...restaurants].sort((a, b) => (compareName(a, b) ? compareName(a, b) : compareDistance(a, b)));

  const sortByDistance = (restaurants: Array<Restaurant>) =>
    [...restaurants].sort((a, b) => (compareDistance(a, b) ? compareDistance(a, b) : compareName(a, b)));

  const compareName = (standard: Restaurant, compare: Restaurant) => standard.name.localeCompare(compare.name);

  const compareDistance = (standard: Restaurant, compare: Restaurant) => standard.distance - compare.distance;

  const sortedRestaurantList = ({ category, filter, restaurantList }: Props) => {
    const categorySortedList = sortingByCategory(category, restaurantList);
    const cateogrySortedAndFilterSortedList = sortingByFilter(filter, categorySortedList);

    return cateogrySortedAndFilterSortedList;
  };

  return sortedRestaurantList;
}

export default useSortRestaurantList;
