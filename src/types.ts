import { CATEGORY, SORTING } from "./constants";

export type CategoryOption = (typeof CATEGORY)[keyof typeof CATEGORY];

export type SortOption =  (typeof SORTING)[keyof typeof SORTING];

export type Distance = 5 | 10 | 15 | 20 | 30;
export interface Restaurant {
  id: number;
  category: CategoryOption;
  name: string;
  distance: Distance;
  description?: string;
  link?: string;
}
