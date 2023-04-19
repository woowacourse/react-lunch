export interface Restaurant {
  id: string;
  category: string;
  name: string;
  takeTime: number;
  description?: string;
  link?: string;
  isFavorite?: boolean;
}

export type OnClickRestaurant = (restaurant: Restaurant) => void;
