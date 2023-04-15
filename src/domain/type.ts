export type RestaurantId = string;
export interface Restaurant {
  id: RestaurantId;
  category: string;
  name: string;
  distance: number;
  description?: string;
  link?: string;
  isFavorite?: boolean;
}
