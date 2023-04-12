import { RESTAURANT_CATEGORY } from '../constants';

export type Category = typeof RESTAURANT_CATEGORY[number];

export interface Restaurant {
  category: Category;
  name: string;
  distance: number;
  description?: string;
  link?: string;
  id: number;
}

interface CurrentDisplayStatus {
  category: string;
  sortBy: string;
}

export interface State {
  restaurantList: Restaurant[];
  selectedRestaurant: number;
  currentDisplayStatus: CurrentDisplayStatus;
}
