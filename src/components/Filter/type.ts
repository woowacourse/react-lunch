import { CategoryOption, SortOption } from "../../types/restaurant";

export interface FilterProps {
  setSelectedCategory: (category: CategoryOption) => void;
  setSelectedSort: (sort: SortOption) => void;
}
