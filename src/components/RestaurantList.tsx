import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Category, Restaurant, Sort } from "../types/Restaurant";

interface RestaurantListProps {
  restaurants: Restaurant[];
  sortBy: Sort;
  categorizeBy: Category;
}

function RestaurantList({ restaurants, sortBy, categorizeBy }: RestaurantListProps) {

  return (
    <ul>
      {
        restaurants
          .sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)
          .filter((restaurant) => categorizeBy === 'all' ? true : restaurant.category === categorizeBy)
          .map((restaurant) => (
            <RestaurantItem key={restaurant.name} restaurant={restaurant} />
          ))
      }
    </ul>
  );
}

export default RestaurantList;
