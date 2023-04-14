import { RestaurantCategory, SelectorCategory, SelectorFilter, TakingTime } from './types';

export interface AppState {
  category: SelectorCategory;
  filter: SelectorFilter;
  wholeList: Array<Restaurant>;
  currentList: Array<Restaurant>;
}

export interface Restaurant {
  id: number;
  category: RestaurantCategory;
  distance: TakingTime;
  name: string;
  description?: string;
  link?: string;
}
