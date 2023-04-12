import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Restaurant, Sort } from "../types/Restaurant";

interface RestaurantListProps {
  restaurants: Restaurant[];
  sortBy: Sort;
}

class RestaurantList extends React.Component<RestaurantListProps> {

  render() {
    const { restaurants, sortBy } = this.props;

    return (
      <ul>
        {
          restaurants
            .sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)
            .map((restaurant) => (
              <RestaurantItem key={restaurant.name} restaurant={restaurant} />
            ))
        }
      </ul>
    );
  }
}

export default RestaurantList;
