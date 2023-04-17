import { Restaurant } from '../types';

export const useRestaurantItem = (setSelectedRestaurant: CallableFunction) => {
  const selectRestaurant = (selectedRestaurant: Restaurant) => setSelectedRestaurant(selectedRestaurant);

  return selectRestaurant;
};
