import styles from './style.module.css';
import { memo } from 'react';
import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

interface RestaurantListProps {
  restaurantList: Restaurant[];
  onItemClick: (restaurant: Restaurant) => void;
}

function RestaurantList({ restaurantList, onItemClick }: RestaurantListProps) {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} onClick={onItemClick} />
        ))}
      </ul>
    </section>
  );
}

export default memo(RestaurantList);
