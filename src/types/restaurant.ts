export type Category = "korean" | "chinese" | "japanese" | "asian" | "western" | "etc";

type Distance = 5 | 10 | 15 | 20 | 30;

export interface Restaurant {
  id: number;
  name: string;
  category: Category;
  distance: Distance;
  description?: string;
  link?: string;
}

export type CategoryOption = Category | "all";

export type SortOption = "name" | "distance";
