import { Component } from "react";
import restaurantMockData from "./mocks/restaurants.json";
import { RestaurantApp, RestaurantInfo } from "./types";
import Restaurants from "./components/Restaurants";
import SelectBoxes from "./components/SelectBoxes";
import HeaderSection from "./components/HeaderSection";
import { CATEGORY, LANGUAGE, SORTING_SELECT } from "./constants";

class App extends Component<{}, RestaurantApp> {
  state = {
    filteredRestaurants: this.filter(
      localStorage.getItem("category") ?? CATEGORY.ALL,
      localStorage.getItem("sorting") ?? SORTING_SELECT.NAME
    ),
    category: localStorage.getItem("category") ?? CATEGORY.ALL,
    sorting: localStorage.getItem("sorting") ?? SORTING_SELECT.NAME,
  };

  sortRestaurantsByName(restaurants: RestaurantInfo[]) {
    return [...restaurants].sort((resA, resB) =>
      resA.name.localeCompare(resB.name, LANGUAGE)
    );
  }

  handleCategorySelect = (value: string) => {
    const filteredRestaurants = this.filter(value);
    this.setState({
      filteredRestaurants: filteredRestaurants,
      category: value,
    });

    localStorage.setItem("category", value);
  };

  handleSortingSelect = (value: string) => {
    const filteredRestaurants = this.filter(this.state.category, value);
    this.setState({ filteredRestaurants: filteredRestaurants, sorting: value });

    localStorage.setItem("sorting", value);
  };

  filter(
    category: string = this.state.category,
    sorting: string = this.state.sorting
  ) {
    const filteredRestaurants = this.sortRestaurantsByName(
      restaurantMockData
    ).filter((restaurant) =>
      category === CATEGORY.ALL ? restaurant : restaurant.category === category
    );

    if (sorting === SORTING_SELECT.NAME) {
      return this.sortRestaurantsByName(filteredRestaurants);
    } else {
      return [...filteredRestaurants].sort(
        (resA, resB) => resA.takingTime - resB.takingTime
      );
    }
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
