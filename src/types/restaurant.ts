import type { Category } from "../constants/options";

export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: number;
  description: string;
  link: string;
}
