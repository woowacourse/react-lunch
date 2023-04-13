import { Component } from "react";
import restaurantMockData from "./mocks/restaurants.json";
import { RestaurantInfo } from "./types";
import Restaurants from "./components/restaurants";
import SelectBoxes from "./components/selectBoxes";
import HeaderSection from "./components/headerSection";

type RestaurantProps = {
  restaurants: RestaurantInfo[];
  filteredRestaurants: RestaurantInfo[];
  category: string;
  sorting: string;
};

class App extends Component<{}, RestaurantProps> {
  state = {
    restaurants: this.sortRestaurantsByName(restaurantMockData),
    filteredRestaurants: this.sortRestaurantsByName(restaurantMockData),
    category: "전체",
    sorting: "이름순",
  };

  sortRestaurantsByName(restaurants: RestaurantInfo[]) {
    return [...restaurants].sort((resA, resB) =>
      resA.name.localeCompare(resB.name, "ko-KR")
    );
  }

  handleCategorySelect = (value: string) => {
    const filteredRestaurants = this.filter(value);
    this.setState({ restaurants: filteredRestaurants, category: value });
  };

  handleSortingSelect = (value: string) => {
    const filteredRestaurants = this.filter(this.state.category, value);

    this.setState({ restaurants: filteredRestaurants, sorting: value });
  };

  filter(
    category: string = this.state.category,
    sorting: string = this.state.sorting
  ) {
    const filteredRestaurants = this.sortRestaurantsByName(
      restaurantMockData
    ).filter((restaurant) =>
      category === "전체" ? restaurant : restaurant.category === category
    );

    if (sorting === "이름순") {
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
        />
        <Restaurants
          restaurantList={this.state.restaurants}
          category={this.state.category}
        />
      </>
    );
  }
}

export default App;
