export const CATEGORY = {
  전체: 'all',
  한식: 'korean',
  중식: 'chinese',
  일식: 'japanese',
  양식: 'western',
  아시안: 'asian',
  기타: 'etc',
};

export const SORTINGWAY = {
  이름순: 'name',
  거리순: 'distance',
};

export type Option = 'sortBy' | 'categorizeBy';

export interface AppState {
  restaurants: Restaurant[];
  modalOpen: boolean;
  modalInfo: Restaurant;
  sortBy: typeof SORTINGWAY[keyof typeof SORTINGWAY];
  categorizeBy: typeof CATEGORY[keyof typeof CATEGORY];
}

export interface Restaurant {
  [key: string]: any;
  category: typeof CATEGORY[keyof typeof CATEGORY];
  name: string;
  distance: number;
  description: string;
  favorite: boolean;
}
