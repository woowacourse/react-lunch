import { useContext } from "react";
import { GlobalContext } from "../containers/GlobalProvider";
import { Restaurant } from "../types/Restaurant";
interface UseRestaurant {
  restaurant: Restaurant;
}
const useRestaurant = (): UseRestaurant => {
  const globalState = useContext(GlobalContext);
  const restaurant = globalState.restaurant;

  return { restaurant };
}

export default useRestaurant;
