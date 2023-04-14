import RestaurantItem from './RestaurantItem';
import type { Restaurant } from '../types/Restaurant';

type RestaurantListProps = {
  restaurants: Restaurant[];
};

function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <ul>
      {restaurants.map((restaurant) => {
        return <RestaurantItem key={restaurant.storeName} restaurant={restaurant} />;
      })}
    </ul>
  );
}

export default RestaurantList;
