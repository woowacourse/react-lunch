export type Restaurant = {
  id: number;
  title: string;
  category: string;
  estimateTime: number;
  description: string;
  link?: string;
};

export type Category =
  | '전체'
  | '한식'
  | '중식'
  | '일식'
  | '양식'
  | '아시안'
  | '기타';

export type Sorting = 'name' | 'estimateTime';

export type SelectOption<T> = {
  value: T;
  textContent: string;
};

export type FilterOption = {
  category: Category;
  sorting: Sorting;
};
