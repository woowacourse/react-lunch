import { CATEGORIES, SORT_BY } from "../constants/constants";

type Restaurant = {
  category: Category;
  storeName: string;
  distance: number;
  detail: string;
  link: string;
};

type Category = typeof CATEGORIES[number];

type SortBy = typeof SORT_BY[number];

type RestaurantJSON = {
  category: string;
  storeName: string;
  distance: number;
  detail: string;
  link: string;
};

export type { Restaurant, Category, SortBy, RestaurantJSON };
