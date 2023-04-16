import { RestaurantCategory, SelectorCategory, SelectorFilter, TakingTime } from './types';

export interface appState {
  category: SelectorCategory;
  filter: SelectorFilter;
  wholeList: Array<restaurant>;
  currentList: Array<restaurant>;
}

export interface restaurant {
  id: number;
  category: RestaurantCategory;
  distance: TakingTime;
  name: string;
  description?: string;
  link?: string;
}
