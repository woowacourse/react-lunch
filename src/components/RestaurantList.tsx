import RestaurantItem from "./RestaurantItem";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantList.module.css";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";
import { isCategory } from "../assets/images/category";
import useSelectBox from "../hooks/useSelectBox";

interface Props {
  options: { category: string; sorting: string };
}

const RestaurantList = (props: Props) => {
  const { category, sorting } = props.options;

  const [getRestaurants] = useLocalStorage("restaurant");
  const restaurants: Restaurant[] = getRestaurants();

  const { filterList, sortList } = useSelectBox<Restaurant>(restaurants);
  const selctedRestaurnants = sortList(filterList(category), sorting);

  return (
    <ul className={styles.restaurantList}>
      {selctedRestaurnants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default RestaurantList;
