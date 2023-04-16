import { Restaurant } from '../@types/type';
import { CATEGORIES, SORT_OPTIONS } from '../constants';

import asian from '../asset/category-asian.png';
import chinese from '../asset/category-chinese.png';
import korean from '../asset/category-korean.png';
import japanese from '../asset/category-japanese.png';
import western from '../asset/category-western.png';
import etc from '../asset/category-etc.png';

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

  filter: (restaurants: Restaurant[], category: string): Restaurant[] => {
    if (category === CATEGORIES.ALL) return restaurants;
    return restaurants.filter((restaurant) => restaurant.category === category);
  },

  sort: (restaurants: Restaurant[], type: string): Restaurant[] => {
    if (type === SORT_OPTIONS.NAME) return restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
    return [...restaurants].sort((a, b) => (a.distanceByMinutes > b.distanceByMinutes ? 1 : -1));
  },
};

export default restaurant;
