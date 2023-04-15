import React from "react";
import { Restaurant } from "../types/Restaurant";
import RestaurantItem from "./RestaurantItem";

type RestaurantListProps = { restaurants: Restaurant[] };

const RestaurantList = (props: RestaurantListProps) => {
  return (
    <ul>
      {props.restaurants.map((restaurant) => {
        return (
          <RestaurantItem key={restaurant.storeName} restaurant={restaurant} />
        );
      })}
    </ul>
  );
};

export default RestaurantList;
