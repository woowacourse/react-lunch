import './style.css';
import { Dispatch, SetStateAction, memo } from 'react';
import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

interface RestaurantListProps {
  restaurantList: Restaurant[];
  onItemClick: Dispatch<SetStateAction<Restaurant | null>>;
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
