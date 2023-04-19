import { RESTAURANT_CATEGORY, RESTAURANT_CATEGORY_OPTION, SORT_BY } from '../constants';

export type Category = (typeof RESTAURANT_CATEGORY)[number];
export type SortBy = (typeof SORT_BY)[number];

export type Options = typeof SORT_BY | typeof RESTAURANT_CATEGORY_OPTION;
export type FilterOption = Record<'category' | 'sortBy', string>;

export interface Restaurant {
  category: Category;
  name: string;
  distance: number;
  description?: string;
  link?: string;
  id: number;
}
