import { useEffect, useState } from "react";
import { getSavedRestaurantList, hasSavedRestaurantList, saveRestaurantList } from "./initializeRestaurantList";
import { RestaurantInfo } from "../../types/restaurantInfo";

type useRestaurantsReturns = [
  RestaurantInfo[],
  React.Dispatch<React.SetStateAction<RestaurantInfo[]>>,
  (target: RestaurantInfo) => void,
];

function useRestaurants (): useRestaurantsReturns {
  if (!hasSavedRestaurantList()) saveRestaurantList();
  
  const [restaurants, setRestaurants] = useState(getSavedRestaurantList());

  const deleteRestaurant = (target: RestaurantInfo) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant !== target));
  };

  useEffect(() => {
    saveRestaurantList(restaurants);
  }, [restaurants]);

  return [restaurants, setRestaurants, deleteRestaurant];
}

export default useRestaurants;
