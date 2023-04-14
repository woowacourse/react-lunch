import './style.css';
import { memo } from 'react';
import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

interface RestaurantListProps {
  restaurantList: Restaurant[];
  onItemClick: (restaurant: Restaurant) => void;
}

function RestaurantList({ restaurantList, onItemClick }: RestaurantListProps) {
  console.log('rendering RestaurantList');

  const createRestaurantItemElements = () => {
    return restaurantList.map((restaurant) => (
      <RestaurantItem key={restaurant.id} restaurant={restaurant} onClick={onItemClick} />
    ));
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">{createRestaurantItemElements()}</ul>
    </section>
  );
}

export default memo(RestaurantList);
