import RestaurantItem from './RestaurantItem';

import { DEFAULT_SORT_BY } from '../../../domain/constants';
import { restaurantService } from '../../../domain/restaurantService';
import type { Restaurant } from '../../../domain/type';

interface Props {
  restaurants: Restaurant[];
  category: string;
  sortBy: string;
  onClickRestaurant: (restaurant: Restaurant) => void;
}

const RestaurantList = ({
  restaurants,
  category,
  sortBy,
  onClickRestaurant,
}: Props) => {
  const filtered = restaurantService.filterByCategory(restaurants, category);
  const sorted =
    sortBy === DEFAULT_SORT_BY
      ? restaurantService.sortByName(filtered)
      : restaurantService.sortByDistance(filtered);

  return (
    <ul className="restaurant-list">
      {sorted.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onClickRestaurant={onClickRestaurant}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
