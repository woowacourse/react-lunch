import { useContext } from 'react';
import Store from '../../store';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantList.module.css';

function RestaurantList() {
  const { restaurantList } = useContext(Store);

  return (
    <ul className={styles.restaurantList}>
      {restaurantList.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} isModal={false} />
      ))}
    </ul>
  );
}

export default RestaurantList;
