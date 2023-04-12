import { ReactNode } from 'react';
import { RESTAURANT_CATEGORY, RESTAURANT_CATEGORY_OPTION, SORT_BY } from '../constants';

export type Category = typeof RESTAURANT_CATEGORY[number];
export type SortBy = typeof SORT_BY[number];

type Options = typeof SORT_BY | typeof RESTAURANT_CATEGORY_OPTION;

export interface SelectProps {
  attributes: {
    id: string;
    name: string;
    className: string;
  };
  options: Options;
  onChange: CallableFunction;
}

export interface Restaurant {
  category: Category;
  name: string;
  distance: number;
  description?: string;
  link?: string;
  id: number;
}

export interface FilterSectionProps {
  onChange: CallableFunction;
}

export interface FilterSectionState {
  category: string;
  sortBy: string;
}

export interface State {
  restaurantList: Restaurant[];
  currentRestaurantList: Restaurant[];
  selectedRestaurant: Restaurant | null;
}

export type FilterOption = Record<'category' | 'sortBy', string>;
