import { useEffect, useState } from "react";
import { getSavedRestaurantList, hasSavedRestaurantList, saveRestaurantList } from "./initializeRestaurantList";
import { RestaurantInfo } from "../../types/restaurantInfo";

function useRestaurants () {
  const [restaurants, setRestaurants] = useState([] as RestaurantInfo[]);

  const deleteRestaurant = (target: RestaurantInfo) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant !== target));
  };

  useEffect(() => {
    if (!hasSavedRestaurantList()) saveRestaurantList();
    setRestaurants(getSavedRestaurantList());
  }, []);

  useEffect(() => {
    saveRestaurantList(restaurants);
  }, [restaurants]);

  return [restaurants, setRestaurants, deleteRestaurant];
}

export default useRestaurants;
