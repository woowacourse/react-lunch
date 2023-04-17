import { useState } from "react";
import restaurantMockData from "./mocks/restaurants.json";
import { CategorySelect, RestaurantInfo, SortingSelect } from "./types";
import Restaurants from "./components/Restaurants";
import SelectBoxes from "./components/SelectBoxes";
import HeaderSection from "./components/HeaderSection";
import { CATEGORY, SORTING_SELECT } from "./constants";
import { getItemFromLocalStorage } from "./utils/localStorageHandler";
import {
  sortAlphabetically,
  sortAscending,
} from "./utils/arrayOfObjectsSorter";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const getCategory = getItemFromLocalStorage("category", CATEGORY.전체);
  const getSorting = getItemFromLocalStorage("sorting", SORTING_SELECT.NAME);

  const [category, setCategory] = useLocalStorage("category", getCategory);
  const [sorting, setSorting] = useLocalStorage("sorting", getSorting);

  const sortBySelectedOption = (
    sorting: SortingSelect,
    filteredRestaurants: RestaurantInfo[]
  ) => {
    const restaurants = sortAlphabetically<RestaurantInfo>(
      filteredRestaurants,
      "name"
    );

    if (sorting === SORTING_SELECT.NAME) return restaurants;
    return sortAscending<RestaurantInfo>(restaurants, "takingTime"); // sort by proximity
  };

  const filterByCategory = (selectedCategory: CategorySelect) => {
    const allRestaurants = restaurantMockData;
    const selectedCategoryRestaurants = allRestaurants.filter(
      (restaurant) => restaurant.category === selectedCategory
    );

    return selectedCategory === CATEGORY.전체
      ? allRestaurants
      : selectedCategoryRestaurants;
  };

  const filterAndSortByOptions = (
    selectedCategory: CategorySelect = category,
    selectedSorting: SortingSelect = sorting
  ) => {
    const filteredRestaurants = filterByCategory(selectedCategory);
    return sortBySelectedOption(selectedSorting, filteredRestaurants);
  };

  const [restaurants, setRestaurants] = useState<RestaurantInfo[]>(
    filterAndSortByOptions(getCategory, getSorting)
  );

  const filterRestaurants = (key: string, value: string) => {
    if (key === "sorting") return filterAndSortByOptions(undefined, value);
    return filterAndSortByOptions(value);
  };

  const handleSelect = (key: string, value: string) => {
    const filteredRestaurants = filterRestaurants(key, value);
    setRestaurants(filteredRestaurants);

    if (key === "sorting") setSorting(value);
    if (key === "category") setCategory(value);
  };

  return (
    <>
      <HeaderSection />
      <SelectBoxes
        onChange={handleSelect}
        selectedCategory={category}
        selectedSorting={sorting}
      />
      <Restaurants restaurantList={restaurants} />
    </>
  );
};

export default App;
