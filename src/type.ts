export type SortOption = 'name' | 'distance';

export type CategoryOption =
  | '한식'
  | '중식'
  | '일식'
  | '아시안'
  | '양식'
  | '기타'
  | '전체';

export type Category = Exclude<CategoryOption, '전체'>;

export type Distance = 5 | 10 | 15 | 20 | 30;

export interface Restaurant {
  id: string;
  category: Category;
  name: string;
  distance: Distance;
  description: string;
  link?: string;
}

export interface RestaurantProps {
  info: Restaurant;
}

export interface Option<T> {
  value: T;
  text: string;
}
