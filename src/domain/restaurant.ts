import { Category, Restaurant, SortBy } from "../types/Restaurant";
import mockData from "../data/mockData.json";
import { RESTAURANTS_KEY } from "../constants/constants";

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

export const getRestaurants = () => {
  const storageRestaurants = localStorage.getItem(RESTAURANTS_KEY);
  if (storageRestaurants) return JSON.parse(storageRestaurants);

  const { restaurants } = mockData as { restaurants: Restaurant[] };
  localStorage.setItem(RESTAURANTS_KEY, JSON.stringify(restaurants));

  return restaurants;
};
