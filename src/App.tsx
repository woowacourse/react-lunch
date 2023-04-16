import { Component } from "react";
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

interface Props {
  filteredRestaurants: RestaurantInfo[];
  category: string;
  sorting: string;
}

class App extends Component<{}, Props> {
  state = {
    filteredRestaurants: this.filterBySelectedOptions(
      getItemFromLocalStorage("category") ?? CATEGORY.전체,
      getItemFromLocalStorage("sorting") ?? SORTING_SELECT.NAME
    ),
    category: getItemFromLocalStorage("category") ?? CATEGORY.전체,
    sorting: getItemFromLocalStorage("sorting") ?? SORTING_SELECT.NAME,
  };

  handleCategorySelect = (value: string) => {
    const filteredRestaurants = this.filterBySelectedOptions(value);
    this.setState({
      filteredRestaurants: filteredRestaurants,
      category: value,
    });

    setItemInLocalStorage("category", value);
  };

  handleSortingSelect = (value: string) => {
    const filteredRestaurants = this.filterBySelectedOptions(undefined, value);
    this.setState({ filteredRestaurants: filteredRestaurants, sorting: value });

    setItemInLocalStorage("sorting", value);
  };

  filterBySelectedOptions(
    category: string = this.state.category,
    sorting: string = this.state.sorting
  ) {
    const allRestaurants = restaurantMockData;
    const selectedCategoryRestaurants = allRestaurants.filter(
      (restaurant) => restaurant.category === category
    );

    const filteredRestaurants =
      category === CATEGORY.전체 ? allRestaurants : selectedCategoryRestaurants;

    return this.sortBySelectedOption(sorting, filteredRestaurants);
  }

  sortBySelectedOption(sorting: string, filteredRestaurants: RestaurantInfo[]) {
    if (sorting === SORTING_SELECT.NAME) {
      return this.sortRestaurantsByName(filteredRestaurants);
    }
    return [...filteredRestaurants].sort((a, b) => a.takingTime - b.takingTime);
  }

  sortRestaurantsByName(restaurants: RestaurantInfo[]) {
    return [...restaurants].sort((a, b) =>
      a.name.localeCompare(b.name, LANGUAGE)
    );
  }

  render() {
    return (
      <>
        <HeaderSection></HeaderSection>
        <SelectBoxes
          onChangeCategory={this.handleCategorySelect}
          onChangeSorting={this.handleSortingSelect}
          selectedCategory={this.state.category}
          selectedSorting={this.state.sorting}
        />
        <Restaurants
          restaurantList={this.state.filteredRestaurants}
          category={this.state.category}
        />
      </>
    );
  }
}

export default App;
