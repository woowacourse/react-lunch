import { Component } from "react";
import Restaurant from "./restaurant";
import RestaurantMockData from "../mocks/restaurants.json";
import { RestaurantInfo } from "../types";

class Restaurants extends Component {
  render() {
    return (
      <ul>
        {RestaurantMockData.map((restaurant: RestaurantInfo) => (
          <Restaurant key={restaurant.id} {...restaurant} />
        ))}
        ;
      </ul>
    );
  }
}

export default Restaurants;
