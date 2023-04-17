import { useEffect, useState } from 'react';
import restaurantMockData from './mocks/restaurants.json';
import type { RestaurantInfo } from './types';
import { CATEGORY, LANGUAGE, SORTING_SELECT } from './constants';
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from './utils/localStorageHandler';
import RestaurantList from './components/RestaurantList';
import RestaurantSelect from './components/RestaurantSelect';
import Header from './components/Header';

const App = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    RestaurantInfo[]
  >([]);
  const [category, setCategory] = useState<string>(
    getItemFromLocalStorage('category') ?? CATEGORY.ALL
  );
  const [sorting, setSorting] = useState<string>(
    getItemFromLocalStorage('sorting') ?? SORTING_SELECT.NAME
  );

  const filterBySelectedOptions = (category: string, sorting: string) => {
    const filteredRestaurants = sortRestaurantsByName(
      restaurantMockData
    ).filter((restaurant) =>
      category === CATEGORY.ALL ? restaurant : restaurant.category === category
    );
    return sortBySelectedOption(sorting, filteredRestaurants);
  };

  const handleCategorySelect = (value: string) => {
    const filteredRestaurants = filterBySelectedOptions(value, sorting);
    setFilteredRestaurants(filteredRestaurants);
    setCategory(value);
    setItemInLocalStorage('category', value);
  };

  const handleSortingSelect = (value: string) => {
    const filteredRestaurants = filterBySelectedOptions(category, value);
    setFilteredRestaurants(filteredRestaurants);
    setSorting(value);
    setItemInLocalStorage('sorting', value);
  };

  const sortRestaurantsByName = (restaurants: RestaurantInfo[]) => {
    return [...restaurants].sort((resA, resB) =>
      resA.name.localeCompare(resB.name, LANGUAGE)
    );
  };

  const sortBySelectedOption = (
    sorting: string,
    filteredRestaurants: RestaurantInfo[]
  ) => {
    if (sorting === SORTING_SELECT.NAME) {
      return sortRestaurantsByName(filteredRestaurants);
    }
    return [...filteredRestaurants].sort(
      (resA, resB) => resA.takingTime - resB.takingTime
    );
  };

  useEffect(() => {
    const filteredRestaurants = filterBySelectedOptions(category, sorting);
    setFilteredRestaurants(filteredRestaurants);
  }, [category, sorting]);

  return (
    <>
      <Header></Header>
      <RestaurantSelect
        onChangeCategory={handleCategorySelect}
        onChangeSorting={handleSortingSelect}
        selectedCategory={category}
        selectedSorting={sorting}
      />
      <RestaurantList restaurantList={filteredRestaurants} />
    </>
  );
};

export default App;
