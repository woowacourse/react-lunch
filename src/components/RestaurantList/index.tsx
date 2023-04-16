import "./index.css";
import RestaurantItem from "../RestaurantItem";
import { CategoryOption, Restaurant, SortOption } from "../../types/restaurant";
import { useCallback, useEffect, useState } from "react";
import { getInitList } from "../../domain/restaurantInitList";

interface RestaurantListProps {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
}

const allRestaurants: Restaurant[] = getInitList();

const RestaurantList = (props: RestaurantListProps) => {
  const [filteredRestaurants, setfilteredRestaurants] = useState(allRestaurants);
  const { selectedCategory, selectedSort } = props;

  const getListByCategory = useCallback(
    (restaurants: Restaurant[]) => {
      if (selectedCategory === "all") {
        return restaurants;
      }

      return restaurants.filter((restaurant) => restaurant.category === selectedCategory);
    },
    [selectedCategory]
  );

  const getSortedList = useCallback(
    (restaurants: Restaurant[]) => {
      if (selectedSort === "name") {
        return getSortedListByName(restaurants);
      }
      if (selectedSort === "distance") {
        return getSortedListByDistance(restaurants);
      }

      return restaurants;
    },
    [selectedSort]
  );

  useEffect(() => {
    const restaurantListByCategory = getListByCategory(allRestaurants);
    const sortedRestaurantList = getSortedList(restaurantListByCategory);

    setfilteredRestaurants(sortedRestaurantList);
  }, [getListByCategory, getSortedList]);

  const getSortedListByName = (restaurants: Restaurant[]) => {
    return [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
  };

  const getSortedListByDistance = (restaurants: Restaurant[]) => {
    return [...restaurants].sort((a, b) => a.distance - b.distance);
  };

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
