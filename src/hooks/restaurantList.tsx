import RestaurantItem from '../components/RestaurantItem/RestaurantItem';
import { Restaurant } from '../types';

export const useRestaurantList = (restaurantList: Restaurant[], setSelectedRestaurant: CallableFunction) => {
  const createRestaurantItemListElement = () => {
    return restaurantList.map(restaurant => {
      return (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} setSelectedRestaurant={setSelectedRestaurant} />
      );
    });
  };

  return createRestaurantItemListElement;
};
