import { Categories, Restaurant, SortOptions } from '../@types/type';
import asian from '../asset/category-asian.png';
import chinese from '../asset/category-chinese.png';
import etc from '../asset/category-etc.png';
import japanese from '../asset/category-japanese.png';
import korean from '../asset/category-korean.png';
import western from '../asset/category-western.png';
import { CATEGORIES, SORT_OPTIONS } from '../constants';

const restaurant = {
  categoryIcon: {
    [CATEGORIES.ALL]: 'all',
    [CATEGORIES.KOREAN]: korean,
    [CATEGORIES.CHINESE]: chinese,
    [CATEGORIES.JAPANESE]: japanese,
    [CATEGORIES.WESTERN]: western,
    [CATEGORIES.ASIAN]: asian,
    [CATEGORIES.ETC]: etc,
  },

  filtering: (category: Categories) => {
    return (restaurants: Restaurant[]): Restaurant[] => {
      if (category === CATEGORIES.ALL) return restaurants;
      return restaurants.filter((restaurant) => restaurant.category === category);
    };
  },

  sorting: (option: SortOptions) => {
    return (restaurants: Restaurant[]): Restaurant[] => {
      if (option === SORT_OPTIONS.NAME) return restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
      return restaurants.sort((a, b) =>
        // 거리가 같다면 이름순으로 정렬한다.
        a.distanceByMinutes - b.distanceByMinutes === 0
          ? a.name > b.name
            ? 1
            : -1
          : a.distanceByMinutes > b.distanceByMinutes
          ? 1
          : -1,
      );
    };
  },
};

export default restaurant;
