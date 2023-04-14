import { CATEGORIES, DISTANCES, SORTING_TYPES } from "../constants";

export type Category = typeof CATEGORIES[number];
export type Distance = typeof DISTANCES[number];
export type SortingType = typeof SORTING_TYPES[number];

export interface Restaurant {
  id: string;
  category: Category;
  name: string;
  distance: Distance;
  description: string;
  link: string;
}
