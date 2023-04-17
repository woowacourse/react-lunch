import {
  CATEGORY_ALL,
  BY_DISTANCE,
  BY_NAME,
  CATEGORY_LIST,
} from './../constants/restaurants';
export type Category = (typeof CATEGORY_LIST)[number];

export interface Restaurant {
  id: number;
  title: string;
  category: Category;
  detail: string;
  distance: number;
  link: string;
}

export type CategoryFilter = typeof CATEGORY_ALL | Category;
export type AlignFilter = typeof BY_DISTANCE | typeof BY_NAME;

export interface FilterOptions {
  category: CategoryFilter;
  align: AlignFilter;
}
