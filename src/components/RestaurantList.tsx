import { Component } from "react";
import RestaurantItem from "./RestaurantItem";
import mockData from "../assets/mockData.json";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantList.module.css";

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

    if (category === "전체") {
      return this.state.restaurants;
    }

    return this.state.restaurants.filter((data) => data.category === category);
  }

  sortList(restaurants: Restaurant[]) {
    const { sorting } = this.props.options;

    if (sorting === "이름순") {
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
