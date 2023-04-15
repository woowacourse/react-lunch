import { ChangeEvent, useCallback, useState } from "react";
import { Category, SortBy } from "../types/Restaurant";
import { isCategory, isSortBy } from "../types/Restaurant.guard";

export const useSelect = (
  initValue: Category | SortBy
): [string, (event: ChangeEvent<HTMLSelectElement>) => void] => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    if (isCategory(event.target.value) || isSortBy(event.target.value)) {
      setter(event.target.value);
    }
  }, []);
  return [value, handler];
};
