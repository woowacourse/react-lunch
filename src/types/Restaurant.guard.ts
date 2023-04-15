import { CATEGORIES, SORT_BY } from "../constants/constants";
import { Category, SortBy } from "./Restaurant";

export const isCategory = (category: string): category is Category => {
  for (const c of CATEGORIES) {
    if (c === category) return true;
  }
  return false;
};

export const isSortBy = (sortBy: string): sortBy is SortBy => {
  for (const s of SORT_BY) {
    if (s === sortBy) return true;
  }
  return false;
};
