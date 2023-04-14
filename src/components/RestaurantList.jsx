import React, { useContext } from "react";
import { RestaurantContext } from "../App";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
  const { state } = useContext(RestaurantContext);
  const { restaurants, sortBy, categorizeBy } = state;

  return (
    <ul>
      {restaurants
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
        .filter((restaurant) =>
          categorizeBy === "all" ? true : restaurant.category === categorizeBy
        )
        .map((restaurant) => (
          <RestaurantItem key={restaurant.name} restaurant={restaurant} />
        ))}
    </ul>
  );
};

export default RestaurantList;
