import { RESTAURANT_CATEGORY, RESTAURANT_CATEGORY_OPTION, SORT_BY } from '../constants';

type Category = typeof RESTAURANT_CATEGORY[number];
type SortBy = typeof SORT_BY[number];

type Options = typeof SORT_BY | typeof RESTAURANT_CATEGORY_OPTION;
type FilterOption = Record<'category' | 'sortBy', string>;

interface Restaurant {
  category: Category;
  name: string;
  distance: number;
  description?: string;
  link?: string;
  id: number;
}

export type { Category, SortBy, Options, FilterOption, Restaurant };
