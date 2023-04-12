import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Restaurant } from "../types/Restaurant";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

class RestaurantList extends React.Component<RestaurantListProps> {

  render() {
    return (
      <>
        {
          this.props.restaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.name} restaurant={restaurant} />
          ))
        }
      </>
    );
  }
}

export default RestaurantList;
