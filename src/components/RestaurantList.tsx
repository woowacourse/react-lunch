import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Restaurant } from "../types/Restaurant";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <ul>
      {
        restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.name} restaurant={restaurant} />
        ))
      }
    </ul>
  );
}

export default RestaurantList;
