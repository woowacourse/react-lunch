import { Component } from "react";
import RestaurantItem from "./RestaurantItem";
import mockData from "../assets/mockData.json";

import styles from "./RestaurantList.module.css"

class RestaurantList extends Component {
  render() {
    return (
      <ul className={styles.restaurantList}>
        {mockData.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}

export default RestaurantList;
