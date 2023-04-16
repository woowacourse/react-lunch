export interface RestaurantInfo {
  [key: string]: string | number;
  id: string;
  category: string;
  name: string;
  takingTime: number;
  description: string;
  link: string;
}
