import React from "react";
import { Restaurant } from "../types/Restaurant";
import RestaurantItem from "./RestaurantItem";

type RestaurantListProps = { restaurants: Restaurant[] };

class RestaurantList extends React.Component<RestaurantListProps> {
  render() {
    return (
      <ul>
        {this.props.restaurants.map((restaurant) => {
          return (
            <RestaurantItem
              key={restaurant.storeName}
              restaurant={restaurant}
            />
          );
        })}
      </ul>
    );
  }
}

export default RestaurantList;
