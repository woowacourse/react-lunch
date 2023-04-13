import { CATEGORIES } from '../constants';

export type Categories = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export type Restaurant = {
  id: number;
  category: Categories;
  name: string;
  distanceByMinutes: number;
  description: string;
  referenceUrl: string;
};

export type RestaurantObject = {
  restaurant: Restaurant;
};

export type SetModalRestaurantId = {
  setModalRestaurantId: (restaurant: number | null) => void;
};
