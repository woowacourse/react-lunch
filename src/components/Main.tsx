import React, { useCallback, useState } from "react";
import Select from "./Select";
import type { Category, SortBy } from "../types/Restaurant";
import RestaurantList from "./RestaurantList";
import { filterByCategory, getRestaurants, sortBy } from "../utils/restaurant";

const Main = () => {
  const storageData = getRestaurants();
  const [restaurants] = useState(storageData);
  const [category, setCategory] = useState("전체");
  const [sortByData, setSortByData] = useState("이름순");

  const handleCategory = useCallback((newCategory: Category) => {
    setCategory(newCategory);
  }, []);

  const handleSort = useCallback((newSort: SortBy) => {
    setSortByData(newSort);
  }, []);

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
