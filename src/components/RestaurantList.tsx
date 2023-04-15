import RestaurantItem from "./RestaurantItem";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantList.module.css";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList = (props: RestaurantListProps) => {
  return (
    <ul className={styles.restaurantList}>
      {props.restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default RestaurantList;
