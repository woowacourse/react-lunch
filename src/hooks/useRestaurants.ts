import { useState } from "react";

import mockData from "../assets/mockData.json";
import { isCategory } from "../assets/images/category";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";
import type { Restaurant } from "../types/restaurant";

interface Options {
  category: string;
  sorting: string;
}

const initRestaurants: Restaurant[] = JSON.parse(localStorage.getItem("restaurant") ?? JSON.stringify(mockData));

const useRestaurants = () => {
  const [options, setOptions] = useState<Options>({ category: CATEGORY_OPTIONS.TOTAL, sorting: SORTING_OPTIONS.NAME });

  const filterList = () => {
    const { category } = options;

    if (category === CATEGORY_OPTIONS.TOTAL) {
      return initRestaurants;
    }

    if (category === CATEGORY_OPTIONS.ETC) {
      return initRestaurants.filter((data) => !isCategory(data.category));
    }

    return initRestaurants.filter((data) => data.category === category);
  };

  const sortList = (restaurants: Restaurant[]) => {
    const { sorting } = options;

    if (sorting === SORTING_OPTIONS.NAME) {
      return [...restaurants].sort((first, second) => first.name.localeCompare(second.name));
    }

    return [...restaurants].sort((first, second) => first.distance - second.distance);
  };

  const restaurants = sortList(filterList());

  const setOption = (key: string, option: string) => {
    setOptions((prev) => ({ ...prev, [key]: option }));
  };

  return { restaurants, setOption };
};

export default useRestaurants;
