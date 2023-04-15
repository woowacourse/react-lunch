import { SELECT_OPTION } from "../constant/select";
import { Restaurant } from "../types/restaurant";

export const getFilteredArray = (array: Restaurant[], value: string) => {
  if (value === SELECT_OPTION.ALL) return array;

  return [...array].filter((item) => item.category === value);
};

export const getSortedArray = (array: Restaurant[], sortingType: string) => {
  if (sortingType === SELECT_OPTION.NAME) {
    return [...array].sort((resA, resB) => resA.name.localeCompare(resB.name));
  }

  if (sortingType === SELECT_OPTION.TAKING_TIME) {
    return [...array].sort((resA, resB) => resA.takingTime - resB.takingTime);
  }

  return [...array];
};
