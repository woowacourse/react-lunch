import { CATEGORIES, SORT_OPTIONS } from '../constants';

export type Categories = (typeof CATEGORIES)[keyof typeof CATEGORIES];
export type SortOptions = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

export type Restaurant = {
  id: number;
  category: Categories;
  name: string;
  distanceByMinutes: number;
  description: string;
  referenceUrl: string;
};

export type SetModalRestaurantId = {
  setModalRestaurantId: (restaurant: number | null) => void;
};
