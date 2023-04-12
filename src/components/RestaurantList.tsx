import React, { Component } from "react";
import { Restaurant } from "../types/Restaurant";
import RestaurantItem from "./RestaurantItem";

type RestaurantListProps = { restaurant: Restaurant[] };

export class RestaurantList extends Component<RestaurantListProps> {
  render() {
    return (
      <ul>
        {this.props.restaurant.map((restaurantData) => {
          return (
            <RestaurantItem
              key={restaurantData.storeName}
              restaurant={restaurantData}
            />
          );
        })}
      </ul>
    );
  }
}

export default RestaurantList;
