import { restaurantCategory, selectorCategory, selectorFilter, takingTime } from './types';

export interface appState {
  category: selectorCategory;
  filter: selectorFilter;
  wholeList: Array<restaurant>;
}

export interface restaurant {
  id: number;
  category: restaurantCategory;
  distance: takingTime;
  name: string;
  description?: string;
  link?: string;
}
