import { CATEGORIES } from '../constants';

export type Categories = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export type Restaurant = {
  category: Categories;
  name: string;
  distanceByMinutes: number;
  description: string;
  referenceUrl: string;
};

export type RestaurantObject = {
  restaurant: Restaurant;
};

export type SetModalRestaurant = {
  setModalRestaurant: (restaurant: Restaurant | null) => void;
};
