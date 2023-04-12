import { Category, Restaurant, SortBy } from "../types/Restaurant";

export const filterByCategory = (
  restaurants: Restaurant[],
  category: Category
) => {
  if (category === "전체") return restaurants;

  return restaurants.filter((r) => r.category === category);
};

export const sortBy = (restaurants: Restaurant[], sort: SortBy) => {
  if (sort === "이름순") {
    return restaurants.sort((a, b) => a.storeName.localeCompare(b.storeName));
  }

  return restaurants.sort((a, b) => a.distance - b.distance);
};
