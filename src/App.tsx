import { useState } from "react";
import restaurantMockData from "./mocks/restaurants.json";
import { RestaurantInfo } from "./types";
import Restaurants from "./components/Restaurants";
import SelectBoxes from "./components/SelectBoxes";
import HeaderSection from "./components/HeaderSection";
import { CATEGORY, LANGUAGE, SORTING_SELECT } from "./constants";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "./utils/localStorageHandler";

const App = () => {
  const sortRestaurantsByName = (restaurants: RestaurantInfo[]) => {
    return [...restaurants].sort((a, b) =>
      a.name.localeCompare(b.name, LANGUAGE)
    );
  };

  const sortBySelectedOption = (
    sorting: string,
    filteredRestaurants: RestaurantInfo[]
  ) => {
    if (sorting === SORTING_SELECT.NAME) {
      return sortRestaurantsByName(filteredRestaurants);
    }
    return [...filteredRestaurants].sort((a, b) => a.takingTime - b.takingTime);
  };

  const filterBySelectedOptions = (
    selectedCategory: string = category,
    selectedSorting: string = sorting
  ) => {
    const allRestaurants = restaurantMockData;
    const selectedCategoryRestaurants = allRestaurants.filter(
      (restaurant) => restaurant.category === selectedCategory
    );

    const filteredRestaurants =
      selectedCategory === CATEGORY.전체
        ? allRestaurants
        : selectedCategoryRestaurants;

    return sortBySelectedOption(selectedSorting, filteredRestaurants);
  };

  const initRestaurants = () => {
    return filterBySelectedOptions(
      getItemFromLocalStorage("category") ?? CATEGORY.전체,
      getItemFromLocalStorage("sorting") ?? SORTING_SELECT.NAME
    );
  };

  const [filteredRestaurants, setFilteredRestaurants] = useState<
    RestaurantInfo[]
  >(initRestaurants());
  const [category, setCategory] = useState(
    getItemFromLocalStorage("category") ?? CATEGORY.전체
  );
  const [sorting, setSorting] = useState(
    getItemFromLocalStorage("sorting") ?? SORTING_SELECT.NAME
  );

  const handleCategorySelect = (value: string) => {
    const filteredRestaurants = filterBySelectedOptions(value);
    setFilteredRestaurants(filteredRestaurants);
    setCategory(value);

    setItemInLocalStorage("category", value);
  };

  const handleSortingSelect = (value: string) => {
    const filteredRestaurants = filterBySelectedOptions(undefined, value);
    setFilteredRestaurants(filteredRestaurants);
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
      <Restaurants restaurantList={filteredRestaurants} category={category} />
    </>
  );
};

export default App;
