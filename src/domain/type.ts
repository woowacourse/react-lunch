export interface Restaurant {
  id: string;
  category: string;
  name: string;
  distance: number;
  description?: string;
  link?: string;
  isFavorite?: boolean;
}
