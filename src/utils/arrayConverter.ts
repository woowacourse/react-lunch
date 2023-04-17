import { SELECT_OPTION } from "../constant/select";
import { Restaurant } from "../types/restaurant";
import { CategoryUnion, SortingUnion } from "../types/select";

export const getFilteredRestaurantsByCategory = (
  restaurants: Restaurant[],
  category: CategoryUnion
) => {
  if (category === SELECT_OPTION.ALL) return restaurants;

  return restaurants.filter((item) => item.category === category);
};

export const getSortedRestaurants = (
  restaurants: Restaurant[],
  sortingType: SortingUnion
) => {
  if (sortingType === SELECT_OPTION.NAME) {
    return [...restaurants].sort((resA, resB) =>
      resA.name.localeCompare(resB.name)
    );
  }

  if (sortingType === SELECT_OPTION.TAKING_TIME) {
    return [...restaurants].sort(
      (resA, resB) => resA.takingTime - resB.takingTime
    );
  }

  return restaurants;
};
