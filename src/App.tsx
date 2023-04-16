import { useState } from "react";
import restaurantMockData from "./mocks/restaurants.json";
import { RestaurantInfo } from "./types";
import Restaurants from "./components/Restaurants";
import SelectBoxes from "./components/SelectBoxes";
import HeaderSection from "./components/HeaderSection";
import { CATEGORY, SORTING_SELECT } from "./constants";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "./utils/localStorageHandler";
import {
  sortAlphabetically,
  sortAscending,
} from "./utils/arrayOfObjectsSorter";

const App = () => {
  const getCategory = getItemFromLocalStorage("category", CATEGORY.전체);
  const getSorting = getItemFromLocalStorage("sorting", SORTING_SELECT.NAME);

  const [category, setCategory] = useState(getCategory);
  const [sorting, setSorting] = useState(getSorting);

  const sortBySelectedOption = (
    sorting: string,
    filteredRestaurants: RestaurantInfo[]
  ) => {
    const restaurants = sortAlphabetically<RestaurantInfo>(
      filteredRestaurants,
      "name"
    );

    if (sorting === SORTING_SELECT.NAME) return restaurants;
    return sortAscending<RestaurantInfo>(restaurants, "takingTime"); // sort by proximity
  };

  const filterByCategory = (selectedCategory: string) => {
    const allRestaurants = restaurantMockData;
    const selectedCategoryRestaurants = allRestaurants.filter(
      (restaurant) => restaurant.category === selectedCategory
    );

    return selectedCategory === CATEGORY.전체
      ? allRestaurants
      : selectedCategoryRestaurants;
  };

  const filterAndSortByOptions = (
    selectedCategory: string = category,
    selectedSorting: string = sorting
  ) => {
    const filteredRestaurants = filterByCategory(selectedCategory);
    return sortBySelectedOption(selectedSorting, filteredRestaurants);
  };

  const [restaurants, setRestaurants] = useState<RestaurantInfo[]>(
    filterAndSortByOptions(getCategory, getSorting)
  );

  const handleCategorySelect = (value: string) => {
    const filteredRestaurants = filterAndSortByOptions(value);
    setRestaurants(filteredRestaurants);
    setCategory(value);

    setItemInLocalStorage("category", value);
  };

  const handleSortingSelect = (value: string) => {
    const filteredRestaurants = filterAndSortByOptions(undefined, value);
    setRestaurants(filteredRestaurants);
    setSorting(value);

    setItemInLocalStorage("sorting", value);
  };

  return (
    <>
      <HeaderSection />
      <SelectBoxes
        onChangeCategory={handleCategorySelect}
        onChangeSorting={handleSortingSelect}
        selectedCategory={category}
        selectedSorting={sorting}
      />
      <Restaurants restaurantList={restaurants} />
    </>
  );
};

export default App;
