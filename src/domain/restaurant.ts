import { Restaurant } from '../@types/type';
import { CATEGORIES, SORT_OPTIONS } from '../constants';

const restaurant = {
  filter: (restaurants: Restaurant[], category: string): Restaurant[] => {
    if (category === CATEGORIES.ALL) return restaurants;
    return restaurants.filter((restaurant) => restaurant.category === category);
  },

  sort: (restaurants: Restaurant[], type: string): Restaurant[] => {
    if (type === SORT_OPTIONS.NAME) return restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
    return restaurants.sort((a, b) => (a.distanceByMinutes > b.distanceByMinutes ? 1 : -1));
  },
};

export default restaurant;
