import React from "react";
import mockData from "../__mocks__/mockData.json";
import RestaurantItem from "./RestaurantItem";
import { Restaurant } from "../types/Restaurant";

interface RestaurantListState {
  restaurants: Restaurant[];
}

class RestaurantList extends React.Component<{}, RestaurantListState> {

  constructor(props: Readonly<{}> | {}) {
    super(props);
    this.state = { restaurants: mockData };
  }

  render() {
    return (
      <>
        {
          this.state.restaurants.map((r) => (
            <RestaurantItem key={r.name} restaurant={r} />
          ))
        }
      </>
    );
  }
}

export default RestaurantList;
