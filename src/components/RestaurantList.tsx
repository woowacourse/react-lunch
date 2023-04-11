import { Component } from "react";
import RestaurantItem from "./RestaurantItem";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantList.module.css";

interface Props {
  list: Restaurant[];
}

class RestaurantList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.restaurantList}>
        {this.props.list.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}

export default RestaurantList;
