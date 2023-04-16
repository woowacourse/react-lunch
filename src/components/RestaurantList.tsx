import { Component, useState } from "react";
import RestaurantItem from "./RestaurantItem";
import mockData from "../assets/mockData.json";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantList.module.css";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";
import { isCategory } from "../assets/images/category";

interface Props {
  options: { category: string; sorting: string };
}

const RestaurantList = (props: Props) => {
  const restaurants: Restaurant[] = JSON.parse(localStorage.getItem("restaurant") ?? JSON.stringify(mockData));

  const filterList = () => {
    const { category } = props.options;

    if (category === CATEGORY_OPTIONS.TOTAL) {
      return restaurants;
    }

    if (category === CATEGORY_OPTIONS.ETC) {
      return restaurants.filter((data) => !isCategory(data.category));
    }

    return restaurants.filter((data) => data.category === category);
  };

  const sortList = (restaurants: Restaurant[]) => {
    const { sorting } = props.options;

    if (sorting === SORTING_OPTIONS.NAME) {
      return [...restaurants].sort((first, second) => first.name.localeCompare(second.name));
    }

    return [...restaurants].sort((first, second) => first.distance - second.distance);
  };

  return (
    <ul className={styles.restaurantList}>
      {sortList(filterList()).map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default RestaurantList;
