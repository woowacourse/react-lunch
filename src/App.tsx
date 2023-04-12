import { Component } from "react";
import Restaurants from "./components/restaurants";
import SelectBoxes from "./components/selectBoxes";
import RestaurantMockData from "./mocks/restaurants.json";
import { RestaurantInfo } from "./types";

type RestaurantProps = {
  restaurants: RestaurantInfo[];
  category: string;
};

class App extends Component<{}, RestaurantProps> {
  state = {
    restaurants: RestaurantMockData,
    category: "전체",
  };

  onChange = (value: string) => {
    const filteredRestaurants = this.filter(value);
    this.setState({ restaurants: filteredRestaurants, category: value });
  };

  filter(value: string) {
    if (value === "전체") return RestaurantMockData;

    const filteredRestaurants = RestaurantMockData.filter(
      (restaurant) => restaurant.category === value
    );

    this.setState({ ...this.state, restaurants: filteredRestaurants });

    return filteredRestaurants;
  }

  render() {
    return (
      <>
        <SelectBoxes onChange={this.onChange} />
        <Restaurants
          restaurantList={this.state.restaurants}
          category={this.state.category}
        />
      </>
    );
  }
}

export default App;
