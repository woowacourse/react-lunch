import { CATEGORY_ALL, BY_DISTANCE, BY_NAME } from './../constants/restaurants';
export type Category = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';

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
