import React, { useState } from "react";
import Select from "./Select";
import type { Category, SortBy } from "../types/Restaurant";
import RestaurantList from "./RestaurantList";
import { filterByCategory, getRestaurants, sortBy } from "../utils/restaurant";

import { useSelect } from "../hooks/useSelect";

const Main = () => {
  const storageData = getRestaurants();
  const [restaurants] = useState(storageData);
  const [category, handleCategory] = useSelect("전체");
  const [sortByData, handleSort] = useSelect("이름순");

  const filteredData = filterByCategory(restaurants, category as Category);
  const sortedData = sortBy(filteredData, sortByData as SortBy);

  return (
    <>
      <Select setCategory={handleCategory} setSort={handleSort} />
      <RestaurantList restaurants={sortedData} />
    </>
  );
};

export default Main;
