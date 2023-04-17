import "./index.css";
import RestaurantItem from "../RestaurantItem";
import { Restaurant } from "../../types/restaurant";
import { useCallback, useEffect, useState } from "react";
import { getInitList, sortByDistance, sortByName } from "../../domain/restaurantUtils";
import { RestaurantListProps } from "./type";

const allRestaurants: Restaurant[] = getInitList();

const RestaurantList = (props: RestaurantListProps) => {
  const [filteredRestaurants, setfilteredRestaurants] = useState(allRestaurants);
  const { selectedCategory, selectedSort } = props;

  const getListByCategory = useCallback(
    (restaurants: Restaurant[]) => {
      return selectedCategory === "all"
        ? restaurants
        : restaurants.filter((restaurant) => restaurant.category === selectedCategory);
    },
    [selectedCategory]
  );

  const getSortedList = useCallback(
    (restaurants: Restaurant[]) => {
      switch (selectedSort) {
        case "name":
          return sortByName(restaurants);
        case "distance":
          return sortByDistance(restaurants);
      }
    },
    [selectedSort]
  );

  useEffect(() => {
    const restaurantListByCategory = getListByCategory(allRestaurants);
    const sortedRestaurantList = getSortedList(restaurantListByCategory);

    setfilteredRestaurants(sortedRestaurantList);
  }, [getListByCategory, getSortedList]);

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
