import { CategoryFilters, SortFilters } from 'contants';

export type Distance = 5 | 10 | 15 | 20 | 30;
export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: Distance;
  description?: string;
  link?: string;
}

export type CategoryFilter = typeof CategoryFilters[keyof typeof CategoryFilters];
export type Category = Exclude<CategoryFilter, typeof CategoryFilters.all>;

export type SortFilter = typeof SortFilters[keyof typeof SortFilters];
