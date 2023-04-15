import { RestaurantCategory, TakingTime } from './types';

export interface Restaurant {
  id: number;
  category: RestaurantCategory;
  distance: TakingTime;
  name: string;
  description?: string;
  link?: string;
}
