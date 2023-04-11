import { Component } from "react";
import Restaurant from "./restaurant";
import RestaurantMockData from "../mocks/restaurants.json";
import { RestaurantInfo } from "../types";
import styled from "styled-components";

class Restaurants extends Component {
  render() {
    return (
      <RestaurantList>
        {RestaurantMockData.map((restaurant: RestaurantInfo) => (
          <Restaurant key={restaurant.id} {...restaurant} />
        ))}
        ;
      </RestaurantList>
    );
  }
}

const RestaurantList = styled.ul`
  padding: 0 16px;
  margin: 16px 0;
`;

export default Restaurants;
