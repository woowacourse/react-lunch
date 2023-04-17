import styles from './style.module.css';
import { Restaurant } from '../../types';
import { RESTAURANT_IMAGE } from '../../constants/images';

interface RestaurantItemProps {
  restaurant: Restaurant;
  onClick: (restaurant: Restaurant) => void;
}

function RestaurantItem({ restaurant, onClick }: RestaurantItemProps) {
  return (
    <li className={styles.restaurant} data-id={restaurant.id} onClick={() => onClick(restaurant)}>
      <div className={styles.restaurantCategory}>
        <img
          src={RESTAURANT_IMAGE[restaurant.category]}
          alt={restaurant.category}
          className={styles.categoryIcon}
        />
      </div>
      <div className={styles.restaurantInfoContainer}>
        <div className={styles.restaurantInfo}>
          <h3 className={`${styles.restaurantName} text-subtitle`}>{restaurant.name}</h3>
          <span className={`${styles.restaurantDistance} text-body`}>
            캠퍼스부터 {restaurant.distance}분 내
          </span>
          <p className={`${styles.restaurantDescription} text-body`}>
            {restaurant.description ?? ''}
          </p>
        </div>
      </div>
    </li>
  );
}

export default RestaurantItem;
