import { CATEGORY, SORTING_SELECT } from "../constants";

export interface RestaurantInfo {
  [key: string]: string | number;
  id: string;
  category: string;
  name: string;
  takingTime: number;
  description: string;
  link: string;
}

export type SortingSelect = keyof typeof SORTING_SELECT;
export type CategorySelect = keyof typeof CATEGORY;
