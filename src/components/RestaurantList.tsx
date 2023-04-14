import { Component } from "react";
import RestaurantItem from "./RestaurantItem";
import mockData from "../assets/mockData.json";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantList.module.css";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";
import { isCategory } from "../assets/images/category";

interface Props {
  options: { category: string; sorting: string };
}

interface State {
  restaurants: Restaurant[];
}

class RestaurantList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      restaurants: JSON.parse(localStorage.getItem("restaurant") ?? JSON.stringify(mockData)),
    };
  }

  filterList() {
    const { category } = this.props.options;

    if (category === CATEGORY_OPTIONS.TOTAL) {
      return this.state.restaurants;
    }

    if (category === CATEGORY_OPTIONS.ETC) {
      return this.state.restaurants.filter((data) => !isCategory(data.category));
    }

    return this.state.restaurants.filter((data) => data.category === category);
  }

  sortList(restaurants: Restaurant[]) {
    const { sorting } = this.props.options;

    if (sorting === SORTING_OPTIONS.NAME) {
      return [...restaurants].sort((first, second) => first.name.localeCompare(second.name));
    }

    return [...restaurants].sort((first, second) => first.distance - second.distance);
  }

  render() {
    return (
      <ul className={styles.restaurantList}>
        {this.sortList(this.filterList()).map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}

export default RestaurantList;
